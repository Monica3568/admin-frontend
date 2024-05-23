export const constantRoute = [
  //路由配置
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      tittle: '登录',
      hidden: true, //隐藏在侧边栏,true表示隐藏,false表示显示
    },
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404/index.vue'),
    meta: {
      tittle: '404',
      hidden: true, //隐藏在侧边栏,true表示隐藏,false表示显示
    },
  },
  //登录成功以后展示数据的路由
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    name: 'layout',
    meta: {
      tittle: 'layout',
      hidden: false, //隐藏在侧边栏,true表示隐藏,false表示显示
    },
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          tittle: '首页',
          hidden: false, //隐藏在侧边栏,true表示隐藏,false表示显示
        },
      },
    ],
  },
  //其他路由
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'notFound',
    meta: {
      title: '任意路由',
      hidden: true, //隐藏在侧边栏,true表示隐藏,false表示显示
    },
  },
]

export default constantRoute
