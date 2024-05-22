<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0">
      </el-col>
      <el-col :span="12" :xs="24">
        <el-form class="login_form" :model="loginForm" :rules="rules" ref="loginFormRef">
          <h2>后台管理系统</h2>
          <el-form-item prop="username">
            <el-input :prefix-icon="User" v-model="loginForm.username" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input :prefix-icon="Lock" show-password v-model="loginForm.password" type="password"
              placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button :loading class="login_btn" @click="login" @keydown.enter="keyDown()" type="primary">
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue'
import useUserStore from '@/store/modules/user'
import { useRouter } from 'vue-router'
import { reactive, ref, onMounted, onUnmounted } from 'vue'
import { ElNotification } from 'element-plus'
import { getTime } from '@/utils/time'

let userStore = useUserStore()

let $router = useRouter()

let loginForm = reactive({
  username: '',
  password: '',
})

let loginFormRef = ref()



onMounted(() => {
  document.addEventListener('keydown', keyDown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', keyDown)
})

let loading = ref(false)


//自定义校验规则
//rule: 当前的校验规则
//value: 当前的校验值
//callback: 回调函数
//callback(): 校验通过
//callback(new Error('错误信息')): 校验失败
const validatorUsername = (rule: any, value: any, callback: any) => {
  //判断用户名是否符合规则
  //正则表达式
  //^: 开始
  //$: 结束
  //\w: 匹配数字、字母、下划线
  //{3,10}: 长度在3-10之间
  //g: 全局匹配
  let reg = /^[a-zA-Z0-9_]{3,10}$/g
  if (!reg.test(value)) {
    callback(new Error('用户名长度在3-10之间且由数字、字母、下划线组成'))
  } else {
    callback()
  }
}

const validatorPassword = (rule: any, value: any, callback: any) => {
  //判断密码是否符合规则
  //正则表达式
  //^: 开始
  //$: 结束
  //\w: 匹配数字、字母、下划线
  //{6,15}: 长度在6-15之间
  //g: 全局匹配
  let reg = /^[a-zA-Z0-9_]{6,15}$/g
  if (!reg.test(value)) {
    callback(new Error('密码长度在6-15之间且由数字、字母、下划线组成'))
  } else {
    callback()
  }
}

//表单校验需要的对象
const rules = reactive({
  username: [
    //规则对象属性：
    //required: 是否必填
    //message: 提示信息
    //trigger: 触发方式 (blur: 失去焦点时触发, change: 值改变时触发)
    //validator: 自定义校验规则
    //min: 最小长度
    //max: 最大长度
    { validator: validatorUsername, trigger: 'change' }],
  password: [
    { validator: validatorPassword, trigger: 'blur' },
  ],
})


const login = async () => {
  //表单校验
  let valid = await loginFormRef.value.validate()
  if (!valid) return

  try {
    loading.value = true
    await userStore.userLogin(loginForm)
    $router.push('/')
    //登录成功的提示信息
    ElNotification({
      type: 'success',
      message: '欢迎回来',
      title: `hi,${getTime()}`,
    })
    loading.value = false
  } catch (error) {
    //登录失败提示信息

    loading.value = false
    ElNotification({
      type: 'error',
      message: error,
    })
  }
}

//点击回车键登录
const keyDown = (e) => {
  if (e.keyCode == 13 || e.keyCode == 100) {
    loginFormRef.value.validate((valid: boolean) => {
      if (valid) {
        login()
      }
    })
  }

}

onMounted(() => {
  //绑定监听事件
  window.addEventListener('keydown', keyDown)
})

onUnmounted(() => {
  //销毁事件
  window.removeEventListener('keydown', keyDown, false)
})
</script>

<style scoped lang="scss">
.login_container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;
}

.login_form {
  position: relative;
  width: 50%;
  top: 30vh;
  margin: 0px auto;
  background: url('@/assets/images/login_form.png') no-repeat;
  background-size: cover;
  padding: 40px;
}

h2 {
  color: #fff;
  font-size: 30px;
  text-align: center;
  margin-bottom: 30px;
}

.login_btn {
  width: 100%;
}
</style>
