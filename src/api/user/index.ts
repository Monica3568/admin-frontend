//统一管理用户相关接口
import request from '@/utils/request'
import { loginForm, loginResponseData, userInfoResponseData } from './type'
// 用户登录
enum API {
  LOGIN_URL = '/user/login',
  USERIMFO_URL = '/user/info',
}

//对外暴露
export const reqLogin = (data: loginForm) =>
  request.post<any, loginResponseData>(API.LOGIN_URL, data)

export const reqUserInfo = () =>
  request.get<any, userInfoResponseData>(API.USERIMFO_URL)
