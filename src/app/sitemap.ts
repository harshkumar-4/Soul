import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://soulfuli.com';
  const routes = [
    '',
    '/our-story',
    '/what-we-offer',
    '/eq-audit',
    '/inner-compass',
    '/quiet-bloom',
    '/schools-colleges',
    '/organisations',
    '/what-makes-us-different',
    '/community',
    '/contact',
    '/privacy',
    '/terms',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' || route === '/eq-audit' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : route === '/eq-audit' ? 0.9 : 0.8,
  }));
}
