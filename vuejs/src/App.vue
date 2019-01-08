<!-- 模板：html结构 -->
<template>
  <div id="app"><!-- 根标签只能有一个 -->
  <ul>
  	<!--存在的问题；点击hello或home,页面会重新加载，并不是路由跳转 <li><a href="/">home</a></li>
  	<li> <a href="/helloWorld">hello</a></li> -->
	<!-- 使用路由 可以减轻服务器负担-->
	<li><router-link to="/">home</router-link></li>
	<li><router-link to="/helloWorld">hello</router-link></li>
  </ul>
	<router-view></router-view>
  </div>
</template>
<!-- 处理逻辑 -->
<script>
export default {
  name: 'App',
	data(){
		return{
			
		}
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
