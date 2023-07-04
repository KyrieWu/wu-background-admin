<template>
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" v-if="flag" />
    </transition>
  </router-view>
</template>


<script lang="ts">
export default {
  name: 'Main'
}
</script>
<script setup lang="ts">
import { watch, ref, nextTick } from 'vue'
import useLayoutSettingStore from '@/store/modules/setting'

const layoutSettingStore = useLayoutSettingStore()

let flag = ref(true)

watch(() => layoutSettingStore.refsh, () => {
  flag.value = false

  nextTick(() => {
    flag.value = true
  })
})

</script>

<style scoped lang="scss">
.fade-enter-from {
  opacity: 0;
  transform: scale(0);
}

.fade-enter-active {
  transition: all .3s;
}

.fade-enter-to {
  opacity: 1;
  transform: scale(1);
}
</style>