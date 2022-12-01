<template>
    <div class="todo-footer">
        <label>
            <input type="checkbox" v-model="isCheckAll">
        </label>
        <span>
            <span>
                已完成{{count}}
            </span>
            /全部{{todos.length}}
        </span>
        <button @click="checkAllHandler" class="btn btn-danger">清除已完成任务</button>
    </div>
</template>

<script>
import { computed, defineComponent } from 'vue';
export default defineComponent({
    name:'Footer',
    props:{
        todos:{
            type:Array,
            required:true
        },
        checkAll:{
            type:Function,
            required:true
        },
        clearAll:{
            type:Function,
            required:true
        }
    },
    // setup(props,context){ 
        // setup的参数  第一个props  接收组件的传参
        // setup的参数 第二context   context.attrs context.emit context.slots
    setup(props){
        // 计算已完成
        const count = computed(()=>{
            let arr = props.todos.filter(item => item.isCompleted)
            return arr.length
        })

        // 计算是否全选
        const isCheckAll = computed({
            get(){
                return count.value === props.todos.length && count.value>0 
            },
            set(val){
                props.checkAll(val)
            }
        })
        

        // 清除已完成任务
        const checkAllHandler = ()=>{
            // 方法一：props传参方式  父传子
            props.clearAll()

            // 方法二： context向外抛方式  子传父
            // context.emit('clearAll')


        }
        return{
            count,
            checkAllHandler,
            isCheckAll
        }
    }
})
</script>

<style >
.todo-footer{
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
}
.todo-footer label{
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
}
.todo-footer label input{
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
}
.todo-footer button{
    float:right;
    margin-top: 5px;
}
</style>