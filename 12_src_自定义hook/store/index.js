import {defineStore} from 'pinia';
//1.定义导出容器
// 参数1：第一个参数是应用程序中 store 的唯一 id
// 参数2：选项对象  
// 返回值：返回的是一个函数
export const useMainStore = defineStore('main',{
    /**
     * 
     * 类似于组件的data，用来存储全局状态的
     * 1.必须是函数：这样是为了在服务端渲染的时候避免交叉请求导致的数据状态污染
     * 2.必须是箭头函数，这里是为了更好的Ts类型推导
     */
    
    state:() => {
        return {
            count:100,
            text:'hello',
            arr:[1,2,3]
        }   
    },
    /**
     * 类似于组件的computed，用来封装计算属性,有缓存的功能
     */
    getters: {
        //函数接收一个可选参数：state 状态对象
        
       /*  count10(state){
            return state.count + 10
        } */

        count10(){
            return this.count +10
        }

    },
    /**
     * 类似于组件的methods，封装业务逻辑，修改state
     */
    actions: {
        //注意：不能使用箭头函数定义action，因为箭头函数绑定外部this
        changeState(num){//接收参数 
            this.count += num
            this.text = 'halo'
            this.arr.push(num)

            //这里也可以使用
            // this.$patch(state => {})
        }
    }
})
// 2.使用容器中的state
//3.修改state
//4.容器中的action的使用