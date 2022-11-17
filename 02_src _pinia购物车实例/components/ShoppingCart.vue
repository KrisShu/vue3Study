<template>
  <div class="cart">
    <h2>您的购物车</h2>
    <p>
        <i>请添加一些商品到购物车</i>
    </p>
    <ul>
        <li v-for="(arr,index) in CartStore.cartProducts" :key="index">
            {{arr.title}} - {{arr.price}} x {{arr.quantity}}
        </li>
    </ul>
    <p>商品总价：{{CartStore.totalPrice}}</p>
    <p>
        <button @click="CartStore.checkout">结算</button>
    </p>
    <p>结算{{CartStore.checkoutStatus}}</p>
  </div>
</template>

<script setup>
    import {useCartStore} from '../store/cart'
    const CartStore = useCartStore()
</script>

<style>

</style>