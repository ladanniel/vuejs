<template>
	<div class="users"><!-- 建议组件名是什么，class名字就是什么 -->
		<h1>hello Users组件嵌套demo</h1>
		<ul>
			<li  v-for="user in users" v-on:click="user.show = !user.show">
				<h2>{{user.name}}</h2>
				<h3 >{{user.email}}</h3>
				
				<!-- 必须与app.vue产生联系 
				要显示app.vue下的子组件
				1.在main.js中注册全局组件,开发中很少用全局组件
				2.一般使用局部组件
				-->
			</li>
		</ul>
		<button v-on:click="deleteuser">删除</button>
	</div>
</template>

<script>
	export default {
		name:"users",
		/* 接受父组件app.vue绑定穿过来的值,自定义对象时，注意“保持一致”原则，即子组件中的对象跟父组件对象保持一致 */
		//props:["users"],
		//官方推荐写法
		//传值八大基本类型，String，number，boolean等 引用array、 object
		props:{
			users:{
				type:Array,
				required:true
			}
		},
		data() {
			return {
				
			};
		},
		methods:{
			deleteuser:function(){
				this.users.pop();/* prop出栈方法 */
			}
		}
	}
</script>
<!-- 要让不同组件显示自己相关的样式，需要给一个“域”——scope 之后会给对应的域做一个标识，用于识别范围-->
<style scoped>
	.users{
		width: 100%;
		max-width: 1200px;
		margin: 40px auto;
		padding: 0 20px;
		box-sizing: border-box;
	}
 ul{
	 display: flex;
	 flex-wrap: wrap-reverse;
	 list-style-type: none;
	 padding: 0;
 }
 li{
	 flex-grow: 1;
	 flex-basis: 200px;
	 text-align: center;
	 padding: 30px;
	 border: 1px solid #222;
	 margin: 10px;
	 }
</style>
