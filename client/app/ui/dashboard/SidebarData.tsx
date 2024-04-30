export const SidebarData = [
  {
    id: 1,
    name: "Dashboard",
    link: "/admin",
    status: false,
  },
  {
    id: 2,
    name: "Collection",
    status: false,
    submenu: [
      {
        id: 11,
        name: "Add",
        link: "/admin/collection/add",
        status: false,
      },
      {
        id: 22,
        name: "View",
        link: "/admin/collection",
        status: false,
      },
    ],
  },
  {
    id: 3,
    name: "Settings",
    link: "/admin/settings",
    status: false,
  },
];
