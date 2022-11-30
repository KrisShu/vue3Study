<template>
	<div class="son">
		<h3>我是son组件（孙）,{{car.name}} -- {{car.price}}w</h3>
	</div>
</template>

<script>
import { inject } from 'vue';
export default {
    setup(){
       let car = inject('car')
       console.log("son组件接收car",car)
       return{
            car
       }
    }
}
</script>

<style>
	.son{
		background-color: peachpuff;
		padding: 10px;
	}

</style>