<template>
  <div>
    <button @click="isshow = true">点击打开弹窗</button>
    <!-- to的属性可以是任何css选择器属性 # . -->
    <!-- <Teleport to="#id">
    <Teleport to=".id"> -->
    <Teleport to="body">
        <div v-if="isshow" class="mask">
            <div class="container">
                <p class="title">标题</p>
                <p class="content">内容</p>
                <button @click="isshow = false">关闭弹窗</button>
            </div>
        </div>
    </Teleport>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
    setup(){
        let isshow = ref(false)
        return{
            isshow
        }
    }
}
</script>

<style>
.mask{
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.2);
    position: fixed;
    top:0;
    left: 0;

}
.container{
    width: 300px;
    height: 300px;
    background: plum;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
</style>