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
import  { ref,reactive,watchEffect} from 'vue'
export default {
	name: 'Demo',
   
	setup(){  
        let sum  = ref(0)
		let person = reactive({
			name:'张三',
			age:18,
			job:{
				salary:20	
			}
		})

		// 不用指明监视那个属性，监视的回调中用到那个属性，那就监视哪个属性
		watchEffect(()=>{
			console.log("watchEffect所指定的回调执行了")
		})


		function add (){
			sum.value ++
		}
		let msg  = ref('你好啊')

		function update(){
			msg.value = msg.value + '!'
		}

		

	
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
