const menuData = [
  {
    path: "",
    name: "开发指南",
    type: 1,
    children: [
      {
        path: "/docs",
        name: "概况",
        filename: "survey",
        type: 3,
      },
      {
        path: "/docs/cssnorm",
        name: "css命名规范",
        filename: "cssNorm",
        type: 3,
      },
    ]
  },
  {
    name: "css库",
    type: 1,
    children: [
      // {
      //   path: "/docs/cssinstall",
      //   filename: "cssInstall",
      //   name: "安装/使用",
      //   type: 3,
      // },
      // {
      //   path: "/docs/cssbutton",
      //   filename: "cssButton",
      //   name: "button",
      //   type: 3,
      // },
    ]
  },
];


export default menuData;
