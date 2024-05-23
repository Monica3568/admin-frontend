//创建用户相关的小仓库

import { defineStore } from 'pinia'
import { reqLogin } from '@/api/user'
import type { loginForm, loginResponseData } from '@/api/user/type'
import type { UserState } from './types/type'
import { GET_TOKEN, SET_TOKEN } from '@/utils/token'
//引入常量路由
import { constantRoute } from '@/router/routes'

let useUserStore = defineStore('user', {
  state: (): UserState => {
    return {
      token: GET_TOKEN(), //用户唯一标识
      menuRoutes: constantRoute, //仓库存储生成菜单需要得数组
    }
  },
  // 修改state的唯一方式就是通过actions
  actions: {
    async userLogin(data: loginForm) {
      let result: loginResponseData = await reqLogin(data)
      if (result.code === 200) {
        this.token = result.data?.token as string
        // 本地持久化存储
        SET_TOKEN(result.data?.token as string)
        return Promise.resolve('ok')
      } else {
        return Promise.reject(result.data?.message)
      }
    },
  },
  getters: {},
})

export default useUserStore
