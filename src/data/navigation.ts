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
];
export { navigationItems, type NavigationItem };
