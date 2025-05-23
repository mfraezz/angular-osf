import { NavItem } from '@osf/shared/entities/nav-item.interface';

export const NAV_ITEMS: NavItem[] = [
  { path: '/home', label: 'Home', icon: 'home', useExactMatch: true },
  { path: '/search', label: 'Search OSF', icon: 'search', useExactMatch: true },
  {
    path: '/support',
    label: 'Support',
    icon: 'support',
    useExactMatch: true,
  },
  {
    path: '/my-projects',
    label: 'My Projects',
    icon: 'my-projects',
    useExactMatch: true,
  },
  {
    path: '/settings',
    label: 'Settings',
    icon: 'settings',
    isCollapsible: true,
    useExactMatch: true,
    items: [
      {
        path: '/settings/profile-settings',
        label: 'Profile Settings',
        useExactMatch: true,
      },
      {
        path: '/settings/account-settings',
        label: 'Account Settings',
        useExactMatch: true,
      },
      {
        path: '/settings/addons',
        label: 'Configure Addon Accounts',
        useExactMatch: false,
      },
      {
        path: '/settings/notifications',
        label: 'Notifications',
        useExactMatch: true,
      },
      {
        path: '/settings/developer-apps',
        label: 'Developer Apps',
        useExactMatch: true,
      },
      {
        path: '/settings/tokens',
        label: 'Personal Access Tokens',
        useExactMatch: true,
      },
    ],
  },
  {
    path: '/donate',
    label: 'Donate',
    icon: 'donate',
    useExactMatch: true,
  },
];
