// 入口文件
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
import 'jquery/dist/jquery.min.js'
import'bootstrap/dist/css/bootstrap.min.css'
import'bootstrap/dist/js/bootstrap.min.js'
import router from './router.js'
import app from './app.vue'
var vm=new Vue({
  el:'#app',
  render:c=>c(app),
  router,
})