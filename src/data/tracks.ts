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
  isSponsorTrack?: boolean;
}

const tracks: Track[] = [
  // Row 1
  { id: 1, type: 'spacer', transparent: true },
  {
    id: 2,
    type: 'track',
    title: 'Hotfoot AI Challenges',
    description:
      'Challenge 1: Financial Audio Intelligence - Process unstructured voice calls into structured financial insights via AI. \nChallenge 2: Financial Document Intelligence - Extract data from 200+ document formats beyond rule-based OCR. \nSpecial prizes for winners using Backboard.io APIs.',
    image: { mobile: '/images/tracks/track-1.avif' },
    isSponsorTrack: true,
  },
  { id: 3, type: 'decoration', image: { desktop: '/images/tracks/box-3.svg' } },
  {
    id: 4,
    type: 'track',
    title: 'Digital Economy',
    description:
      'Build smarter financial systems, Web3 decentralization via blockchain, cybersecurity for privacy, secure identities, innovative payments, AI finance tools and e-commerce for creators and businesses.',
    image: { mobile: '/images/tracks/track5.jpg' },
  },

  // Row 2
  {
    id: 5,
    type: 'track',
    title: 'Media & Entertainment',
    description:
      'Reimagine storytelling, gaming, and creative expression through technology, blending AR/VR, interactivity, and the evolving creator economy.',
    image: { mobile: '/images/tracks/track2.avif' },
  },
  { id: 6, type: 'decoration', image: { desktop: '/images/tracks/box-6.svg' } },
  { id: 7, type: 'decoration', image: { desktop: '/images/tracks/box-7.svg' } },
  { id: 8, type: 'spacer', transparent: true },

  // Row 3
  { id: 9, type: 'decoration', image: { desktop: '/images/tracks/box-9.svg' } },
  {
    id: 10,
    type: 'track',
    title: 'Tech for Good',
    description:
      'Use technology to address sustainability, healthcare, education, accessibility, and social justice. Build inclusive, fair solutions with real, scalable impact.',
    image: { mobile: '/images/tracks/track-5.png' },
  },
  { id: 11, type: 'decoration', image: { desktop: '/images/tracks/box-11.svg' } },
  {
    id: 12,
    type: 'track',
    title: 'Open Innovation',
    description:
      'Explore innovative ideas across domains. Blend disciplines and explore the unexpected side of tech.',
    image: { mobile: '/images/tracks/track-6.jpeg' },
  },
];

export default tracks;
