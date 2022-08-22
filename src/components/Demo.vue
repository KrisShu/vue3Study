<template>
	<h2>当前求和：{{sum}}</h2>
	<button @click="add">点我+1</button>
    <h2>当前文字：{{msg}}</h2>
	<button @click="update">点我加！</button>
	<h2>姓名：{{person.name}}</h2>
	<h2>年龄：{{person.age}}</h2>
	<h2>薪资：{{person.job.salary}}</h2>
	<button @click="person.name+='~'">点击修改姓名</button>
	<button @click="person.age++">点击修改年龄</button>
	<button @click="person.job.salary++">点击修改薪资</button>

</template>

<script>
import  { ref,reactive,watch} from 'vue'
export default {
	name: 'Demo',
   
	setup(){  
        let sum  = ref(0)
		function add (){
			sum.value ++
		}

		// 情况1：监视ref单个数据
		/* watch(sum,(newval,oldval)=>{
			console.log("sum的变化",newval,oldval)
		},{immediate:true}) */


		let msg  = ref('你好啊')

		function update(){
			msg.value = msg.value + '!'
		}

		// 情况2：监视ref多个数据
		// watch([sum,msg],(newval,oldval)=>{
		// 	console.log("sum和msg的变化",newval,oldval)
		// },{immediate:true})



		let person = reactive({
			name:'张三',
			age:18,
			job:{
				salary:20	
			}
		})
		/* 情况3 :监视reactive所定义的一个响应式数据（
			1注意：此处无法正确的获取oldvalue）
			2注意：强制开启了深度监视(deep:true)
		*/
		// watch(person,(newval,oldval)=>{
		// 	console.log("person的变化",newval,oldval)
		// })


		// 情况4:监视reactive所定义的一个响应式数据里的某一个属性

		/* watch(()=>person.age,(newval,oldval)=>{
			console.log("person的变化",newval,oldval)
		}) */

		// 情况5:监视reactive所定义的一个响应式数据里的某些属性
		// watch([()=>person.age,()=>person.name],(newval,oldval)=>{
		// 	console.log("person的变化",newval,oldval)
		// })


		// 特殊情况
		watch(()=>person.job,(newval,oldval)=>{
			console.log("person的变化",newval,oldval)
		},{deep:true})

		
		
		// 返回一个对象（常用）
		return{
			sum,
			add,
			msg,
			update,
			person
			

		}
	}
}
</script>

<style>

</style>
