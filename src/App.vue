<template>
	<h1>我是app组件</h1><h1>我是app组件</h1>
	<h2>姓名：{{name}}</h2>
	<h2>年龄：{{age}}</h2>
	<h3>工种：{{job.type}}</h3>
	<h3>薪资：{{job.salary}}</h3>
	<h3>爱好：{{hobby}}</h3>
	<button @click="changeInfo">修改信息</button>
	
	
	
</template>

<script>
import  {ref,reactive} from 'vue'
export default {
	name: 'App',
	setup(){  
		

		// 数据
		let name  = ref('张三')
		let age =  ref(18)

		//ref 响应式处理对象类型的数  求助了reactive函数
		/* let job = ref({
			type:'前端',
			salary:'10k'
		}) */

		// reactive 处理对象类型的数据
		let job = reactive({
			type:'前端',
			salary:'10k'
		})

		let hobby = reactive(['看书','逛街'])
		
		// 方法
		function  changeInfo(){
			// 基本类型数据改变
			name.value = '李四'
			age.value = 20

			//ref  对象类型数据的改变
			/* job.value.type = 'UI'
			job.value.salary = '20K' */

			// reactive 对象类型数据的改变
			job.type = 'UI'
			job.salary = '20K'
			hobby[0] = '打游戏'


		}

		// 返回一个对象（常用）
		return{
			name,
			age,
			job,
			hobby,
			changeInfo
		}

	


	}
}
</script>

<style>

</style>
