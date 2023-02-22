import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../firebase/config"


const ItemDetailConatiner =()=>{

    const [item, setItem] = useState(null)
    const {itemId}= useParams();

    useEffect(()=> {
       //Referencia
       const docRef = doc(db, "productos", itemId);

       //Peticion Async
       getDoc(docRef)
        .then(doc => {
            setItem({...doc.data(), id: doc.id})
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
