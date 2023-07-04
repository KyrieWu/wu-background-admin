<template>
  <el-header class="tabbar">
    <div class="tabbar_left">
        <Breadcrumb></Breadcrumb>
      </div>
      <div class="tabbar_right">
        <Setting></Setting>
      </div>
  </el-header>
</template>

<script lang="ts">
export default {
  name: 'Tabbar'
}
</script>
<script setup lang="ts">
import Breadcrumb from './breadcrumb/index.vue'
import Setting from './setting/index.vue'

</script>

<style scoped lang="scss">
.tabbar {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #fff !important;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
  //border-bottom: .1px solid #000;
  z-index: 999;

  .tabbar_left {
    display: flex;
    align-items: center;
    // margin-left: 10px;
  }

  .tabbar_right {
    display: flex;
    align-items: center;
  }
}
</style>