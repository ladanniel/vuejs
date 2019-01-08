//实例化vue对象 
new Vue({
	el:"#vue-app",
	data:{
		age:30,
		x:0,
		y:0
	},
	methods:{
		add:function(increment){
			this.age +=increment;
		},
		substract:function(decrement){
			this.age -=decrement;
		},
		updateXY:function(event){
			//查看所有event事件有哪些类型
			/* console.log(event); */
			this.x = event.offsetX;
			this.y = event.offsetY;
		},
		stopMoving:function(event){
			event.stopPropagation();
		},
		alert:function(){
			alert("hello word")
		}
	}
})
/*点击事件的绑定：v-on:click="" 
 */