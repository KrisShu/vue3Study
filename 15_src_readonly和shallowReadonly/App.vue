<template>
	<button @click=" isshow = !isshow ">点击显示/隐藏</button>
	<Demo v-if="isshow"></Demo>
</template>
<!-- sdddddd -->
<script>
import  { ref} from 'vue'
import Demo from './components/Demo.vue'
export default {
	name: 'App',
	components:{
		Demo
	},
	setup(){
		let isshow = ref(true)
		return{
			isshow
		}
	}
}
</script>

<style>

</style>
