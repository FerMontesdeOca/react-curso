import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../firebase/config"
import { useEffect, useState } from "react"

// querys = [
//     where, limit
// ]
const useCollection = (col, dependencies = [], querys = null) => {
    
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    // const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        // 1.- referencia
        const collectionRef = collection(db, col)
        const q = querys
                    ? query(collectionRef, ...querys )
                    : collectionRef
        // 2.- peticion asincronica
        getDocs(q)
            .then((resp) => {
                
                setData( resp.docs.map((doc) => {
                    return {
                        ...doc.data(),
                        id: doc.id
                    }
                }))
            })
            .finally(() => {
                setLoading(false)
            })

    }, dependencies)


    return {
        data,
        loading
    }
}

export default useCollection
