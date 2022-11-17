<template>
  <ul>
    <li v-for="(arr,index) in productStore.all" :key="index">
        {{arr.title}} - {{arr.price}}
        <br/>
        <button :disabled="!arr.inventory" @click="cartStore.addProductToCart(arr)">添加到购物车</button>
    </li>
  </ul>
</template>

<script setup>

 import {useProductStore} from '../store/product'
  import {useCartStore} from '../store/cart'

 const productStore = useProductStore()

  const cartStore = useCartStore()
//加载所有数据
 productStore.loadAllProducts()
</script>

<style>

</style>