//object表示一个js对象
let a4 : object
a4 = {}
a4 = function (){

}

//在属性名后边加上 ？表示属性是可选的
let b4 : {name : string,age ?: number}
b4 = {name:'名字',age:18}

//[propName : string]:any表示任意类型的属性
let c4 : {name : string ,[propName : string]:any};
c4 = {name:'名字',age:18,gender:'男'}


/* 
*设置函数结构声明
* 语法 ： (形参:类型,形参:类型,...) => 返回值
*/
let d4 :(a:number,b:number)=>number