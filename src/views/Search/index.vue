<template>
  <div>
    <van-search shape="round" v-model="searchValue" placeholder="请输入搜索关键词" clearable/>
    <div class="hot_search" v-if="resultList.length === 0">
      <p class="hot_title">热门搜索</p>
      <ul class="hot_name_wrap">
        <li class="hot_item"
          v-for="(obj,index) in hotList" 
          :key="index"
          @click="btn(obj.first)"
        >
          {{obj.first}}
        </li>
      </ul>
    </div>
    <div class="hot_search" v-else>
      <p class="hot_title">最佳匹配</p>
      <van-cell v-for="obj in resultList" :key="obj.id" :title="obj.name" :label="obj.ar[0].name + ' ' + obj.name" center >
        <template #right-icon>
          <van-icon name="play-circle-o" class="play-icon" />
        </template>
      </van-cell>
    </div>
  </div>
</template>

<script>
  import { hotSearchAPI, searchResultAPI } from '@/api';
  export default {
    data(){
      return{
        searchValue: "",
        hotList: [], //热搜关键字
        resultList: [], //搜索结果
        timer: null, // 定时器
      }
    },
    async created(){
      const res = await hotSearchAPI()
      this.hotList = res.data.result.hots
    },
    methods: {
      btn(str){
        this.searchValue = str;
      }
    },
    watch: {
      searchValue(val){ 
        clearTimeout(this.timer) // 必须写在上面，防止输入框空，还显示请求回来的数据，保证最后那次网络请求定时器关闭
        if(val.length === 0) //输入框里无值
          return (this.resultList = []);
        this.timer = setTimeout(async () => {
          const searchRes = await searchResultAPI({
            type: 1,
            keywords: val,
          });
          this.resultList = searchRes.data.result.songs;
        }, 200)
      }
    }
  }
</script>

<style scoped lang="less">
/* 覆盖vant组件样式，除了用less文件以外，还可以直接找到类名直接覆盖 */
/* deep 控制scoped加入的随意属性，放到选择器前面，确保能够选中组件内的标签类名 */
  /deep/ .van-field__control{
      font-size: 14px
    }

  .hot_search{
    padding:0.266667rem;
  }
  .hot_title{
    font-size:0.32rem;
    color:#666;
  }
  .hot_name_wrap{
    margin: 0.266667rem;
  }
  .hot_item{
    display: inline-block;
    height: 0.853333rem;
    margin-right: 0.213333rem;
    margin-bottom: 0.213333rem;
    padding: 0 0.373333rem;
    font-size: 0.373333rem;
    line-height: 0.853333rem;
    color: #333;
    border-color:#d3d4da;
    border-radius: 0.853333rem;
    border: 1px solid #d3d4da;
  }

  .play-icon {
    font-size: 21px;
    line-height: inherit;
  }
</style>