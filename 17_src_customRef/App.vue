<template>
	<input type="text" v-model="keyword">
	<h3>{{keyword}}</h3>
</template>

<script>
import  { customRef} from 'vue'

export default {
	name: 'App',
	
	setup(){
		//自定义ref---名为myref
		function myref(val,delay){
			console.log("----myref-----",val)
			return customRef((track,trigger)=>{
				let timer
				return {
					get(){
						console.log(`有人从myref这个容器中读取数据了，我把${val}给他了`)
						track()//通知vue追踪val的变化
						return val
					},
					set(newval){
						console.log(`有人从myref这个容器中数据改为${newval}了`)
						
						// val = newval
						// trigger()//通知vue去重新解析模板


						clearTimeout(timer)
						// 延迟更新数据,防抖
						timer = setTimeout(() => {
							val = newval
							trigger()//通知vue去重新解析模板
						}, delay);
					}
				}
			})

		}
		// let keyword = ref('hello')
		let keyword = myref('hello',500)
		return{
			keyword
		}
	}
}
</script>

<style>

</style>
