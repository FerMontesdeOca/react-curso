import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { pedirItemPorId } from "../helpers/helpers"
import ItemDetail from "../ItemDetail/ItemDetail"




const ItemDetailConatiner =()=>{

    const [item, setItem] = useState(null)
    const {itemId}= useParams();

    useEffect(()=> {
        pedirItemPorId(Number(itemId))
         .then((data =>{
            setItem(data)
         }))
         .catch((error)=>{
            console.log(error)
         })
    }, [itemId])

return(
    <div className="ms-5 me-5">
        {
            item && 
            <ItemDetail {...item}/>
        }
    </div>
)

}



export default ItemDetailConatiner
