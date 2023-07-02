<template>
  <div class="layout_container">
    <div class="layout_slider">
      <logo />
      <!-- 展示菜单 -->
      <el-scrollbar class="scrollerBar">
        <!-- 展示菜单 -->
        <el-menu background-color="#001529" text-color="white">
          <Menu :menuList="userStrore.menuRoutes"></Menu>
        </el-menu>
      </el-scrollbar>
    </div>

    <div class="layout_tabbar">222</div>

    <div class="layout_main">
      <p style="">我是一个段落</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import logo from './logo/index.vue'
import Menu from './menu/index.vue'
import useUserStore from '@/store/modules/user'

const userStrore = useUserStore()

</script>

<style scoped lang="scss">
.layout_container {
  width: 100%;
  height: 100vh;

  .layout_slider {
    width: $base-menu-width;
    height: 100vh;
    background: $base-menu-background;

    .scrollerBar {
      width: 100%;
      height: calc(100vh - $base-menu-logo-height);

      .el-menu {
        border-right: none;
      }
    }
  }

  .layout_tabbar {
    position: fixed;
    width: calc(100% - $base-menu-width);
    height: $base-tabber-height;
    background: cyan;
    top: 0px;
    left: $base-menu-width;
  }

  .layout_main {
    position: absolute;
    width: calc(100% - $base-menu-width);
    height: calc(100vh - $base-tabber-height);
    background-color: yellowgreen;
    left: $base-menu-width;
    top: $base-tabber-height;
    padding: 20px;
    overflow: auto;
  }
}
</style>