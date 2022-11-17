<template>
	<button @click="add">点我修改</button>
	<hr>
	<h3>正常使用</h3>
	<h2>pinia:{{MainStore.count}}</h2>
	<h2>{{MainStore.text}}</h2>
	<h2>{{MainStore.arr}}</h2>
	<h2>{{MainStore.count10}}</h2>
	<hr>
	<h2>pinia:{{count}}</h2>
	<h2>{{text}}</h2>
	<hr>
	<h3></h3>

</template>

<script>
import  { ref} from 'vue'
import { useMainStore } from '../store'
import { storeToRefs } from 'pinia'
export default {
	name: 'Demo',
	setup(){  
		const MainStore = useMainStore()
		console.log("11111",MainStore.count)
		
		// 普通解构  数据有问题  数据不是响应式
		// let { count } = MainStore

		// 解决方式，使用storeToRefs
		let { count , text } = storeToRefs(MainStore) 

        let sum  = ref(0)
		function add (){
			// 方式一
			// MainStore.count++

			// 方式二 : 如果需要修改多个数据，建议使用$patch 批量更新
			// MainStore.$patch({
			// 	count:MainStore.count + 1,
			// 	text:'halo',
			// 	arr:[...MainStore.arr,4]
			// })

			// 方式三:更好的批量更新的方式
			// MainStore.$patch(state =>{
			// 	state.count++
			// 	state.text = 'halo'
			// 	state.arr.push(4)
			// })

			
			// 方式四：逻辑比较多的时候可以封装到actions 做处理

			//可以传参
			MainStore.changeState(10);
			
		}
		// 返回一个对象（常用）
		return{
			sum,
			add,
			MainStore,
			count,
			text
		}
	},	
}
</script>

<style>

</style>
