interface Sponsor {
  name: string;
  description: string;
  logoUrl: string;
  websiteUrl?: string;
}

const sponsors: Sponsor[] = [
  {
    name: 'Sponsor 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
    logoUrl: '/images/sponsors/sponsor-1.avif',
    websiteUrl: 'https://sponsor1.com',
  },
  {
    name: 'Sponsor 2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    logoUrl: '/images/sponsors/sponsor-1.avif',
    websiteUrl: 'https://sponsor2.com',
  },
  {
    name: 'Sponsor 3',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
    logoUrl: '/images/sponsors/sponsor-1.avif',
    websiteUrl: 'https://sponsor3.com',
  },
];

export default sponsors;
