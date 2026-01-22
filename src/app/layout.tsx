import type { Metadata } from 'next';
import { lato, italianno, theSansMono } from './fonts';
import './globals.css';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

export const metadata: Metadata = {
  title: "DevSoc'26",
  description:
    'DevSOc’26 ignites innovation in its seventh edition blending AI and the metaverse to solve real-world challenges. Bringing together diverse minds, we go beyond coding to build bold solutions that redefine what’s possible.',
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
      <body
        className={`${lato.variable} ${italianno} ${theSansMono} antialiased bg-black text-white select-none`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
