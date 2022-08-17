import request from '@/utils/request'

//推荐歌单
export const recommendMusic = params => request({
    url: "/personalized",
    params
})

//最新音乐
export const newSongs = params => request({
    url: "/personalized/newsong",
    params
})