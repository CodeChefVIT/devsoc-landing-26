export interface Track {
  id: number;
  title?: string;
  description?: string;
  image?: {
    desktop?: string;
    mobile?: string;
  } | null;
  transparent?: boolean;
  type: 'track' | 'decoration' | 'spacer';
}

const tracks: Track[] = [
  // Row 1
  { id: 1, type: 'spacer', transparent: true },
  {
    id: 2,
    type: 'track',
    title: 'Track 1',
    description: 'Build innovative solutions and showcase your creativity',
    image: { mobile: '/images/tracks/track-1.png' },
  },
  { id: 3, type: 'decoration', image: { desktop: '/images/tracks/box-3.svg' } },
  {
    id: 4,
    type: 'track',
    title: 'Track 2',
    description: 'Develop cutting-edge applications with modern technologies',
    image: { mobile: '/images/tracks/track-2.png' },
  },

  // Row 2
  {
    id: 5,
    type: 'track',
    title: 'Track 3',
    description: 'Create impactful projects that solve real-world problems',
    image: { mobile: '/images/tracks/track-3.png' },
  },
  { id: 6, type: 'decoration', image: { desktop: '/images/tracks/box-6.svg' } },
  {
    id: 7,
    type: 'track',
    title: 'Track 4',
    description: 'Design and implement scalable software solutions',
    image: { mobile: '/images/tracks/track-4.png' },
  },
  { id: 8, type: 'spacer', transparent: true },

  // Row 3
  { id: 9, type: 'decoration', image: { desktop: '/images/tracks/box-9.svg' } },
  {
    id: 10,
    type: 'track',
    title: 'Track 5',
    description: 'Explore emerging technologies and push boundaries',
    image: { mobile: '/images/tracks/track-5.png' },
  },
  { id: 11, type: 'decoration', image: { desktop: '/images/tracks/box-11.svg' } },
  {
    id: 12,
    type: 'track',
    title: 'Track 6',
    description: 'Transform ideas into working prototypes and beyond',
    image: { mobile: '/images/tracks/track-6.png' },
  },
];

export default tracks;
