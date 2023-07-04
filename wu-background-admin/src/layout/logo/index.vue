<template>
  <div class="logo" v-if="setting.logoHidding">
    <img :src="setting.logo" alt="" />
    <span class="title">{{ setting.title }}</span>
  </div>
  <img src="" alt="">
</template>

<script lang="ts">
export default {
  name: 'Logo'
}
</script>
<script setup lang="ts">
import setting from '@/setting'

</script>

<style scoped lang="scss">
.logo {
  width: 100%;
  height: $base-menu-logo-height;
  color: white;
  display: flex;
  align-items: center;
  padding: 10px;

  img {
    width: 40px;
    height: 40px;
  }

  .title {
    font-size: $base-logo-title-fontSize;
    margin-left: 20px;
    font-weight: 600;
  }
}
</style>