import BasicCard from "../card/basicCard";

const ItemList = ({productos}) => {
    return (
        <div className='row justify-content-around'>
        { productos.map((prod) => <BasicCard key={prod.id} {...prod}/>)}
      </div>
      );
    };

export default ItemList;
