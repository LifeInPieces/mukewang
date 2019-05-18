import VueRouter from 'vue-router'
import './assets/css/base.css'
import yuanwen from './components/yuanwen.vue'
import submit from './components/submit.vue'
import detail from './components/detail.vue'
// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    {path:'/',redirect:'/yuanwen'},
    {path:'/yuanwen',component:yuanwen},
    {path:'/submit',component:submit},
    {path:'/detail',component:detail}
  ],
  linkActiveClass:'active'
})

// 把路由对象暴露出去
export default router