import Vue from 'vue'
import App from './App.vue'
//相对路径不好
//原因：文件如果以后改变位置，路径代码页要改变
//解决方法：绝对路径，vue脚手架内置的webpack定义了一些路径变量
//"@"路径里的@，代表的是src绝对路径
import "@/mobile/flexible"
import "@/styles/reset.css"
import router from "@/router" //导入路由对象

//全局注册vant组件，自动按需引入
import { 
  NavBar,
  Tabbar, TabbarItem,
  Col, Row,
  Image as VanImage,
  Cell, CellGroup,
  Icon,
  Search
} from 'vant';

Vue.use(NavBar);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Col);
Vue.use(Row);
Vue.use(VanImage);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Icon);
Vue.use(Search);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
