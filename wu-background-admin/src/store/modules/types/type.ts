import type { RouteRecordRaw } from 'vue-router'

export interface UserData {
  token: string | null
  menuRoutes: RouteRecordRaw[]
  username: string,
      avatar: string,
      buttons: string[],
}

interface UserInfo {
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
