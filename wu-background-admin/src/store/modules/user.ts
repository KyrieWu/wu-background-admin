// 创建用户相关的小仓库
import { defineStore } from 'pinia'
import router from '@/router'
import { reqLogin, reqUserInfo, reqLogOut } from '@/api/user'
import type {
  LoginFormData,
  LoginResponseData,
  userInfoResponseData,
} from '@/api/user/type'
import type { UserData } from './types/type'
import { GET_TOKEN, SET_TOKEN, REMOVE_TOKEN } from '@/utils/token'
import { asyncRoute, constantRoute, anyRoute } from '@/router/routes'

// @ts-ignore
import cloneDeep from 'lodash/cloneDeep'

function filterAsyncRoute(asyncRoute: any, routes: any) {
  return asyncRoute.filter((item: any) => {
    if (routes.includes(item.name)) {
      if (item.children && item.children.length > 0) {
        item.children = filterAsyncRoute(item.children, routes)
      }
      return true
    }
  })
}

let useUserStore = defineStore('User', {
  state: (): UserData => {
    return {
      token: GET_TOKEN() || '',
      menuRoutes: constantRoute, // 存储 生成菜单需要数组
      username: '',
      avatar: '',
      buttons: [],
    }
  },
  actions: {
    // 用户登录
    async userLogin(data: LoginFormData) {
      let result: LoginResponseData = await reqLogin(data)

      if (result.code == 200) {
        this.token = result.data as string

        SET_TOKEN(result.data as string)

        return 'OK'
      } else {
        return Promise.reject(new Error(result.data as string))
      }
    },

    async userInfo() {
      let result: userInfoResponseData = await reqUserInfo()

      if (result.code == 200) {
        this.username = result.data.name as string
        this.avatar = result.data.avatar as string
        this.buttons = result.data.buttons
        let userAsyncRoute = filterAsyncRoute(
          cloneDeep(asyncRoute),
          result.data.routes,
        )

        this.menuRoutes = [...constantRoute, ...userAsyncRoute, anyRoute]
        ;[...userAsyncRoute, anyRoute].forEach((route: any) => {
          router.addRoute(route)
        })

        return 'ok'
      } else {
        return Promise.reject(new Error(result.message))
      }
    },

    async userLogout() {
      let res = await reqLogOut()
      if (res.code === 200) {
        this.token = ''
        this.username = ''
        this.avatar = ''
        REMOVE_TOKEN()
      } else {
        return Promise.reject(new Error(res.message))
      }
    },
  },
  getters: {},
})

export default useUserStore
