import { useEffect, useState } from "react"
import { pedirItemPorId } from "../helpers/helpers"
import ItemDetail from "../ItemDetail/ItemDetail"




const ItemdetailConatiner =({itemId})=>{

    const [item, setItem] = useState(null)

    useEffect(()=> {
        pedirItemPorId(itemId)
         .then((data =>{
            setItem(data)
         }))
         .catch((error)=>{
            console.log(error)
         })
    }, [itemId])

return(
    <div className="container my-5">
        {
            item && 
            <ItemDetail {...item}/>
        }
    </div>
)

}



export default ItemdetailConatiner
