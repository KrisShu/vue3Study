<template>
   <li 
    @mouseenter="mouseHandler(true)"
    @mouseleave="mouseHandler(false)"
    :style="{backgroundColor:bgColor,color:fontColor}"
    >
        <label>
            <input type="checkbox" v-model="isCompleted" />
            <span>{{todo.title}}</span>
        </label>
        <button @click="delTodo()" class="btn btn-danger" :style="{display:display}">删除</button>
    </li>
</template>

<script>
import { defineComponent, ref ,computed } from 'vue';

export default defineComponent({
    name:'Item',
    props:{
        todo:{
            type:Object,
            required:true

        },
        index:{
            type:Number
        },
        deleteTodo:{
            type:Function,
            required:true
        },
        updateTodo:{
            type:Function,
            required:true

        }
    },
    setup(props){
        const bgColor = ref('white')
        const fontColor = ref('black')
        const display = ref('none')
        const mouseHandler = (flag)=>{
            if(flag){
                bgColor.value = 'pink'
                fontColor.value = 'white'
                display.value = 'block'

            }else{
                bgColor.value = 'white'
                fontColor.value = 'black'
                display.value = 'none'
            }
        }
        const delTodo = ()=>{
            props.deleteTodo(props.index)
        }

        const isCompleted = computed({
            get(){
                return props.todo.isCompleted
            },
            set(val){
                console.log("接收写入的值",val)
                props.updateTodo(props.todo,val)
            }
        })
        return{
            bgColor,
            fontColor,
            display,
            mouseHandler,
            delTodo,
            isCompleted
        }
    }
})
</script>

<style >
li{
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom:1px solid #ddd ;
}
li label{
    float: left;
    cursor: pointer;
}
li label li input{
    vertical-align: middle;
    margin-right:6px;
    position: relative;
    top: -1;

}
li button{
    float: right;
    display: none;
    margin-top: 3px;
}
li::before{
    content: initial;
}
li:last-child{
    border-bottom: none;
}

</style>