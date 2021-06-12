const menus = [
  { icon: 'fa fa-circle', title: 'Menu 1' },
  {
    icon: 'fa fa-circle',
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
];

export default menus;
