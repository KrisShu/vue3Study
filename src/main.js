//程序的主入口文件

//引入的是一个名为createApp的工厂函数 
import { createApp } from 'vue'
// 引入所有组件
import App from './App.vue'
import { createPinia } from 'pinia'

const app  = createApp(App)

// 创建pinia实例
const pinia = createPinia();
// 挂载到 vue 实例
app.use(pinia)
app.mount('#app')
