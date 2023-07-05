import pinia from '@/store'
import useUserStore from '@/store/modules/user'
import { App } from 'vue'
const userStore = useUserStore(pinia)
export const permissionDirection = (app: App) => {
  app.directive('permission', {
    mounted(el: any, options: any) {
      if (!userStore.buttons.includes(options.value)) {
        el.parentNode.removeChild(el)
      }
    },
  })
}
