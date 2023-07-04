<template>
  <el-container class="layout_container">
    <el-aside class="layout_slider" :class="{ fold: layoutSettingStore.fold ? true : false }">
  
      <!-- 展示菜单 -->
      <el-scrollbar class="scrollerBar">
        <logo />
        <!-- 展示菜单 -->
        <el-menu :collapse="layoutSettingStore.fold ? true : false" background-color="#001529" text-color="#959ea6"
          active-text-color="#fff" :default-active="$route.path" :router="true" >
          <Menu :menuList="userStrore.menuRoutes"></Menu>
        </el-menu>
      </el-scrollbar>
    </el-aside>

    <div class="layout_tabbar" :class="{ fold: layoutSettingStore.fold ? true : false }">
      <Tabbar></Tabbar>
    </div>

    <div class="layout_main" :class="{ fold: layoutSettingStore.fold ? true : false }">
      <Main />
    </div>
  </el-container>
</template>

<script lang="ts">
export default {
  name: 'Layout'
}
</script>
<script setup lang="ts">
import logo from './logo/index.vue'
import Menu from './menu/index.vue'
import Main from './main/index.vue'
import Tabbar from './tabbar/index.vue'
import useUserStore from '@/store/modules/user'
import useLayoutSettingStore from '@/store/modules/setting'

import { useRoute } from 'vue-router'

const userStrore = useUserStore()
const layoutSettingStore = useLayoutSettingStore()

let $route = useRoute()

</script>

<style scoped lang="scss">
.layout_container {
  width: 100%;
  height: 100vh;

  .layout_slider {
    width: $base-menu-width;
    background: $base-menu-background;
    transition: all 0.3s;

    // .scrollerBar {
    //   width: 100%;
    //   height: calc(100vh - $base-menu-logo-height);

      
    // }

    .el-menu {
        border-right: none;
      }

    &.fold {
      width: $base-menu-min-width;
    }
  }

  .layout_tabbar {
    position: fixed;
    width: calc(100% - $base-menu-width);
    height: $base-tabber-height;
    top: 0px;
    left: $base-menu-width;
    transition: all 0.3s;

    &.fold {
      width: calc(100vw - $base-menu-min-width);
      left: $base-menu-min-width;
    }
  }

  .layout_main {
    position: absolute;
    width: calc(100% - $base-menu-width);
    height: calc(100vh - $base-tabber-height);
    left: $base-menu-width;
    top: $base-tabber-height;
    padding: 20px;
    overflow: auto;
    transition: all 0.3s;
    background-color: #0000000d;

    &.fold {
      width: calc(100vw - $base-menu-min-width);
      left: $base-menu-min-width;
    }
  }
}
</style>