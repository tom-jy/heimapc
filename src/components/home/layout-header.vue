<template>
   <el-row class="header" type="flex" align="middle">
        <el-col class="left" :span="12">
            <i class="el-icon-s-unfold"></i>
            <span>江苏传智播客教育科技股份有限公司</span>
        </el-col>
        <el-col class="right" :span="12">
            <el-row type="flex" justify="end" align="middle">
                <img :src="userInfo.photo" alt="">
                <el-dropdown>
                    <span class="el-dropdown-link">{{userInfo.name}}
                         <i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu>
                         <el-dropdown-item>我的</el-dropdown-item>
                         <el-dropdown-item>git</el-dropdown-item>
                         <el-dropdown-item divided>退出</el-dropdown-item>
                    </el-dropdown-menu>

                </el-dropdown>
            </el-row>
        </el-col>
   </el-row>
</template>

<script>
export default {
  // 现在data中定义一个接收信息的对象
  data () {
    return {
      userInfo: {}
    }
  },
  //   用钩子函数created获取用户信息
  created () {
    //   拿到钥匙，
    const token = localStorage.getItem('use-token')
    this.$axios({
      url: 'user/profile',
      headers: {
        // 把token放进headers中，格式要求前边要跟Bearer空格
        Authorization: `Bearer ${token}`
      }
    }).then(result => {
      // 成功拿到钥匙之后，赋值给接收对象userInfo
      this.userInfo = result.data.data // 最后去v-bind给页面
    })
  }
}
</script>

<style lang="less" scoped>
.header{
    height: 60px;
    .left{
        i{
            font-size: 20px;
        }
    }
    .right{
        img{
            width: 40px;
            height: 40px;
            border-radius: 50%;
            margin-right: 5px;
        }
    }
}
</style>
