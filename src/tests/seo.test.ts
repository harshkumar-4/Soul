import { describe, expect, it } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import sitemap from '@/app/sitemap';
import robots from '@/app/robots';
import { createPageMetadata, SITE_URL } from '@/lib/seo/metadata';

describe('SEO, canonical, sitemap, and robots configuration', () => {
  it('uses https://www.soulfuli.org as preferred canonical origin', () => {
    expect(SITE_URL).toBe('https://www.soulfuli.org');
    const homeMeta = createPageMetadata({
      title: 'Home',
      description: 'Desc',
      path: '/',
    });
    expect(homeMeta.alternates?.canonical).toBe('https://www.soulfuli.org/');
    expect(homeMeta.robots).toMatchObject({ index: true, follow: true });

    const storyMeta = createPageMetadata({
      title: 'Our Story',
      description: 'Desc',
      path: '/our-story',
    });
    expect(storyMeta.alternates?.canonical).toBe('https://www.soulfuli.org/our-story');
  });

  it('generates sitemap entries only for existing public indexable pages on www', () => {
    const entries = sitemap();
    const urls = entries.map((e) => e.url);
    expect(urls.length).toBeGreaterThanOrEqual(12);
    expect(new Set(urls).size).toBe(urls.length);

    for (const url of urls) {
      expect(url.startsWith('https://www.soulfuli.org')).toBe(true);
      expect(url).not.toContain('/api/');
      const relPath = url.replace('https://www.soulfuli.org', '').replace(/^\//, '');
      const pageFile = path.join(
        process.cwd(),
        'src',
        'app',
        relPath,
        'page.tsx'
      );
      expect(fs.existsSync(pageFile)).toBe(true);
    }
  });

  it('configures robots.txt with public allow, /api disallow, and www sitemap URL', () => {
    const cfg = robots();
    expect(cfg.sitemap).toBe('https://www.soulfuli.org/sitemap.xml');
    expect(cfg.rules).toMatchObject({
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    });
  });

  it('configures permanent non-www to www host redirect in next.config.mjs', async () => {
    const configMod = (await import('../../next.config.mjs')).default as {
      redirects?: () => Promise<
        Array<{
          source: string;
          has?: Array<{ type: string; value: string }>;
          destination: string;
          permanent: boolean;
        }>
      >;
    };
    const redirects = await configMod.redirects?.();
    expect(redirects).toEqual([
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'soulfuli.org' }],
        destination: 'https://www.soulfuli.org/:path*',
        permanent: true,
      },
    ]);
  });
});
