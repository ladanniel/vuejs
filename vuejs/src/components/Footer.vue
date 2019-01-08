<template>
	<footer>
		<h1>{{copyright}}{{title}}</h1>
	</footer>
</template>

<script>
	export default {
		/* props是子组件访问父组件数据的唯一接口。 */
		props:{
			title:{
				type:String
			}
		},
		data() {
			return {
				copyright:"Copyright 2019 Vue Demo"
			};
		}
	}
</script>

<style>
	footer{
		background: black;
		padding: 6px;
		text-align: center;
	}
	h1{
		color: #2C3E50;
	}
</style>
