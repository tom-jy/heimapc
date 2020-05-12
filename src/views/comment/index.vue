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
      <el-table :data='list'>
          <!-- lable表头 width宽 prop显示字段-->
          <el-table-column prop="title" width="600px" label="标题"></el-table-column>

          <!-- el-table-column中不显示布尔值，我们可以用他的格式化工具解决，属性formatter -->
          <el-table-column :formatter="formatterBool" prop="comment_status" label="评论状态"></el-table-column>
          <el-table-column prop="total_comment_count" label="总评论数"></el-table-column>
          <el-table-column prop="fans_comment_count" label="粉丝评论数"></el-table-column>
          <el-table-column label="操作">
              <el-button size="small" type="text">修改</el-button>
              <el-button size="small" type="text">删除</el-button>
          </el-table-column>
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
  },
  methods: {
    // 获取评论数据
    getComments () {
      // pamras传get参数，也query参数，data传body参数
      this.$axios({
        url: '/articles',
        params: {
          response_type: 'comment'
        }
      }).then(result => {
        this.list = result.data.results // 获取的数据给list
      })
    },
    formatterBool (row, column, cellValue, index) {
    // row代表当前行信息
    // colum列信息
    // cellvalue 当前单元格的值
    // index 当前索引
    // 该函数需要一个返回值
      return cellValue ? '正常' : '关闭'
    }
  },

  created () {
    this.getComments() // 在钩子函数中，获取数据
  }
}
</script>

<style>

</style>
