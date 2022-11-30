
export const products =[
    {id:1,title:'ipad 4 mini',price:500.01,inventory:2},
    {id:2,title:'H&M T-shirt white',price:10.99,inventory:10},
    {id:3,title:'CD ',price:19.99,inventory:5}
]

export const getProducts = async ()=>{
    await wait(100)
    return products
}

export const buyProducts = async ()=>{
    await wait(100)
    return Math.random() > 0.5
}

async function wait(delay){
    return new Promise((resolve)=> setTimeout(resolve,delay))
}