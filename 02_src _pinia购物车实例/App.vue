<template>
	<h1>Pinia - 购物车实例</h1>
	<hr />
	<h2>商品列表</h2>
	<ProductList />
	<hr />
	<ShoppingCart />
</template>
<!--setup  简写  -->
<script setup>
// vue3引入组件可以不祖册？
import ProductList from './components/ProductList.vue'
import ShoppingCart from './components/ShoppingCart.vue'

</script>

<style>

</style>
