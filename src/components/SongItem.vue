<template>
    <van-cell
        :title="name"
        :label="author + ' ' + name"
        center
    >
        <template #right-icon>
            <van-icon name="play-circle-o" class="play-icon" @touchstart="playFn" />
        </template>
    </van-cell>
</template>

<script>
export default {
    props: {
        name: String, //歌名
        author: String, //作者
        id: Number //歌曲id
    },
    methods:{
        playFn(){
            this.$router.push({
                path: "/play",
                query: {
                    id: this.id
                }
            })
        }
    }
}
</script>

<style scoped>
    .play-icon {
        font-size: 21px;
        line-height: inherit;
    }
</style>