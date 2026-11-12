import { describe, expect, it } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import { getBlurProps } from '@/lib/media/imagePlaceholders';
import { offeringsData } from '@/content/offerings';
import { emotionalArcStages } from '@/content/emotionalArc';
import { ourStoryContent } from '@/content/ourStory';

describe('Media assets and LQIP blur placeholders', () => {
  it('provides existing local files and WebP blurDataURLs for all offerings', () => {
    for (const item of offeringsData) {
      const diskPath = path.join(process.cwd(), 'public', item.imageSrc.replace(/^\//, ''));
      expect(fs.existsSync(diskPath)).toBe(true);
      const blur = getBlurProps(item.imageSrc);
      expect(blur.placeholder).toBe('blur');
      expect(blur.blurDataURL?.startsWith('data:image/webp;base64,')).toBe(true);
    }
  });

  it('provides existing local files and WebP blurDataURLs for emotionalArc & ourStory', () => {
    const sources = [
      ourStoryContent.hero.imageSrc,
      ...emotionalArcStages.map((s) => s.imageSrc).filter((s): s is string => Boolean(s)),
    ];

    for (const src of sources) {
      const diskPath = path.join(process.cwd(), 'public', src.replace(/^\//, ''));
      expect(fs.existsSync(diskPath)).toBe(true);
      const blur = getBlurProps(src);
      expect(blur.placeholder).toBe('blur');
      expect(blur.blurDataURL?.startsWith('data:image/webp;base64,')).toBe(true);
    }
  });
});

