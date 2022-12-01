<template>
	<div class="todo-container">
		<div class="todo-wrap">
			<Header :addTodo="addTodo"/>
			<List :updateTodo="updateTodo" :deleteTodo="deleteTodo" :todos="todos" />
			<Footer :clearIsCompleted="clearIsCompleted" :checkAll="checkAll" :todos="todos"/>
			<!-- <Footer @clearAll="clearIsCompleted"  :checkAll="checkAll" :todos="todos"/> -->
		</div>
	</div>
</template>

<script>
import {defineComponent, reactive,toRefs} from 'vue'
import Header from './components/header.vue'
import List from './components/List.vue'
import Footer from './components/Footer.vue'
export default defineComponent({
	name:'App',
	components:{
		Header,
		List,
		Footer
	},
	setup(){
		const state =reactive({
			todos:[
				{
					id:1,
					title:'奔驰',
					isCompleted:false
				},
				{
					id:2,
					title:'宝马',
					isCompleted:true
				},
				{
					id:3,
					title:'奥迪',
					isCompleted:false
				}
			]
		})

		const addTodo = (todo)=>{
			state.todos.unshift(todo)
		}

		const deleteTodo = (index)=>{
			state.todos.splice(index,1)
		}

		const updateTodo = (todo,isCompleted)=>{
			todo.isCompleted = isCompleted
		}
		
		// 全选
		const checkAll = (isCompleted)=>{
			for(let arr of state.todos){
				arr.isCompleted = isCompleted
			}
		}

		// 清除已完成的任务

		const clearIsCompleted = ()=>{
			state.todos = state.todos.filter(item => !item.isCompleted)
		}

		
		return{
			...toRefs(state),
			addTodo,
			deleteTodo,
			updateTodo,
			checkAll,
			clearIsCompleted
		}
	}
})
</script>

<style>
.todo-container{
	width: 600px;
	margin: 0 auto;
}
.todo-container .todo-wrap{
	padding: 10px;
	border: 1px solid #ddd;
	border-radius: 5px;
}
</style>