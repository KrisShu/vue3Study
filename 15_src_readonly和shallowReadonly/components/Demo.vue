<template>
	<h2>当前求和：{{sum}}</h2>
	<button @click="sum++">点我+1</button>

	<hr>
	<!-- ssssssssssssssssssssssssssssss -->

	<h2>姓名：{{name}}</h2>
	<h2>年龄：{{age}}</h2>
	<h2>薪资：{{job.salary}}</h2>
	<button @click="name+='~'">点击修改姓名</button>
	<button @click="age++">点击修改年龄</button>
	<button @click="job.salary++">点击修改薪资</button>
	

	
</template>

<script>
import  { reactive, readonly, ref, toRefs,} from 'vue'
export default {
	name: 'Demo',
	setup(){  
        let sum  = ref(0)
		let person = reactive({
			name:'张三',
			age:28,

			job:{
				position:'项目经理',
				salary:30000
			}
		})
		// person = readonly(person)
		// person = shallowReadonly(person)
		// sum = shallowReadonly(sum)
		sum = readonly(sum)
		return{
			sum,
			...toRefs(person),
			
			
		}


		
	}

	
}
</script>

<style>

</style>
