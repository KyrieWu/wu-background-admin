<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form ref="loginForms" class="login_form" :model="loginForm" :rules="rules">
          <h1>Hello</h1>
          <h2>欢迎使用 wu-admin 后台通用管理系统</h2>
          <el-form-item prop="username">
            <el-input type="text" :prefix-icon="User" v-model="loginForm.username" size="large"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" :prefix-icon="Lock" v-model="loginForm.password" show-password
              size="large"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button :loading="loading" class="login_btn" type="primary" size="default" @click="login">登录</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'
import useUserStore from '@/store/modules/user'
import { ElNotification } from 'element-plus'
import { useRouter } from 'vue-router'
import { getTime } from '@/utils/time'

const useStore = useUserStore()
const $router = useRouter()

let loading = ref(false)
let loginForms = ref()

let loginForm = reactive({ username: 'admin', password: '123456' })

const login = async () => {

  // 要保证所有的表单校验成功在执行
  await loginForms.value.validate()

  // 开始加载
  loading.value = true
  // 点击登录按钮以后干什么
  try {

    await useStore.userLogin(loginForm)

    $router.push('/')

    ElNotification({
      type: 'success',
      message: '登录成功',
      title: `Hi,${getTime()}好`
    })
  } catch (error) {
    loading.value = false
    ElNotification({
      type: 'error',
      message: (error as Error).message
    })
  }
}

const validatorUsername = (rule: any, value: any, callback: any) => {
  if (value.length === 0) {
    callback(new Error('请输入账号'))
  } else {
    callback()
  }
}

const validatorPassword = (rule: any, value: any, callback: any) => {
  if (value.length === 0) {
    callback(new Error('请输入密码'))
  } else if (value.length < 6 || value.length > 16) {
    callback(new Error('密码应为6~16位的任意组合'))
  } else {
    callback()
  }
}

// const validatorVerifyCode = (rule: any, value: any, callback: any) => {
//   console.log(value, identifyCode.value)

//   if (value.length === 0) {
//     callback(new Error('请输入验证码'))
//   } else if (value.length < 4) {
//     callback(new Error('请输入正确的验证码'))
//   } else if (identifyCode.value !== value) {
//     callback(new Error('请输入正确的验证码'))
//   } else if (identifyCode.value === value) {
//     callback()
//   }
// }

const rules = {
  username: [
    {
      trigger: 'change',
      validator: validatorUsername,
    },
  ],
  password: [
    {
      trigger: 'change',
      validator: validatorPassword,
    },
  ],
}
</script>

<style scoped lang="scss">
.login_container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;

  .login_form {
    width: 80%;
    position: relative;
    top: 30vh;
    background: url('@/assets/images/login_form.png') no-repeat;
    background-size: cover;
    padding: 40px;


    h1 {
      color: white;
      font-size: 40px;
    }

    h2 {
      font-size: 20px;
      color: white;
      margin: 20px 0px;
    }

    .login_btn {
      width: 100%;
    }
  }
}
</style>