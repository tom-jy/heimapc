<template>
<!-- 用el卡片 具名slot放在header-->
  <el-card v-loading="loading">
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
              <template slot-scope='obj'>
                  <el-button size="small" type="text">修改评论</el-button>
                  <el-button @click="CloseorOpen(obj.row)" size="small" type="text">{{ obj.row.comment_status ? '关闭' :'打开' }}评论</el-button>
              </template>
          </el-table-column>

      </el-table>

          <el-row style="height:80px" type="flex" align="center" justify="center">
            <el-pagination
            background
            layout="prev, pager, next"
            :total="page.total"
            :current-page="page.currentPage"
            :page-size="page.pageSize"
            @current-change="changePage"></el-pagination>
          </el-row>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      page: {
        total: 0, // 默认总页数
        currentPage: 1, // 默认当前页
        pageSize: 10 // 默认条数
      },
      list: [

      ],
      loading: false
    }
  },
  methods: {

    changePage (newPage) {
      // 将最新的页码，设置给page下当前页码
      this.page.currentPage = newPage
      // 拉取数据
      this.getComments()
    },
    // 获取评论数据
    getComments () {
      this.loading = true // 打开遮罩层
      // pamras传get参数，也query参数，data传body参数
      this.$axios({
        url: '/articles',
        params: {
          response_type: 'comment',
          page: this.page.currentPage, // 默认查第一页
          per_page: this.page.pageSize // 查多少条
        }
      }).then(result => {
        this.list = result.data.results // 获取的数据给list
        this.page.total = result.data.total_count
        this.loading = false // 关闭遮罩层
      })
    },
    formatterBool (row, column, cellValue, index) {
    // row代表当前行信息
    // colum列信息
    // cellvalue 当前单元格的值
    // index 当前索引
    // 该函数需要一个返回值
      return cellValue ? '正常' : '关闭'
    },
    CloseorOpen (row) {
      const mess = row.comment_status ? '关闭' : '打开'
      this.$confirm(`是否 ${mess} 评论`, '提示').then(() => {
        this.$axios({
          url: '/comments/status',
          method: 'put',
          params: {
            article_id: row.id.toString()
          },
          data: {
            allow_comment: !row.comment_status
          }
        }).then(() => {
          this.$message.success(` ${mess}成功`)
        }).catch(() => {
          this.$message.error(` ${mess}失败`)
        })
      })
    }
  },

  created () {
    this.getComments() // 在钩子函数中，获取数据
  }
}
</script>

<style>

</style>
