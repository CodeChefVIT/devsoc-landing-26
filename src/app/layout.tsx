import type { Metadata } from 'next';
import { lato, italianno, theSansMono } from './fonts';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { NavigationProvider } from '@/contexts/NavigationContext';

const embedImagesUrl =
  'https://res.cloudinary.com/dul1hx8p3/image/upload/v1769078428/opengraph-image_m2vfnh.jpg';

const siteUrl = 'https://www.devsoc.codechefvit.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "DEVSOC'26 - CodeChef VIT Hackathon",
  description:
    "DEVSOC'26 ignites innovation in its seventh edition blending AI and the metaverse to solve real-world challenges. Bringing together diverse minds, we go beyond coding to build bold solutions that redefine what’s possible.",
  icons: {
    icon: [
      { url: '/icons/icon-16x16.webp', sizes: '16x16', type: 'image/webp' },
      { url: '/icons/icon-32x32.webp', sizes: '32x32', type: 'image/webp' },
      { url: '/icons/icon-48x48.webp', sizes: '48x48', type: 'image/webp' },
    ],
    shortcut: '/icons/icon-32x32.webp',
    apple: [
      { url: '/icons/icon-180x180.webp' },
      { url: '/icons/icon-192x192.webp', sizes: '192x192', type: 'image/webp' },
    ],
  },
  keywords: [
    'DEVSOC',
    'DEVSOC26',
    'CodeChef VIT',
    'hackathon',
    'coding competition',
    'AI',
    'metaverse',
    'innovation',
    'VIT',
    'Vellore Institute of Technology',
    'tech event',
  ],
  authors: [{ name: 'CodeChef VIT' }],
  creator: 'CodeChef VIT',
  publisher: 'CodeChef VIT',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: "DEVSOC'26 - CodeChef VIT Hackathon",
    description:
      "DEVSOC'26 ignites innovation in its seventh edition blending AI and the metaverse to solve real-world challenges. Bringing together diverse minds, we go beyond coding to build bold solutions that redefine what's possible.",
    siteName: "DEVSOC'26",
    locale: 'en_IN',
    images: [
      {
        url: embedImagesUrl,
        width: 1200,
        height: 630,
        alt: "DEVSOC'26",
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "DEVSOC'26 - CodeChef VIT Hackathon",
    description:
      "DEVSOC'26 ignites innovation in its seventh edition blending AI and the metaverse to solve real-world challenges. Bringing together diverse minds, we go beyond coding to build bold solutions that redefine what's possible.",
    creator: '@devsoc_codechef',
    images: [
      {
        url: embedImagesUrl,
        alt: "DEVSOC'26",
      },
    ],
  },
  category: 'Technology',
  applicationName: "DEVSOC'26",
  formatDetection: {
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="canonical" href={siteUrl} />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${lato.variable} ${italianno.variable} ${theSansMono.variable} antialiased bg-black text-white select-none`}
      >
        <NavigationProvider>
          <Navbar />
          {children}
          <Footer />
        </NavigationProvider>
      </body>
    </html>
  );
}
