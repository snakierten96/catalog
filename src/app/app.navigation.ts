export interface INavItem {
  title: string,
  description?: string,
  icon: string,
  path: string[] | string
}

export const NAVITEMS: INavItem[] = [
  {
    title: 'Home',
    description: 'Home Page',
    icon: 'home',
    path: ['/']
  },
  {
    title: 'Category',
    description: 'Category Page',
    icon: 'view_module',
    path: ['/', 'category']
  }
];

