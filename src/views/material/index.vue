<template>
  <!-- card布局 -->
  <el-card>
    <!-- 放置面包屑 -->
    <breadcrub slot="header">
      <template slot="tittle">
          素材管理
      </template>
    </breadcrub>

    <el-tabs v-model="activeName">
        <!-- label表示显示标签的名称，name表示选中的值 -->
         <el-tab-pane label="全部" name="all">全部</el-tab-pane>
         <el-tab-pane label="收藏" name="collect">收藏</el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'all' // 表示默认选中激活的值
    }
  }
}
</script>

<style>
</style>
