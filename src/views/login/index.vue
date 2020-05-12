<template>
  <div class="login">
    <!-- 表单 -->
    <el-card class="login_card">
      <!-- 表单内容 -->
      <div class="logo">
        <img src="../../assets/img/logo_index.png" alt />
      </div>
      <!-- <el-form-item></el-form-item> -->
      <!-- 表单容器 -->
      <el-form :model="loginForm" :rules="rules" ref="loginForm">
        <el-form-item style="padding-top:20px" prop="mobile">
          <!-- 表单域 -->
          <el-input placeholder="请输入手机号" v-model="loginForm.mobile"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input placeholder="请输入验证码" style="width:60%" v-model="loginForm.code"></el-input>
          <el-button style="float:right;width:35%" plain>发送验证码</el-button>
        </el-form-item>
        <el-form-item prop="checked">
          <el-checkbox v-model="loginForm.checked">我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button @click="loginOk" style="width:100%" type="primary">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {

  data () {
    return {
      loginForm: {
        mobile: '13911111111',
        code: '246810',
        checked: false
      },
      rules: {
        mobile: [
          {
            required: true,
            message: '您的手机号码不能为空'
          },
          {
            pattern: /^1[3-9]\d{9}$/,
            message: '您的手机号格式错误'
          }
        ],
        code: [
          {
            required: true,
            message: '您的验证码不能为空'
          },
          {
            pattern: /^\d{6}$/,
            message: '您的验证码格式错误'
          }
        ],
        checked: [
          {
            validator: function (rules, value, callback) {
              value
                ? callback()
                : callback(new Error('您必须同意我们的霸王条款'))
            }
          }
        ]
      }
    }
  },
  methods: {
    loginOk () {
      // 第一种方法：回调函数
      // this.$refs.loginForm.validate(function (isOK) {
      //   if (isOK) {
      //     console.log('校验成功')
      //   } else {
      //     console.log('校验失败')
      //   }
      // })

      // 第二种方法：promise
      this.$refs.loginForm.validate().then(() => {
        // alert('登录成功')
        this.$axios({
          url: 'authorizations', // 请求地址
          // parmas:{}, //地址参数，也叫get参数
          data: { ...this.loginForm, checked: null }, // body参数，常用于post/put/patch
          method: 'post' // 请求类型，post/get/delete/put/patch
        }).then(result => {
          // 前端持久化,将钥匙放进兜里,即把token放于本地缓存
          window.localStorage.setItem('use-token', result.data.token)

          // 编程式导航：跳到home页
          this.$router.push('/home')
        }).catch(() => {
          // 第一种,传入一个对象{提示信息+提示类型}
          // this.$message({ message: '账号或密码输入错误', type: 'error' })
          // 第二种方法
          this.$message.error('账号或密码输入错误')
        })
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  // background-image: url("../../assets/img/bak.jpg");
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  &:before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background-size: cover;
    background-image: url("../../assets/img/login_bg.jpg");
    // filter: blur(1px);//毛玻璃
  }
  .login_card {
    z-index: 2;
    width: 450px;
    height: 350px;
    background: rgba(0, 0, 0, 0);
    .logo {
      text-align: center;
      img {
        height: 40px;
      }
    }
  }
}
</style>
