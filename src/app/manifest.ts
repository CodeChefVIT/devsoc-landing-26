import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "DEVSOC'26 - CodeChef VIT Hackathon",
    id: 'devsoc',
    short_name: "DEVSOC'26",
    description:
      "DEVSOC'26 ignites innovation in its seventh edition blending AI and the metaverse to solve real-world challenges.",
    start_url: '/',
    scope: '/',
    display: 'standalone',
    orientation: 'portrait-primary',
    background_color: '#000000',
    theme_color: '#000000',
    categories: ['productivity', 'technology'],
    icons: [
      {
        src: '/icons/icon-16x16.webp',
        sizes: '16x16',
        type: 'image/webp',
      },
      {
        src: '/icons/icon-32x32.webp',
        sizes: '32x32',
        type: 'image/webp',
      },
      {
        src: '/icons/icon-48x48.webp',
        sizes: '48x48',
        type: 'image/webp',
      },
      {
        src: '/icons/icon-96x96.webp',
        sizes: '96x96',
        type: 'image/webp',
      },
      {
        src: '/icons/icon-128x128.webp',
        sizes: '128x128',
        type: 'image/webp',
      },
      {
        src: '/icons/icon-192x192.webp',
        sizes: '192x192',
        type: 'image/webp',
        purpose: 'any',
      },
      {
        src: '/icons/icon-256x256.webp',
        sizes: '256x256',
        type: 'image/webp',
      },
      {
        src: '/icons/icon-384x384.webp',
        sizes: '384x384',
        type: 'image/webp',
      },
      {
        src: '/icons/icon-512x512.webp',
        sizes: '512x512',
        type: 'image/webp',
      },
      {
        src: '/icons/maskable-icon.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
    screenshots: [
      {
        src: '/screenshots/screenshot-desktop-1.avif',
        sizes: '2880x1556',
        type: 'image/avif',
        form_factor: 'wide',
      },
      {
        src: '/screenshots/screenshot-desktop-2.avif',
        sizes: '2880x1556',
        type: 'image/avif',
        form_factor: 'wide',
      },
      {
        src: '/screenshots/screenshot-desktop-3.avif',
        sizes: '2880x1556',
        type: 'image/avif',
        form_factor: 'wide',
      },
      {
        src: '/screenshots/screenshot-desktop-4.avif',
        sizes: '2880x1556',
        type: 'image/avif',
        form_factor: 'wide',
      },
      {
        src: '/screenshots/screenshot-desktop-5.avif',
        sizes: '2880x1556',
        type: 'image/avif',
        form_factor: 'wide',
      },
      {
        src: '/screenshots/screenshot-desktop-6.avif',
        sizes: '2880x1556',
        type: 'image/avif',
        form_factor: 'wide',
      },
      {
        src: '/screenshots/screenshot-desktop-7.avif',
        sizes: '2880x1556',
        type: 'image/avif',
        form_factor: 'wide',
      },
      {
        src: '/screenshots/screenshot-desktop-8.avif',
        sizes: '2880x1556',
        type: 'image/avif',
        form_factor: 'wide',
      },
      {
        src: '/screenshots/screenshot-phone-1.avif',
        sizes: '610x1354',
        type: 'image/avif',
        form_factor: 'narrow',
      },
      {
        src: '/screenshots/screenshot-phone-2.avif',
        sizes: '610x1354',
        type: 'image/avif',
        form_factor: 'narrow',
      },
      {
        src: '/screenshots/screenshot-phone-3.avif',
        sizes: '610x1354',
        type: 'image/avif',
        form_factor: 'narrow',
      },
      {
        src: '/screenshots/screenshot-phone-4.avif',
        sizes: '610x1354',
        type: 'image/avif',
        form_factor: 'narrow',
      },
      {
        src: '/screenshots/screenshot-phone-5.avif',
        sizes: '610x1354',
        type: 'image/avif',
        form_factor: 'narrow',
      },
    ],
  };
}
