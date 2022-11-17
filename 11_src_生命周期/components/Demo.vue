<template>
	<h2>当前求和：{{sum}}</h2>
	<button @click="add">点我+1</button>

</template>

<script>
import  { ref,onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted } from 'vue'
export default {
	name: 'Demo',
	setup(){  
        let sum  = ref(0)
		function add (){
			sum.value ++
		}
		//通过组合式api形式的生命周期
		//vue3没有 breforeCreate 和 created 组合式api两个生命周期了  ;配置项可以
		console.log("-----setup-----")
		onBeforeMount(()=>{
			console.log("------onBeforeMount-----")
		})
		onMounted(()=>{
			console.log("------onMounted-----")
		})
		onBeforeUpdate(()=>{
			console.log("------onBeforeUpdate-----")
		})
		onUpdated(()=>{
			console.log("------onUpdated-----")
		})
		onBeforeUnmount(()=>{
			console.log("------onBeforeUnmount-----")
		})
		onUnmounted(()=>{
			console.log("------onUnmounted-----")
		})


		// 返回一个对象（常用）
		return{
			sum,
			add
		}


		
	},
	// #region
	// 配置项生命周期
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
