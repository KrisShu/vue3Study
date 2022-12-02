<template>
    <div class="todo-header">
        <input @keyup.enter="add"  v-model="title" type="text" placeholder="请输入您的任务名称，按回车键确认" />
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
    name:'Header',
    props:{
        addTodo:{
            type:Function,
            required:true
        }
    },
    setup(props){ 
        //setup的参数  第一个props  接收组件的传参
        
        const title = ref('')

        const add = ()=>{
            const text = title.value
            if(!text.trim()) return
            const todoObj = {
                id:Date.now,
                title:text,
                isCompleted:false
            }
            props.addTodo(todoObj)
            title.value = ''
        }
        return{
            title,
            add
        }
    }
})
</script>

<style>
    .todo-header input{
            width: 560px;
            height: 28px;
            font-size: 14px;
            border: 1px solid #ccc;
            border-radius: 4px;
            padding: 4px 7px;
    }
    .todo-header input:focus{
        outline: none;
        border-color: rgba(82,168,236,0.8);
        box-shadow: inset 0 1px 1px rgba(0,0,0,0.075),0 0 8px rgba(82,168,236,0.6);
    }
</style>