import  { reactive, onMounted, onBeforeUnmount } from 'vue'
export default function (){
    let point = reactive({
        x:0,
        y:0
    })
    function savePoint(event){
        point.x = event.pageX
        point.y = event.pageY
    }
    onMounted(()=>{
        window.addEventListener('click',function(event){
            // console.log(event.pageX,event.pageY)
            savePoint(event)
        })
    })
    
    onBeforeUnmount(()=>{
        window.removeEventListener('click',function(event){
            savePoint(event)
        })
    })

    return point
}
