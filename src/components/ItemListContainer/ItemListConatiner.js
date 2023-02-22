import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { collection,getDocs,query,where } from "firebase/firestore";
import { db } from "../../firebase/config";


const ItemListConatiner = () => {
  const [productos, setProductos] = useState([]);
  const { categoryId } = useParams();
  // console.log(categoryId);
  useEffect(() => {
      
    //Referencia
    const productosRef = collection(db, "productos");
    const q = categoryId ? query( productosRef,where("category", "==", categoryId) ) : productosRef;
    
    //Peticion Asincronica
    getDocs(q)
      .then((resp) =>{
          setProductos( resp.docs.map((doc)=> {
              return {
                ...doc.data(), 
                id: doc.id
              }
          }) )
  
      })

  }, [categoryId]);

  return (
    <div className="container my-5">
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListConatiner;
