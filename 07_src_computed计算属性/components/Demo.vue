<template>
	<h1>一个人的姓名</h1>
	姓：<input v-model="person.fisrtname" type="text">
   <br/>
	名：<input v-model="person.secondName" type="text">
     <br/>
	全名：<input v-model="person.fullName" type="text">
    
</template>

<script>
import  {computed, reactive} from 'vue'
export default {
	name: 'Demo',
   
	setup(){  
        

		// 数据
		let person  = reactive({
			fisrtname:'张',
			secondName:'三'
		})

        // 计算属性 - 简写
        /* person.fullName  = computed(()=>{
            return person.fisrtname + person.secondName
        }) */

        // 计算属性 - 完整属性  可以读写
        person.fullName  = computed({
            get(){
                return person.fisrtname + person.secondName
            },
            set(val){
                console.log("接收写入的值",val)

            }
        })



        

		// 返回一个对象（常用）
		return{
			person
		}
	}
}
</script>

<style>

</style>
