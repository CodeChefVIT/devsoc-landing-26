type Sponsor = {
  name: string;
  description: string;
  logoUrl: string;
  websiteUrl?: string;
};

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
      'Backboard IO provides a unified API for the entire AI stack, with built-in memory, RAG, and access to thousands of models. It powers the world’s fastest, #1-ranked long-context AI memory, enabling smarter and more scalable AI systems.',
    logoUrl: '/images/sponsors/backboard.avif',
    websiteUrl: 'https://backboard.io/',
  },
];

export default sponsors;
export type { Sponsor };
