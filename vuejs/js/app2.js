//实例化vue对象 
new Vue({
	el:"#vue1-app",
	data:{
		a:0,
		b:0,
		age:20
	},
	methods:{
		/* AddtoA:function(){
			console.log("Add to A");
			return this.a + this.age;
		},
		AddtoB:function(){
			console.log("Add to A");
			return this.b + this.age;
		} */
	},
	computed:{
			AddtoA:function(){
			console.log("Add to A");
			return this.a + this.age;
		},
		AddtoB:function(){
			console.log("Add to B");
			return this.b + this.age;
		}
	}
})
/*点击事件的绑定：v-on:click="" 
 */