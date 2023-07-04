<template>
  <div style="width: 100%;height: 100%;">
    <el-card>
      <div class="box">
        <img :src="userStore.avatar" alt="" class="avatar" />
        <div class="footer">
          <h3 class="title">
            {{ getTime() }}好~
            <span >{{ userStore.username }}</span>
          </h3>
          <p class="subtitle">Wu-Admin</p>
        </div>
      </div>
    </el-card>
    <div class="bottom">
      <svg-icon name="welcome" width="600px" height="300px"></svg-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getTime } from '@/utils/time'
import useUserStore from '@/store/modules/user'

let userStore = useUserStore()
</script>

<style scoped lang="scss">
.box {
  display:flex;
  .avatar{
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  .footer{
    margin-left: 20px;
    margin-top: 15px;

    .title{
      font-size: 35px ;
      margin-bottom: 30px;
      font-weight: 900;
    }

    .subtitle {
      font-style: italic;
      color: #ccc;
      font-weight: 700;
    }
  }
}
.bottom {
  margin-top: 50px;
  display: flex;
  justify-content: center;
}
</style>