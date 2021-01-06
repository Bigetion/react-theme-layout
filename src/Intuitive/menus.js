const menus = [
  { title: "Navigation Title 1", type: "navigation-title" },
  { icon: "fa fa-circle", title: "Menu Level 1" },
  {
    icon: "fa fa-circle",
    title: "Menu Level 2",
    children: [
      { title: "Menu Level 2.1" },
      {
        title: "Menu Level 2.2",
        children: [{ title: "Menu Level 3.1" }, { title: "Menu Level 3.2" }],
      },
    ],
  },
  { title: "Navigation Title 2", type: "navigation-title" },
  { icon: "fa fa-circle", title: "Menu Level 1" },
  {
    icon: "fa fa-circle",
    title: "Menu Level 2",
    children: [
      { title: "Menu Level 2.1" },
      {
        title: "Menu Level 2.2",
        children: [{ title: "Menu Level 3.1" }, { title: "Menu Level 3.2" }],
      },
    ],
  },
];

export default menus;
