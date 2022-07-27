import {
  RiDashboardFill,
  RiShieldUserFill,
  RiFileTextFill,
  RiCalendarFill,
} from 'react-icons/ri';
import { BsPeopleFill } from 'react-icons/bs';

const menus = [
  {
    icon: RiDashboardFill,
    title: 'Dashboard',
    path: '/',
  },
  {
    icon: RiShieldUserFill,
    title: 'Roles',
    path: '/roles',
  },
  {
    icon: BsPeopleFill,
    title: 'Users',
    path: '/users',
  },
  {
    icon: RiFileTextFill,
    title: 'Content',
    children: [
      {
        title: 'Add New',
        path: '/content/add',
      },
      {
        title: 'All Content',
        path: '/content',
      },
    ],
  },
  {
    icon: RiCalendarFill,
    title: 'Posts',
    children: [
      {
        title: 'Add New',
        path: '/posts/add',
      },
      {
        title: 'All Posts',
        path: '/posts',
      },
      {
        title: 'Categories',
        path: '/categories',
      },
      {
        title: 'Tags',
        path: '/tags',
      },
    ],
  },
];

export default menus;
