// 路由鉴权
import router from '@/router'
import setting from './setting'
import nProgress from 'nprogress'
import 'nprogress/nprogress.css'
import pinia from './store'
import useUserStore from './store/modules/user'

nProgress.configure({ showSpinner: false })

let userStore = useUserStore(pinia)

router.beforeEach(async (to: any, from: any, next: any) => {
  document.title = to.meta.title + ` - ${setting.title}`
  nProgress.start()

  let token = userStore.token
  let username = userStore.username
  if (token) {
    if (to.path == '/login') {
      next({ path: '/' })
    } else {
      if (username) {
        next()
      } else {
        try {
          await userStore.userInfo()
          next({ ...to })
        } catch (e) {
          await userStore.userLogout()
          next({ path: '/login', query: { redirect: to.path } })
        }
      }
    }
  } else {
    if (to.path == '/login') {
      next()
    } else {
      next({ path: '/login', query: { redirect: to.path } })
    }
  }
})

router.afterEach((to: any, from: any) => {
    nProgress.done()
})
