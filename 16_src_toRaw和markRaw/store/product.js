import {defineStore} from 'pinia';
import {getProducts} from '../api/shop'


//1.定义导出容器
// 参数1：第一个参数是应用程序中 store 的唯一 id
// 参数2：选项对象  
// 返回值：返回的是一个函数
export const useProductStore = defineStore('products',{
    state:() => {
        return {
            all :[]  //所有产品列表
        }
    },
    getters:{

    },
    actions :{
       async loadAllProducts () {
            const ret = await getProducts()
            this.all = ret
        },
        //库存减少
        reduceProduct(product){
            const productItem =  this.all.find( (item) =>{ 
                return item.id === product.id
            })
            if(productItem){
              productItem.inventory --
            }
         }
    }
})