<template>
  <div class="second_home">
    <el-carousel :interval="1000" type="card" height="500px">
      <el-carousel-item v-for="item in list" :key="item">
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
        'http://img4.imgtn.bdimg.com/it/u=3315838951,2925046183&fm=26&gp=0.jpg',
        'http://img3.imgtn.bdimg.com/it/u=3519657295,2479789638&fm=26&gp=0.jpg',
        'http://img5.imgtn.bdimg.com/it/u=1532844926,3671374399&fm=26&gp=0.jpg',
        'http://img2.imgtn.bdimg.com/it/u=1629181125,3793485573&fm=26&gp=0.jpg'
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.second_home {
  height: calc(100vh - 60px); //四则运算：calc(100vh - 60px) -号左右要间隔空格
  background-image: url("http://img0.imgtn.bdimg.com/it/u=3362761179,559138149&fm=26&gp=0.jpg");
  background-size: cover;
}
</style>
