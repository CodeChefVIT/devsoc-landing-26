interface Sponsor {
  name: string;
  description: string;
  logoUrl: string;
  websiteUrl?: string;
}

const sponsors: Sponsor[] = [
  {
    name: 'Hotfoot Technology Solutions',
    description:
      'Hotfoot Technology Solutions is a FinTech & CreditTech company enabling end-to-end digital and automated lending through smart onboarding, decision automation, and seamless disbursements.',
    logoUrl: '/images/sponsors/hotfoot.avif',
    websiteUrl: 'https://hotfoot.co.in/',
  },
  {
    name: 'Backboard IO',
    description:
      'Backboard IO provides a unified API for the entire AI stack, with built-in memory, RAG, and access to thousands of models.',
    logoUrl: '/images/sponsors/backboard.avif',
    websiteUrl: 'https://backboard.io/',
  },

  /*
  {
    name: 'Sponsor 3',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
    logoUrl: '/images/sponsors/sponsor-1.avif',
    websiteUrl: 'https://sponsor3.com',
  },
  */
];

export default sponsors;
