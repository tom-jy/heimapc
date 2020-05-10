<template>
  <div class="layout-said">
    <div class="tltle">
      <img src="../../assets/img/logo_admin.png" alt="">
    </div>

    <el-menu background-color="#323745" text-color="#adafb5">
      <!-- 首页 -->
      <el-menu-item>
        <i class="el-icon-s-home"></i>
        <span>首页</span>
      </el-menu-item>
      <el-submenu>
        <template  slot="title">
          <i class="el-icon-reading"></i>
        <span>内容管理</span>
        </template>
          <el-menu-item>发布文章</el-menu-item>
          <el-menu-item>内容列表</el-menu-item>
          <el-menu-item>评论列表</el-menu-item>
          <el-menu-item>素材管理</el-menu-item>
      </el-submenu>

      <el-submenu>
        <template slot="title">
        <i class="el-icon-s-opportunity"></i>
        <span>粉丝管理</span>
        </template>
          <el-menu-item>图文数据</el-menu-item>
          <el-menu-item>粉丝概况</el-menu-item>
          <el-menu-item>粉丝头像</el-menu-item>
          <el-menu-item>粉丝列表</el-menu-item>
      </el-submenu>
      <!-- 账户信息 -->
      <el-menu-item>
        <i class="el-icon-user-solid"></i>
        <span>账户信息</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.layout-said{
  background-color: #2e2f32;
  width: 230px;
  height: 100vh;
  .tltle{
    text-align: center;
    padding: 10px 0;
    img{
      height: 35px;
    }
  }
  .el-menu {
    border-right: none;
  }
}
</style>
