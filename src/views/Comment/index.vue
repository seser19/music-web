<template>
  <div>
    <van-nav-bar title="评论" fixed left-arrow @click-left="$router.back()"/>
    <div class="main">
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <van-list
                v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad"
            >
                <van-cell v-for="(obj, index) in list" :key="index">
                    <template>
                        <div class="wrap">
                            <div class="img_wrap">
                                <img :src="obj.user.avatarUrl" alt=""/>
                            </div>
                            <div class="conten_wrap">
                                <div class="header_wrap">
                                    <div class="info_wrap">
                                        <p>{{ obj.user.nickname }}</p>
                                        <p>{{ obj.time }}</p>
                                    </div>
                                    <div>{{obj.likedCount}}点赞</div>
                                </div>
                                <div class="footer_wrap">{{obj.content}}</div>
                            </div>
                        </div>
                    </template>
                </van-cell>
            </van-list>
        </van-pull-refresh>
    </div>
    
  </div>
</template>

<script>
  import { getCommentListAPI } from '@/api/index'
  export default {
    data(){
      return{
        list: [],
        isLoading: false, //下拉刷新
        loading: false, //上拉加载状态
        finished: false,
        page: 1, //当前评论页数
      }
    },
    methods:{
        async getList(){
            const res = await getCommentListAPI({
                id: this.$route.query.id,
                limit: 20,
                offset: (this.page - 1) * 20 //分页
            });
            res.data.comments.forEach(obj => this.list.push(obj));
            this.list = res.data.comments;
            this.isLoading = false;
            this.loading = false; //每次请求完数据都要把loading关闭，不然不会再次触发onLoad
        },
        async onRefresh(){ //下拉刷新，请求新的数据
            //当UI层面手动下拉，内部会自动把isLoading改成true
            this.list = [];
            this.page = 1;
            this.getList();
        },
        async onLoad(){ //触底加载下一页数据，加载后要关闭loading为false
            this.getList();
            this.page++;
        }
    }
  }
</script>

<style scoped>
    .main{
        padding-top: 46px;
    }
    .wrap{
        display: flex;
    }
    .img_wrap{
        width: 0.8rem;
        height: 0.8rem;
        margin-right: 0.266667rem;
    }
    .img_wrap img{
        width: 100%;
        height:100%;
        border-radius:50%;
    }
    .content_wrap{
        flex: 1;
    }
    .header_wrap{
        display: flex;
    }
    .info_wrap{
        flex: 1;
    }
    .info_wrap p:first-child{
        font-size: 0.373333rem;
        color: #666;
    }
    .info_wrap p:last-of-type{
        font-size: 0.24rem;
        color: #999;
    }
    .header_wrap div:last-of-type{
        color: #999;
        font-size: 0.293333rem;
    }
    .footer_wrap{
        font-size: 0.4rem;
        color: #333;
    }

</style>