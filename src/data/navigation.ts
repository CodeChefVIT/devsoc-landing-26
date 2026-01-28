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
    label: 'Timeline',
    href: '#timeline',
  },
  {
    label: 'Tracks',
    href: '#tracks',
  },
  {
    label: 'Sponsors',
    href: '#sponsors',
  },
  {
    label: 'Speakers',
    href: '#speaker',
  },
];
export { navigationItems, type NavigationItem };
