//组件：作用优化代码，减少代码量
/* var name = 'jack';暴露为全局变量 */
Vue.component("greeting",{
	template:`<p>{{name}}: 大家好，给大家介绍一下我的女朋友@关晓彤
	<button v-on:click='changeName'>改名</button></p>`,
	data:function(){
		return {
			name:"鹿晗"/* 如果此处采用var name 全局变量，会带来点击‘改名’所有的name都改变了，这并不是想要的结果return name*/
		}
	},
	methods:{
		changeName:function(){
			this.name = "henry";
		}
	}
});



new Vue({
	el:"#vue1-app-one",
});
new Vue({
	el:"#vue1-app-two",
});