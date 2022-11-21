<template>
	<h2>当前求和：{{sum}}</h2>
	<button @click="add">点我+1</button>

	<hr>

	<h2>姓名：{{person.name}}</h2>
	<h2>年龄：{{person.age}}</h2>
	<h2>薪资：{{person.job.salary}}</h2>
	<button @click="person.name+='~'">点击修改姓名</button>
	<button @click="person.age++">点击修改年龄</button>
	<button @click="person.job.salary++">点击修改薪资</button>
	
	<hr>
	<h2>数字：{{x}}</h2>
	<!-- <button @click="x++">点我+1</button> -->
	<button @click="x = {y:888}">点我替换x</button>
	
</template>

<script>
import  { reactive, ref, shallowRef,} from 'vue'
export default {
	name: 'Demo',
	setup(){  
        let sum  = ref(0)
		function add (){
			sum.value ++
		}
	

		// let person =  shallowReactive({})  //只考虑一层的数据响应式

		let person = reactive({
			name:'张三',
			age:28,

			job:{
				position:'项目经理',
				salary:30000
			}
		})
		// let x = ref(0)
		let x = shallowRef({
			y:0
		})
		return{
			sum,
			add,
			person,
			x
			
		}


		
	}

	
}
</script>

<style>

</style>
