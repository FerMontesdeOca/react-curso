import BasicCard from "../card/basicCard";
import "./ItemList.scss"

const ItemList = ({productos}) => {
    return (
        <div className='row justify-content-around' id="cardItem">
        { productos.map((prod) => <BasicCard key={prod.id} {...prod}/>)}
      </div>
      );
    };

export default ItemList;
