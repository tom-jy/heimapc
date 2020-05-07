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
      <el-form>
        <el-form-item style="padding-top:20px">
          <!-- 表单域 -->
          <el-input placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input placeholder="请输入验证码" style="width:60%"></el-input>
          <el-button style="float:right;width:35%" plain>发送验证码</el-button>
        </el-form-item>
        <el-form-item>
          <el-checkbox>我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button style="width:100%" type="primary">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.login {
  background-image: url("../../assets/img/bak.jpg");
  height: 100vh;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  .login_card {
    width: 450px;
    height: 350px;
    .logo {
      text-align: center;
      img {
        height: 40px;
      }
    }
  }
}
</style>
