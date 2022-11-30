<template>
	<div class="child">
		<h3>我是child组件（子）</h3>
        <son></son>
	</div>
</template>

<script>
import son from './son.vue'
export default {
    components:{
        son
    }

}
</script>

<style>
	.child{
		background-color: paleturquoise;
		padding: 10px;
	}

</style>