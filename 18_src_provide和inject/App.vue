<template>
	<div class="app">
		<h3>我是APP组件（祖），{{name}} --{{price}}w</h3>
		<child></child>
	</div>
</template>

<script>
import { reactive,toRefs,provide } from 'vue-demi'
import child from './components/child.vue'

export default {
	components:{
		child
	},
	setup(){
		let car = reactive({
			name:'奔驰',
			price:40
		})

		provide('car',car) //给自己的后代组件传递数据
		
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