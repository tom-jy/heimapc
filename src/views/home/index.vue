<template>
  <!-- 外部容器 -->
  <el-container>
    <!-- 侧边栏容器 -->
    <el-aside style="width: 230px" background-color="#2e2f32">
       <layout-said></layout-said>
    </el-aside>
    <!-- 右侧区域 -->
    <el-container>
      <!-- 标题栏 -->
      <el-header>
        <layout-header></layout-header>
      </el-header>
      <!-- 主要内容区域 -->
      <el-main style="padding:0">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
// import layoutAsaid from '@/components/home/layout-said'
// import layoutHeader from '@/components/home/layout-header'

export default {

}
</script>

<style>
</style>
