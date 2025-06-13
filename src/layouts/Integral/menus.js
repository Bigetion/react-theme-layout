import { FaCircle } from 'react-icons/fa';

const menus = [
  { icon: FaCircle, title: 'Menu 1' },
  {
    icon: FaCircle,
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
    icon: FaCircle,
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
