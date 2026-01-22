import localFont from 'next/font/local';

export const lato = localFont({
  src: [
    {
      path: '../../public/fonts/Lato/Lato-Thin.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Lato/Lato-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Lato/Lato-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Lato/Lato-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Lato/Lato-Black.ttf',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Lato/Lato-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
  ],
  variable: '--font-lato',
  display: 'swap',
});

export const italianno = localFont({
  src: '../../public/fonts/Italianno/Italianno-Regular.ttf',
  variable: '--font-italianno',
  display: 'swap',
});

export const theSansMono = localFont({
  src: '../../public/fonts/TheSansMono/thesansmono-extra-bold.ttf',
  variable: '--font-the-sans-mono',
  display: 'swap',
});
