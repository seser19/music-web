import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout'
import Home from '@/views/Home'
import Search from '@/views/Search'

Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        redirect:'/layout'
    },
    {
        path:'/layout',
        redirect:'/layout/home',//重定向到二级路由
        component: Layout,
        children:[
            {
                path:'home',
                component:Home,
                meta: { //元信息，给当前路由对象绑定值
                    title:"首页"
                }
            },
            {
                path:'search',
                component:Search,
                meta:{
                    title:"搜索"
                }
            }
        ]
    }
]

const router = new VueRouter({
    routes
})

export default router