<template>
  <div class="logo" v-if="setting.logoHidding">
    <img :src="setting.logo" alt="" />
    <span class="title">{{ setting.title }}</span>
  </div>
  <img src="" alt="">
</template>

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
  padding: 20px;

  img {
    width: 40px;
    height: 40px;
  }

  span {
    font-size: $base-logo-title-fontSize;
    margin-left: 20px;
  }
}
</style>