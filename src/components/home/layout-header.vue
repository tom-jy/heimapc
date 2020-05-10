<template>
   <el-row class="header" type="flex" align="middle">
        <el-col class="left" :span="12">
            <i class="el-icon-s-unfold"></i>
            <span>江苏传智播客教育科技股份有限公司</span>
        </el-col>
        <el-col class="right" :span="12">
            <el-row type="flex" justify="end" align="middle">
                <img src="http://img0.imgtn.bdimg.com/it/u=3256100974,305075936&fm=26&gp=0.jpg" alt="">
                <el-dropdown>
                    <span class="el-dropdown-link">下拉菜单
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
