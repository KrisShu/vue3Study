import {defineStore} from 'pinia';
import { useProductStore } from './product';
import {buyProducts} from '../api/shop'
export const useCartStore = defineStore('cart',{
    state:()=>{
        return{
            cartProducts:[] ,//购物车的数据列表
            checkoutStatus: null 
        }
    },
    getters:{
        totalPrice(state){
            return state.cartProducts.reduce((total,cur)=>{
                return total + cur.price * cur.quantity
            },0)
        }
    },
    actions:{
        addProductToCart(product){ //product接收的产品
            console.log("添加购物车",product)
            /* 
                看该商品是否存在库存
                存在  检测购物车中是否已有该商品
                如果有  则商品数量+1
                没有  在购物车列表新增该商品
            */

            //看该商品是否存在库存
           if(product.inventory < 1){
                return
           }
           // 检测购物车中是否已有该商品
           const cartItem =  this.cartProducts.find(item => item.id === product.id)
           if(cartItem){ 
            // 如果有  则商品数量+1
            cartItem.quantity++
           }else{
            //没有  在购物车列表新增该商品
            this.cartProducts.push({
                id:product.id,
                title:product.title,
                price:product.price,
                quantity:1 
            })
           }
           //减少库存
           const productStore = useProductStore()
           productStore.reduceProduct(product)
        },
        //结算

        async checkout(){
            let ret = await buyProducts()
            this.checkoutStatus = ret ? '成功' :'失败'
            if(ret){
                this.cartProducts = []
            }
        }
    }
})