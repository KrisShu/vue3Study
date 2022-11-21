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
	<h2>姓名：{{name}}</h2>
	<h2>年龄：{{age}}</h2>
	<!-- toRef -->
	<!-- <h2>年龄：{{salary}}</h2> -->
	<!-- toRefs -->
	<h2>年龄：{{job.salary}}</h2>
</template>

<script>
import  { reactive, ref,toRefs} from 'vue'
import usePoint from '../hooks/usePoint'
export default {
	name: 'Demo',
	setup(){  
        let sum  = ref(0)
		function add (){
			sum.value ++
		}
		let point = usePoint()
		// 返回一个对象（常用）


		let person = reactive({
			name:'张三',
			age:28,

			job:{
				position:'项目经理',
				salary:30000
			}
		})
		return{
			sum,
			add,
			point,
			person,

			// name:toRef(person,'name'), //toRef(obj,key)
			// age:toRef(person,'age'),
			// salary:toRef(person.job,'salary')

			...toRefs(person) //toRefs返回的是一个对象,所以 ...扩展对象
		}


		
	}

	
}
</script>

<style>

</style>
