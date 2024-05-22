//通过vue-router创建路由
import { createRouter, createWebHashHistory } from 'vue-router'
import constantRoute from './routes'
let router = createRouter({
  //路由模式
  history: createWebHashHistory(),
  routes: constantRoute,
  //路由滚动行为
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

export default router
