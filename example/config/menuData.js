const menuData = [
  {
    path: "",
    name: "开发指南",
    type: 1,
  },
  {
    path: "/docs/survey",
    name: "概况",
    filename: "survey",
    type: 3,
  },
  {
    path: "/docs/cssnorm",
    name: "css命名规范",
    filename: "cssnorm",
    type: 3,
  },
  {
    path: "",
    name: "css框架",
    type: 1,
    children: [
      {
        path: "/install",
        title: "安装",
        type: 2,
      }
    ]
  },
];


export default menuData;
