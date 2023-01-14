import AddTocart from "../addToCart/addToCart";
import CardMedia from '@mui/material/CardMedia';

const ItemDetail = ({ id, brand, Description, price }) => {
  return (
    <div>
      <CardMedia
        component="img"
        height="150"
        src={`../assets/Pcs/${id}.jpg`}
        alt="green iguana"
      />
      <h2>{brand}</h2>
      <p>{Description}</p>
      <p>${price}</p>
      <AddTocart/>
    </div>
  );
};

export default ItemDetail;
