<template>
  <!-- 外部容器 -->
  <el-container>
    <!-- 侧边栏容器 -->
    <el-aside style="width: 230px">
       <layout-said></layout-said>
      <h1>侧边栏</h1>
    </el-aside>
    <!-- 右侧区域 -->
    <el-container>
      <!-- 标题栏 -->
      <el-header>
        <layout-header></layout-header>
        <h1>标题栏</h1>
      </el-header>
      <!-- 主要内容区域 -->
      <el-main>
        <h1>主要内容区域</h1>
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
