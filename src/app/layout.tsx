import type { Metadata } from 'next';
import { Newsreader, Plus_Jakarta_Sans } from 'next/font/google';
import '@/styles/globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import {
  SITE_NAME,
  SITE_URL,
  OFFICIAL_EMAIL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
} from '@/lib/seo/metadata';

const newsreader = Newsreader({
  subsets: ['latin'],
  variable: '--font-newsreader',
  display: 'swap',
  style: ['normal', 'italic'],
  adjustFontFallback: false,
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: 'Soulfuli — Understand yourself deeply enough to live differently',
  description:
    'Soulfuli connects emotional intelligence, mindfulness, and spirituality into one grounded journey toward self-awareness and intentional living.',
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: `${SITE_URL}/`,
  },
  openGraph: {
    title: 'Soulfuli — Understand yourself deeply enough to live differently',
    description:
      'Soulfuli connects emotional intelligence, mindfulness, and spirituality into one grounded journey toward self-awareness and intentional living.',
    url: `${SITE_URL}/`,
    siteName: SITE_NAME,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Soulfuli — Understand yourself deeply enough to live differently',
    description:
      'Soulfuli connects emotional intelligence, mindfulness, and spirituality into one grounded journey toward self-awareness and intentional living.',
  },
  icons: {
    icon: '/icon.svg',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      name: SITE_NAME,
      url: `${SITE_URL}/`,
      email: OFFICIAL_EMAIL,
      sameAs: [INSTAGRAM_URL, LINKEDIN_URL],
    },
    {
      '@type': 'WebSite',
      name: SITE_NAME,
      url: `${SITE_URL}/`,
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${newsreader.variable} ${plusJakartaSans.variable}`}>
      <body className="bg-background text-on-surface font-sans antialiased min-h-screen flex flex-col selection:bg-sage/20 selection:text-forest">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Header />
        <main className="flex-1 w-full pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
