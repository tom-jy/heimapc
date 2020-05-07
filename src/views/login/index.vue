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
      <el-form :model="loginForm" :rules="rules">
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
          <el-button style="width:100%" type="primary">登录</el-button>
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
        mobile: '',
        code: '',
        checked: false
      },
      rules: {

      }
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
    background-image: url("../../assets/img/bak.jpg");
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
