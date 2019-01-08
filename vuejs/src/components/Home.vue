<!-- 模板：html结构 -->
<template>
  <div id="home"><!-- 根标签只能有一个 -->
	<app-header v-on:titleChanged="updateTitle($event)" v-bind:title="title"></app-header>
	<!-- 将users绑定到user组件上传回users子组件中 -->
	<users v-bind:users = "users"></users>
	<users v-bind:users = "users"></users>
	<app-footer v-bind:title="title"></app-footer>

  </div>
</template>
<!-- 处理逻辑 -->
<script>
	/*局部注册组件
	 两个组件要产生关联必须import 并在export中注册 要让组件能够被识别，必须要引入组件*/
import users from './users'
import Header from './Header'
import Footer from './Footer'
export default {
  name: 'home',
	data(){
		return{
			users:[/* 如果很多组件都会用到该数据？？？？？ 把他抽出来作为父组件父类*/
			//使用网络接口
			
			/* {name:"henry",position:"java开发",show:false},
			{name:"bucky",position:"web开发",show:false},
			{name:"Emily",position:"java-web开发",show:false},
			{name:"henry",position:"java开发",show:false},
			{name:"bucky",position:"web开发",show:false},
			{name:"Emily",position:"java-web开发",show:false} */
			],
			title:"传递一个值，类型为String Boolean"
		}
	},
	methods:{
		updateTitle:function(title){
			this.title =title;
		}
	},
	components:{
		/* "users" 注册或者下面这种方式也可以,但是"users"会报错*/
		"users":users,
		"app-header":Header,/* 之所以不用header是因为会跟header标签冲突 */
		"app-footer":Footer
	},
	/*语法1 created:function() {/* 在页面没有加载之前创建的组件 的函数*/
		
	/*} */
	//es6语法 两种语法都可以看个人习惯
	created() {
		this.$http.get("http://jsonplaceholder.typicode.com/users")
		.then((data) =>{/* 请求成功调用then方法 */
			/* console.log(data); */
			this.users = data.body;
		})
	}
}
</script>
<!-- 样式：解决样式 -->
<!-- 要让不同组件显示自己相关的样式，需要给一个“域”——scope 之后会给对应的域做一个标识，用于识别范围-->
<style scoped>
h1{
	color: #ADFF2F;
}
</style>
