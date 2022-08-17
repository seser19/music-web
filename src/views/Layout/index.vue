<template>
  <div>
    <van-nav-bar :title="activeTitle" fixed/>

    <div class="main">
      <router-view></router-view>
    </div>

    <van-tabbar route @change="changeFn">
      <van-tabbar-item name="首页" replace to="/layout/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item name="搜索" replace to="/layout/search" icon="search">搜索</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeTitle: this.$route.meta.title
      };
    },
    methods: {
      changeFn(str){
        console.log(str)
        this.activeTitle = str;
      }
    }
  };
</script>

<style scope>
  .main{
    padding-top:46px;
    padding-bottom:50px;
  }
</style>
