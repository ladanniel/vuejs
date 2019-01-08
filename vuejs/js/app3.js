//实例化vue对象 
new Vue({
	el:"#vue1-app",
	data:{
		changeColor:false,
		changeLength:false
	},
	methods:{
		
	},
	computed:{
		compClasses:function(){
			return{
				changeColor:this.changeColor,
				changeLengt:this.changeLength
			}
		}
	}
})
/*点击事件的绑定：v-on:click="" 
 */