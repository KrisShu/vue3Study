<template>
	<h1>我是app组件</h1>
	<h2>姓名：{{name}}</h2>
	<h2>年龄：{{age}}</h2>
	<h3>工种：{{job.type}}</h3>
	<h3>薪资：{{job.salary}}</h3>
	<button @click="changeInfo">修改信息</button>
	
	
</template>

<script>
import  {ref} from 'vue'
export default {
	name: 'App',
	setup(){  
		

		// 数据
		let name  = ref('张三')
		let age =  ref(18)
		let job = ref({
			type:'前端',
			salary:'10k'
		})
		// 方法
		function  changeInfo(){
			// 基本类型数据改变
			name.value = '李四'
			age.value = 20

			// 引用类型数据的改变
			job.value.type = 'UI'
			job.value.salary = '20K'


		}

		// 返回一个对象（常用）
		return{
			name,
			age,
			job,
			changeInfo
		}

	}
}
</script>

<style>

</style>
