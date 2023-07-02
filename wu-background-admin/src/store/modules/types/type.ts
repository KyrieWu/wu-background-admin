import type { RouteRecordRaw } from 'vue-router'

export interface UserData {
  token: string | null
  menuRoutes: RouteRecordRaw[]
}
