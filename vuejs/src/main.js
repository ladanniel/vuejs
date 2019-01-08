// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//引进路由类
import VueRouter from 'vue-router'
//引进http请求vue-resource
import VueResource from 'vue-resource'
//引进helloWorld和Home
import HelloWorld from './components/HelloWorld'
import Home from './components/Home'
import App from './App'

/* 要让组件能够被识别，必须要引入组件 */
/* import users from './components/users' */
Vue.config.productionTip = false
//使用路由中间键
Vue.use(VueRouter)
//使用http中间建
Vue.use(VueResource)
//配置路由
const router = new VueRouter({
	routes:[
		{path:"/",component:Home},
		{path:"/helloWorld",component:HelloWorld}
		],
		mode:"history" /* 处理url中的"/#" 就可以在urL中删除这个*/
})

//注册全局组件
/* Vue.component("users",users) *//* ("组件名"，组件可调用对象) */
/* eslint-disable no-new */
new Vue({
//实例化router
  router,
  el: '#app',/* vue控制的容器的id */
  router,
  components: { App },/* 注册组件，调用组件之前，需要注册主键 */
  template: '<App/>' /* 模板组件调用标签 */
})
/* 完整流程：index.html -> 执行main.js 实例化-> App.vue(组件)
App.vue(组件)：
第一部分包括：template模板 html结构
第二部分包括：<script>处理逻辑
第三部分包括：<style>样式

*/
