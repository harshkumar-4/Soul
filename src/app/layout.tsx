import type { Metadata } from 'next';
import { Newsreader, Plus_Jakarta_Sans } from 'next/font/google';
import '@/styles/globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

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
  title: 'SoulfulI — Understand yourself deeply enough to live differently',
  description:
    'SoulfulI connects emotional intelligence, mindfulness, and spirituality into one grounded journey toward self-awareness and intentional living.',
  metadataBase: new URL('https://soulfuli.com'),
  openGraph: {
    title: 'SoulfulI — Understand yourself deeply enough to live differently',
    description:
      'SoulfulI connects emotional intelligence, mindfulness, and spirituality into one grounded journey toward self-awareness and intentional living.',
    siteName: 'SoulfulI',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${newsreader.variable} ${plusJakartaSans.variable} scroll-smooth`}>
      <body className="bg-background text-on-surface font-sans antialiased min-h-screen flex flex-col selection:bg-sage/20 selection:text-forest">
        <Header />
        <main className="flex-1 w-full pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
