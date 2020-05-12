<template>
<!-- 用el卡片 具名slot放在header-->
  <el-card>
      <!-- 引用面包屑 -->
      <breadcrub slot="header">
           <template slot="tittle">
            评论管理
           </template>
      </breadcrub>
<!-- 评论列表 -->
      <el-table :data="list">
          <!-- lable表头 width宽 prop显示字段-->
          <el-table-column width="600px" label="标题"></el-table-column>
          <el-table-column label="评论状态"></el-table-column>
          <el-table-column label="总评论数"></el-table-column>
          <el-table-column label="粉丝评论数"></el-table-column>
          <el-table-column label="操作"></el-table-column>
      </el-table>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      list: [

      ]
    }
  }
}
</script>

<style>

</style>
