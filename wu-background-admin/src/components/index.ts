import { App } from 'vue'
import SvgIcon from './SvgIcon/index,.vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const allGloableComponent = { SvgIcon }

export default {
  install(app: App) {
    Object.keys(allGloableComponent).forEach((key) => {
      app.component(key, allGloableComponent[key])
    })

    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
  },
}
