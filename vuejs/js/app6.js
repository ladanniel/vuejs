//实例化vue对象 
new Vue({
	el:"#vue1-app",
	data:{
		health:100,
		ended:false
		
	},
	methods:{
		punch:function(){
			this.health -= 10;
			if(this.health <= 0){
				this.ended = true;
			}
		},
		restart:function(){
			this.health = 100;
			this.ended = false;
		}
	},
	computed:{
	
	}
})
/*点击事件的绑定：v-on:click="" 
 */