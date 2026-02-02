import type { Metadata } from 'next';
import { lato, italianno, theSansMono } from './fonts';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { NavigationProvider } from '@/contexts/NavigationContext';
import MouseFollower from '@/components/MouseFollower';
const embedImagesUrl =
  'https://res.cloudinary.com/dul1hx8p3/image/upload/v1769078428/opengraph-image_m2vfnh.jpg';

export const metadata: Metadata = {
  title: "DEVSOC'26",
  description:
    "DEVSOC'26 ignites innovation in its seventh edition blending AI and the metaverse to solve real-world challenges. Bringing together diverse minds, we go beyond coding to build bold solutions that redefine what’s possible.",
  icons: {
    icon: '/icons/icon-16x16.webp',
    shortcut: '/icons/icon-32x32.webp',
    apple: '/icons/icon-16x16.webp',
  },
  openGraph: {
    title: "DEVSOC'26",
    description:
      "DEVSOC'26 ignites innovation in its seventh edition blending AI and the metaverse to solve real-world challenges. Bringing together diverse minds, we go beyond coding to build bold solutions that redefine what’s possible.",
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
    title: "DEVSOC'26",
    description:
      "DEVSOC'26 ignites innovation in its seventh edition blending AI and the metaverse to solve real-world challenges. Bringing together diverse minds, we go beyond coding to build bold solutions that redefine what’s possible.",
    images: [
      {
        url: embedImagesUrl,
        alt: "DEVSOC'26",
      },
    ],
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
        <link rel="preload" href="/rive/Hero.riv" as="fetch" crossOrigin="anonymous" />
        <link rel="preload" href="/images/hero/hero-placeholder.avif" as="image" />
        <link rel="preload" href="/images/hero/hero-placeholder-phone.avif" as="image" />
      </head>
      <body
        className={`${lato.variable} ${italianno.variable} ${theSansMono.variable} antialiased bg-black text-white select-none`}
      >
        <NavigationProvider>
          <Navbar />
          <MouseFollower />
          {children}
          <Footer />
        </NavigationProvider>
      </body>
    </html>
  );
}
