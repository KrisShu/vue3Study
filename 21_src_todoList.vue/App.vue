<template>
	<div class="todo-container">
		<div class="todo-wrap">
			<Header :addTodo="addTodo"/>
			<List :updateTodo="updateTodo" :deleteTodo="deleteTodo" :todos="todos" />
			<Footer :clearAll="clearAll" :checkAll="checkAll" :todos="todos"/>
			<!-- <Footer @clearAll="clearIsCompleted"  :checkAll="checkAll" :todos="todos"/> -->
		</div>
	</div>
</template>

<script>
import {defineComponent, reactive,toRefs,watch ,onMounted} from 'vue'
import Header from './components/header.vue'
import List from './components/List.vue'
import Footer from './components/Footer.vue'
import {saveTodos , readTodos} from './Utils/localStorage'
export default defineComponent({
	name:'App',
	components:{
		Header,
		List,
		Footer
	},
	setup(){
		const state =reactive({
			todos:[]
		})

		onMounted(()=>{
			setTimeout(()=>{
				state.todos = readTodos()
			},1000)

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

		const clearAll = ()=>{
			state.todos = state.todos.filter(item => !item.isCompleted)
		}

		watch(()=>state.todos,(newval,oldval)=>{
			console.log("todos的变化",newval,oldval)
			saveTodos(newval)
		},{deep:true})
		
		return{
			...toRefs(state),
			addTodo,
			deleteTodo,
			updateTodo,
			checkAll,
			clearAll
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