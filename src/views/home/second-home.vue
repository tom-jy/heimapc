<template>
  <div class="second_home">
    <el-carousel :interval="10000" type="card" height="300px">
      <el-carousel-item v-for="item in list" :key="item.index">
        <img :src="item" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        'http://img0.imgtn.bdimg.com/it/u=3611563152,3081043588&fm=26&gp=0.jpg',
        'http://img0.imgtn.bdimg.com/it/u=3611563152,3081043588&fm=26&gp=0.jpg',
        'http://img0.imgtn.bdimg.com/it/u=3611563152,3081043588&fm=26&gp=0.jpg',
        'http://img0.imgtn.bdimg.com/it/u=3611563152,3081043588&fm=26&gp=0.jpg',
        'http://img0.imgtn.bdimg.com/it/u=3611563152,3081043588&fm=26&gp=0.jpg'

      ]
    }
  }
}
</script>

<style lang="less" scoped>
.second_home {
  height: calc(100vh - 60px); //四则运算：calc(100vh - 60px) -号左右要间隔空格
  // background-image: url("http://img0.imgtn.bdimg.com/it/u=3504977078,2591747000&fm=26&gp=0.jpg");
  background-size: cover;
}
</style>
