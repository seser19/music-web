<template>
  <div>
    <!-- 标题 -->
    <p class="title">推荐歌单</p>
    <van-row gutter="10">
      <van-col span="8" v-for="obj in recommendList"  :key="obj.id">
        <van-image
          width="100%"
          height="3rem"
          :src="obj.picUrl"
        />
        <p class="song_name">{{obj.name}}</p>
      </van-col>
    </van-row>
    <p class="title">最新音乐</p>
    <song-item 
      v-for="obj in newList" 
      :key="obj.id"
      :name="obj.name"
      :author="obj.song.artists[0].name"
      :id="obj.id"
    >  
    </song-item>
  </div>
</template>

<script>
  import { recommendMusicAPI, newSongsAPI } from '@/api/index'
  import SongItem from '@/components/SongItem'
  export default {
    components: {
      SongItem
    },
    async created(){
      const res = await recommendMusicAPI({limit: 6});
      const songRes = await newSongsAPI();
      this.recommendList = res.data.result;
      this.newList = songRes.data.result;
    },
    data(){
      return {
        recommendList: [], //推荐歌单
        newList: [], //最新音乐
      }
    }
  }
</script>

<style scoped>
  .title {
    padding: 0.266667rem 0.24rem;
    margin: 0 0 0.24rem 0;
    background-color: #eee;
    color: #333;
    font-size: 15px;
  }

  .song_name {
    font-size: 0.346667rem;
    padding: 0 0.08rem;
    margin-bottom: 0.266667rem;
    word-break: break-all;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }

  .play-icon {
    font-size: 21px;
    line-height: inherit;
  }
</style>