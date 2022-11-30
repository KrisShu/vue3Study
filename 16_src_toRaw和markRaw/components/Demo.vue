<template>
	<h2>当前求和：{{sum}}</h2>
	<button @click="sum++">点我+1</button>

	<hr>

	<h2>姓名：{{name}}</h2>
	<h2>年龄：{{age}}</h2>
	<h2>薪资：{{job.salary}}</h2>
	<h3>车：{{person.car}}</h3>
	<button @click="name+='~'">点击修改姓名</button>
	<button @click="age++">点击修改年龄</button>
	<button @click="job.salary++">点击修改薪资</button>
	<button @click="showRowData">点击输出原始数据</button>
	<button @click="addCar">点击添加一辆车</button>
	

	
</template>

<script>
import  { reactive, ref, toRaw, toRefs,markRaw} from 'vue'
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
		
		function showRowData(){ 
			//toRaw  将一个reactive生成的响应式对象转为普通对象
			let p = toRaw(person)
			p.age++
			console.log("p",p)
		}


		function addCar(){
			let car ={
				name:'bmw',
				price:'40w'
			} 
			// person.car = car
			// markRaw标记一个对象，使其永远不会再成为响应式对象
			person.car = markRaw(car)

		}
		return{
			sum,
			person,
			...toRefs(person),
			showRowData,
			addCar
			
		}


		
	}

	
}
</script>

<style>

</style>
