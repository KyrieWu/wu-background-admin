<template>
  <el-icon style="margin-right: 10px;cursor: pointer;" size="20px" @click="changeIcon">
    <component :is="layoutSettingStore.fold? 'Expand':'Fold'"></component>
  </el-icon>
  <!--  左侧面包屑 -->
  <el-breadcrumb separator-icon="ArrowRight">
    <el-breadcrumb-item v-for="(item, index) in $route.matched" :key="index" v-show="item.meta.title" :to="item.path">
      <el-icon>
        <component :is="item.meta.icon" />
      </el-icon>
      <span style="margin: 0 5px;">{{ item.meta.title }}</span>
    </el-breadcrumb-item>

  </el-breadcrumb>
</template>

<script lang="ts">
export default {
  name: 'Breadcrumb'
}
</script>
<script setup lang="ts">
import { useRoute } from 'vue-router'
import useLayoutSettingStore from '@/store/modules/setting'

let layoutSettingStore = useLayoutSettingStore()
const $route = useRoute()

const changeIcon = () => {
  layoutSettingStore.fold = !layoutSettingStore.fold
}
</script>

<style scoped></style>