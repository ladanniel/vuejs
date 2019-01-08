//初始化多个vue实例化对象 案例 
var one = new Vue({
	el:"#vue1-app-one",
	data:{
		title:"app one的内容"

	},
	methods:{
		
	},
	computed:{
		greet:function(){
			return "hello app one"
		}
	},
	
});
var two = new Vue({
	el:"#vue1-app-two",
	data:{
		title:"app two的内容"
	},
	methods:{
		changeTitle:function(){
			one.title = "修改名字！"
		}
	},
	computed:{
		greet:function(){
			return "hello app two"
		}
	
	}
});
two.title = "app two 修改名字";
/*点击事件的绑定：v-on:click="" 
 */