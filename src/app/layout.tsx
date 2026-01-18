import type { Metadata } from 'next';
import { lato, italianno, splineSansMono } from './fonts';
import './globals.css';

import Navbar from '@/components/ui/navbar';

export const metadata: Metadata = {
  title: "DevSoc'26",
  description:
    'DevSoc’26 ignites innovation in its seventh edition blending AI and the metaverse to solve real-world challenges. Bringing together diverse minds, we go beyond coding to build bold solutions that redefine what’s possible.',
  icons: {
    icon: '/icons/icon-16x16.webp',
    shortcut: '/icons/icon-32x32.webp',
    apple: '/icons/icon-16x16.webp',
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
        <meta property="og:image" content="<generated>" />
        <meta property="og:image:type" content="<generated>" />
        <meta property="og:image:width" content="<generated>" />
        <meta property="og:image:height" content="<generated>" />

        <meta name="twitter:image" content="<generated>" />
        <meta name="twitter:image:type" content="<generated>" />
        <meta name="twitter:image:width" content="<generated>" />
        <meta name="twitter:image:height" content="<generated>" />
      </head>
      <body
        className={`${lato.variable} ${italianno.variable} ${splineSansMono.variable} antialiased bg-black text-white`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
