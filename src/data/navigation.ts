interface NavigationItem {
  label: string;
  href: string;
}

const navigationItems: NavigationItem[] = [
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Tracks',
    href: '#tracks',
  },
  {
    label: 'Speakers',
    href: '#speaker',
  },
  {
    label: 'Timeline',
    href: '#timeline',
  },
  {
    label: 'Sponsors',
    href: '#sponsors',
  },
];
export { navigationItems, type NavigationItem };
