import { useEffect, useState } from "react"
import { pedirItemPorId } from "../helpers/helpers"
import ItemDetail from "../ItemDetail/ItemDetail"




const ItemDetailConatiner =()=>{

    const [item, setItem] = useState()

    useEffect(()=> {
        pedirItemPorId()
         .then((data =>{
            setItem(data)
         }))
    }, [])

return(
    <div className="container my-5">
        {
            item && <ItemDetail {...item}/>
        }
    </div>
)

}



export default ItemDetailConatiner
