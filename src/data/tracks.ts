export interface Track {
  id: number;
  title?: string;
  image?: string | null;
  transparent?: boolean;
}

const tracks: Track[] = [
  { id: 1, transparent: true },
  { id: 2, title: 'Track 1', image: null },
  { id: 3, image: '/images/tracks/box 3.svg' },
  { id: 4, title: 'Track 2', image: null },
  { id: 5, title: 'Track 3', image: null },
  { id: 6, image: '/images/tracks/box 6.svg' },
  { id: 7, title: 'Track 4', image: null },
  { id: 8, transparent: true },
  { id: 9, image: '/images/tracks/box 9.svg' },
  { id: 10, title: 'Track 5', image: null },
  { id: 11, image: '/images/tracks/box 11.svg' },
  { id: 12, title: 'Track 6', image: null },
];

export default tracks;
