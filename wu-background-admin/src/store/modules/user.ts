// 创建用户相关的小仓库
import { defineStore } from 'pinia'
import { reqLogin } from '@/api/user'
import type { loginForm, loginResponseData } from '@/api/user/type'
import type { UserData } from './types/type'
import { GET_TOKEN, SET_TOKEN } from '@/utils/token'
import { constantRoute } from '@/router/routes'

const useUserStore = defineStore('User', {
  state: (): UserData => {
    return {
      token: GET_TOKEN() || '',
      menuRoutes: constantRoute,// 存储 生成菜单需要数组
    }
  },
  actions: {
    // 用户登录
    async userLogin(data: loginForm) {
      let result: loginResponseData = await reqLogin(data)

      if (result.code == 200) {
        this.token = result.data.token

        SET_TOKEN(result.data.token)

        return 'OK'
      } else {
        return Promise.reject(new Error(result.data.message))
      }
    },
  },
  getters: {},
})

export default useUserStore
