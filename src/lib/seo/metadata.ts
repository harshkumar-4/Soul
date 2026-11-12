import type { Metadata } from 'next';

export const SITE_NAME = 'Soulfuli';
export const SITE_URL = 'https://www.soulfuli.org';
export const OFFICIAL_EMAIL = 'soulfuli.global@gmail.com';
export const INSTAGRAM_URL =
  'https://www.instagram.com/soulfuli_official?obrf=NzlubWljcXcwbW9o&utm_source=qr';
export const LINKEDIN_URL = 'https://www.linkedin.com/company/soulfuli/';

interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
  type?: 'website' | 'article';
}

export function createPageMetadata({
  title,
  description,
  path,
  type = 'website',
}: PageMetadataOptions): Metadata {
  const canonicalUrl = path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      locale: 'en_US',
      type,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

