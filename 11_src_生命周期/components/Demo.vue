<template>
	<h2>当前求和：{{sum}}</h2>
	<button @click="add">点我+1</button>

</template>

<script>
import  { ref} from 'vue'
export default {
	name: 'Demo',
	setup(){  
        let sum  = ref(0)
		function add (){
			sum.value ++
		}
		// 返回一个对象（常用）
		return{
			sum,
			add
		}
	},
	// #region
	// 生命周期
	/* breforeCreate(){
		console.log("---breforeCreate---")
	},
	created(){
		console.log("---created---")
	},
	beforeMount(){
		console.log("---beforeMount---")
	},
	mounted(){
		console.log("---mounted---")
	},
	beforeUpdate(){
		console.log("---beforeUpdate---");
	},
	updated(){
		console.log("---updated---");
	},
	// 有变化的  beforeDestory  destroyed 被更改了
	beforeUnmount(){
		console.log("---beforeUnmount---");
	},
	unmounted(){
		console.log("---unmounted---");
	} */
	// #endregion

	
}
</script>

<style>

</style>
