//实例化vue对象 
new Vue({
	el:"#vue1-app",
	data:{
		name:"",
		age:""
	},
	methods:{
	logName:function(){
		// console.log(this.$refs.name.value);
		//this.name = this.$refs.name.value;
	},
	logAge:function(){
		// console.log(this.$refs.age.value);
		//this.age = this.$refs.age.value;
	}
	}
})
/*点击事件的绑定：v-on:click="" 
 */