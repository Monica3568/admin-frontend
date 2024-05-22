export const constantRoute = [
  //路由配置
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404/index.vue'),
  },
  //登录成功以后展示数据的路由
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    name: 'layout',
  },
  //其他路由
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'notFound',
  },
]

export default constantRoute
