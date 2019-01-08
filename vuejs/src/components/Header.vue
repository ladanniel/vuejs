<template>
	<header v-on:click="changedTitle">
		<h1>{{title1}} {{title}} </h1>
	</header>
</template>
<script>
	export default {
		name:"Hello-World",
		/* props是子组件访问父组件数据的唯一接口。 */
		props:{
			title:{
				type:String
			}
		},
		data() {
			return {
				title1:"Vue.js Demo"
			};
		},
		methods:{
			changedTitle:function(){
				// this.title="changed";
				this.$emit("titleChanged","子向父组件传值");
			}
		},
		/* beforeCreate:function() {
			console.log("组件实例化之前执行的函数");
		},
		created:function(){
			alert("组件实例化完毕，但页面还未显示");
		},
		beforeMount:function(){
			alert("组件挂载前，页面仍未显示，但虚拟DOM已配置");
		},
		mounted:function(){
			alert("组件挂在后，此方法执行后页面显示");
		},
		beforeUpdate:function(){
			alert("组件更新前，页面仍未更新，但虚拟DOM已经配置");
		},
		updated:function() {
			alert("组件更新，此方法执行后，页面显示");
		},
		beforeDestroy:function() {
			alert("组件销毁前,页面仍未显示,但虚拟DOM已经配置");
		},
		destroyed:function() {
			alert("组件销毁");
		} */
	}
</script>

<style scoped>
	header{
		background: lightblue;
		padding: 10px;
		text-align: center;
	}
	h1{
		color: #42B983;
	}
</style>
