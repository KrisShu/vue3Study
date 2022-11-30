<template>
	<div class="app">
		<h3>我是APP组件（祖）</h3>
		<child></child>
	</div>
</template>

<script>
import child from './components/child.vue'

export default {
	components:{
		child
	},
	
}
</script>

<style>
	.app{
		background-color: pink;
		padding: 10px;
	}

</style>