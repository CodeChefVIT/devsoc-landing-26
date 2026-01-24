export interface Track {
  id: number;
  title?: string;
  description?: string;
  image?: {
    desktop?: string;
    mobile?: string;
  } | null;
  transparent?: boolean;
}

const tracks: Track[] = [
  { id: 1, transparent: true },
  {
    id: 2,
    title: 'Track 1',
    description: 'Build innovative solutions and showcase your creativity',
    image: null,
  },
  { id: 3, image: { desktop: '/images/tracks/box 3.svg' } },
  {
    id: 4,
    title: 'Track 2',
    description: 'Develop cutting-edge applications with modern technologies',
    image: null,
  },
  {
    id: 5,
    title: 'Track 3',
    description: 'Create impactful projects that solve real-world problems',
    image: null,
  },
  { id: 6, image: { desktop: '/images/tracks/box 6.svg' } },
  {
    id: 7,
    title: 'Track 4',
    description: 'Design and implement scalable software solutions',
    image: null,
  },
  { id: 8, transparent: true },
  { id: 9, image: { desktop: '/images/tracks/box 9.svg' } },
  {
    id: 10,
    title: 'Track 5',
    description: 'Explore emerging technologies and push boundaries',
    image: null,
  },
  { id: 11, image: { desktop: '/images/tracks/box 11.svg' } },
  {
    id: 12,
    title: 'Track 6',
    description: 'Transform ideas into working prototypes and beyond',
    image: null,
  },
];

export default tracks;
