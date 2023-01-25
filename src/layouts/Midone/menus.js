import { faCircle } from '@fortawesome/free-solid-svg-icons';

const menus = [
  { icon: faCircle, title: 'Menu 1' },
  {
    icon: faCircle,
    title: 'Menu 2',
    children: [
      { title: 'Menu 2.1' },
      {
        title: 'Menu 2.2',
        children: [{ title: 'Menu 2.2.1' }, { title: 'Menu 2.2.2' }],
      },
      { title: 'Menu 2.3' },
    ],
  },
  {
    icon: faCircle,
    title: 'Menu 3',
    children: [
      { title: 'Menu 3.1' },
      {
        title: 'Menu 3.2',
        children: [{ title: 'Menu 3.2.1' }, { title: 'Menu 3.2.2' }],
      },
      { title: 'Menu 3.3' },
    ],
  },
];

export default menus;
