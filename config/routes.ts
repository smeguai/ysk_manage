export default [
  {
    name: '综合',
    path: '/complex',
    routes: [
      {
        name: '会员管理',
        path: '/complex/member',
        component: './complex/Member',
      },
    ],
  },
  {
    name: '首页',
    path: '/home',
    component: './Home',
  },
  {
    path: '/login',
    component: './Login',
  },
  { component: './404' },
];
