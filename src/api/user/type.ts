//登录接口需要携带参数ts类型
export interface loginForm {
  username: string
  password: string
}
interface userDataType {
  token?: string
  message?: string
}
export interface loginResponseData {
  code: number
  data: userDataType
}

//用户信息相关
interface user {
  userId: number
  avatar: string
  username: string
  password: string
  desc: string
  roles: string[]
  buttons: string[]
  routes: string[]
  token: string
}
interface userInfoType {
  checkUser: user
}
export interface userInfoResponseData {
  code: number
  data: userInfoType
}
