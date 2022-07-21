<template>
	<!-- Vue2中的html模板中必须要有一对根标签  Vue3组件中的html模板中可以没有根标签 -->
	<img alt="Vue logo" src="./assets/logo.png">
	<HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
	name: 'App',
	components: {
		HelloWorld
	}
}
</script>

<style>
	#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	}
</style>
