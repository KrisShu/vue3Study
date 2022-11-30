<template>
	<div class="app">
		<h3>我是APP组件（祖），{{name}} --{{price}}w</h3>
		
	</div>
</template>

<script>
import { isProxy, isReactive, isReadonly, isRef, reactive,readonly,ref,toRefs } from 'vue-demi'

export default {
	
	setup(){
		let car = reactive({
			name:'奔驰',
			price:40
		})
		let num = ref(0)
		let car2 = readonly(car)

		console.log("isReactive",isReactive(car))
		console.log("isRef",isRef(num))
		console.log("isReadOnly",isReadonly(car2))

		console.log("isproxy1",isProxy(car))
		console.log("isproxy2",isProxy(num))
		console.log("isproxy3",isProxy(car2))
	

		return{
			...toRefs(car)
		}
	}
}
</script>

<style>
	.app{
		background-color: pink;
		padding: 10px;
	}

</style>