<template>
<!-- separator 分隔符 -->
   <el-breadcrumb separator=">">
       <el-breadcrumb-item to="/home">首页</el-breadcrumb-item>
       <!-- 第二个内容是动态的 需要用props或插槽slot方式传进来 -->
       <el-breadcrumb-item>
           <slot name="tittle"></slot>
       </el-breadcrumb-item>
   </el-breadcrumb>
</template>

<script>
export default {

}
</script>

<style>

</style>
