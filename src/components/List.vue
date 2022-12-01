<template>
    <ul class="todo-main">
        <Item v-for="(todo,index) in todos" :index="index" :key="todo.id" :updateTodo="updateTodo" :deleteTodo="deleteTodo" :todo="todo" />
    </ul>
</template>

<script>
import { defineComponent } from 'vue';
import Item from './Item.vue'
export default defineComponent({
    name:'List',
    components:{
        Item
    },
    props:['todos','deleteTodo','updateTodo'],
    setup(){

    }
})
</script>

<style>
    .todo-main{
        margin-left: 0px;
        border: 1px solid #ddd;
        border-radius: 2px;
        padding: 0px;
    }
    .todo-empty{
        height: 40px;
        line-height: 40px;
        border:1px solid #ddd;
        border-radius: 2px;
        padding-left: 5px;
        margin-top: 10px;
    }
</style>