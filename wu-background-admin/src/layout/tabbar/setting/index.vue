<template>
  <el-button size="small" icon="Refresh" circle @click="updateRefsh"></el-button>
  <el-button size="small" icon="FullScreen" circle @click="fullScreen"></el-button>
  <el-popover placement="bottom" title="设置" :width="200" trigger="hover">
    <el-form>
      <el-form-item label="暗黑模式">
        <el-switch v-model="dark" size="small" inline-prompt active-icon="MoonNight" inactive-icon="Sunny"
          @change="changeDark" />
      </el-form-item>
    </el-form>
    <template #reference>
      <el-button circle size="small" icon="Setting" />
    </template>
  </el-popover>
  <img class="img" :src="userStore.avatar" alt="avatar">
  <!-- 下拉菜单 -->
  <el-dropdown>
    <span class="el-dropdown-link">
      {{ userStore.username }}
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts">
export default {
  name: 'Setting'
}
</script>
<script setup lang="ts">
import useLayoutSettingStore from '@/store/modules/setting'
import useUserStore from '@/store/modules/user'
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const layoutSettingStore = useLayoutSettingStore()
const userStore = useUserStore()
const $router = useRouter()
const $route = useRoute()

let dark = ref<boolean>(false)

onMounted(() => {
  dark.value = layoutSettingStore.dark
})

const updateRefsh = () => {
  layoutSettingStore.refsh = !layoutSettingStore.refsh
}

const fullScreen = () => {
  let full = document.fullscreenElement

  //切换全屏
  if (!full) {
    document.documentElement.requestFullscreen()
  } else {
    document.exitFullscreen()
  }
}

const logout = async () => {
  await userStore.userLogout()

  $router.push({ path: '/login', query: { redirect: $route.path } })
}

const changeDark = () => {
  let html = document.documentElement
  dark.value ? (html.className = 'dark') : (html.className = '')
  layoutSettingStore.dark = dark.value
}
</script>

<style scoped lang="scss">
.img {
  width: 24px;
  height: 24px;
  margin: 0 10px;
  border-radius: 50%;
}
</style>