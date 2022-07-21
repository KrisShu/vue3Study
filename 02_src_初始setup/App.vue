<template>
	<h1>我是app组件</h1>
	<h2>姓名：{{name}}</h2>
	<h2>年龄：{{age}}</h2>
	<button @click="sayHello">点击</button>
</template>

<script>

export default {
	name: 'App',
	setup(){  
		/* 
		*注意
		*1.尽量不要与vue2配置混用
		*2.setup不能是一个async函数
		*/

		// 数据
		let name  = '张三'
		let age = 18

		// 方法
		function  sayHello(){
			console.log(`我叫${name},今年${age}岁`)
		}


		// 返回一个对象（常用）
		return{
			name,
			age,
			sayHello

		}

	}
}
</script>

<style>

</style>
