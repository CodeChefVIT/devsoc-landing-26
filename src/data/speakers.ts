type Speaker = {
  name: string;
  designation: string;
  linkedin: string;
  image: string;
};

const speakers: Speaker[] = [
  {
    name: 'Naga Venkata Sahithya Alla',
    designation: 'AI Safety Data Scientist @ Google',
    linkedin: 'https://www.linkedin.com/in/sahithyaalla/',
    image: '/images/speakers/Naga-Venkata-Sahithya-Alla.avif',
  },
  {
    name: 'Navyaa Sharma',
    designation: 'Software Engineer @ Google',
    linkedin: 'https://www.linkedin.com/in/navyaa-sharma-here/',
    image: '/images/speakers/Navyaa-Sharma.avif',
  },
  {
    name: 'Rajesh Venkatesan',
    designation: 'CTO, Co Founder & Executive Director @ Hotfoot Technology Solutions',
    linkedin: 'https://www.linkedin.com/in/rajeshvenkatesan/',
    image: '/images/speakers/Rajesh-Venkatesan.avif',
  },
];

export default speakers;
export type { Speaker };
