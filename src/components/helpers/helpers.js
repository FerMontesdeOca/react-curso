import stock from "../data/inventario.json"

export const pedirDatos =() =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(stock)
        },500)
    })
}

export const pedirItemPorId =(id) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const item = stock.find((element)=> element.id === id)
            resolve(item)
        },500)
    })
}