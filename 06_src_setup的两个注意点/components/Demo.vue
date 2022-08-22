<template>
	<h1>我是app组件</h1><h1>我是app组件</h1>
	<h2>姓名：{{person.name}}</h2>
	<h2>年龄：{{person.age}}</h2>
    <button @click="test">点击按钮</button>
</template>

<script>
import  {reactive} from 'vue'
export default {
	name: 'Demo',
    props:['msg','msg2'],
    emits:['hello'],
	setup(props,context){  
        // setup的执行时机  在beforeCreate之前执行一次，this是undefined
		
        // setup的参数  第一个props  接收组件的传参
        console.log("props",props)

        // setup的参数 第二context   context.attrs context.emit context.slots
        console.log("context",context)

		// 数据
		let person  = reactive({
			name:'张三',
			age:18
		})

        function test(){
            // 子组件向外抛出一个值
            context.emit('hello','我是子组件抛出来的值test')
        }

		// 返回一个对象（常用）
		return{
			person,
            test
		}
	}
}
</script>

<style>

</style>
