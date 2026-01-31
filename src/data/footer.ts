import type { IconType } from 'react-icons';
import {
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaYoutube,
  FaDiscord,
  FaFacebook,
} from 'react-icons/fa6';

interface FooterLink {
  label: string;
  href: string;
}

const footerLinks: FooterLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Tracks', href: '#tracks' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Sponsors', href: '#sponsors' },
  { label: 'Speakers', href: '#speaker' },
  { label: 'FAQs', href: '#faqs' },
];

interface SocialLink {
  label: string;
  href: string;
  Icon: IconType;
}

const socialLinks: SocialLink[] = [
  { label: 'Discord', href: 'https://discord.gg/wrtHFfep6M', Icon: FaDiscord },
  { label: 'X', href: 'https://x.com/codechefvit/with_replies', Icon: FaXTwitter },
  { label: 'Instagram', href: 'https://www.instagram.com/codechefvit/?hl=en', Icon: FaInstagram },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/codechefvit/posts/?feedView=all',
    Icon: FaLinkedinIn,
  },
  { label: 'GitHub', href: 'https://github.com/codechefvit', Icon: FaGithub },
  { label: 'YouTube', href: 'https://www.youtube.com/c/CodeChefVIT', Icon: FaYoutube },
  { label: 'Facebook', href: 'https://www.facebook.com/codechefvit', Icon: FaFacebook },
];

export { footerLinks, socialLinks, type FooterLink, type SocialLink };
