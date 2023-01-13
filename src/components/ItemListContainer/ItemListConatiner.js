import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BasicCard from "../card/basicCard";
import { pedirDatos } from "../helpers/helpers";

const ItemListConatiner = () => {
  const [productos, setProductos] = useState([]);
  const { categoryId } = useParams();
  console.log(categoryId);
  useEffect(() => {
    pedirDatos()
      .then((res) => {
        if (categoryId) {
          setProductos(res.filter((prod) => prod.category === categoryId));
        } else {
          setProductos(res);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [categoryId]);

  return (
    <div className="container my-5">
      <BasicCard productos={productos} />
    </div>
  );
};

export default ItemListConatiner;
