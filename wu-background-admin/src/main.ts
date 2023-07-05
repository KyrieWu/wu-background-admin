import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//@ts-ignore  忽略当前文件ts 类型的检测否则有红色提示
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import 'element-plus/theme-chalk/dark/css-vars.css'

import gloabelComponent from '@/components/index'

// svg插件需要配置代码
import 'virtual:svg-icons-register'

import '@/styles/index.scss'

import './permission'

import router from './router'
import pinia from './store'
import { permissionDirection } from './directive/permission'

import App from './App.vue'

const app = createApp(App)
permissionDirection(app)
app.use(gloabelComponent)
app.use(router)
app.use(pinia)
app.use(ElementPlus, {
  locale: zhCn,
})
app.mount('#app')
