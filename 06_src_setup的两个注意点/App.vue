<template>
	<Demo @hello="reception" msg="我是父组件传过来的1" msg2="我是父组件传过来的2">
		<template v-slot:qwe>
			<span>我是插槽qwe</span>
		</template>
		<template v-slot:asd>
			<span>我是插槽asd</span>
		</template>
	</Demo>
</template>

<script>
import Demo from './components/Demo.vue'
export default {
	name: 'App',
	components:{
		Demo
	},
	setup(){
		function reception(str){
			console.log("我在这里接收子组件抛出来的值",str)
		}
		return{
			reception
		}
	}
}
</script>

<style>

</style>
