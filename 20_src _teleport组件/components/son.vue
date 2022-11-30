<template>
	<div class="son">
		<h3>我是son组件（孙）</h3>
        <Dialog></Dialog>
	</div>
</template>

<script>
import Dialog from './Dialog.vue'
export default {
    components:{
        Dialog
    }
   
}
</script>

<style>
	.son{
		background-color: peachpuff;
		padding: 10px;
	}

</style>