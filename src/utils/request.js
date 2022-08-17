//封装网络请求方法
//封装好处1、便于修改；2、便于更换（以后不用anxios，只需要换这个即可），逻辑页面不用碰
import axios from 'axios';
const ajax = axios.create({
    baseURL: "http://localhost:3000" //服务器基地址
})

export default ajax;