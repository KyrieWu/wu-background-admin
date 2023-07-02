// 登录接口需要携带参数ts 参数
export interface loginForm {
  username: string
  password: string
}

interface dataType {
  token: string
  message: string
}

export interface loginResponseData {
  code: number
  data: dataType
}

// 定义服务器返回用户信息相关的数据类型

interface userInfo {
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

interface User {
  checkUser: userInfo
}

export interface userResponseData {
  code: number
  data: User
}