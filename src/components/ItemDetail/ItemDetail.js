import AddTocart from "../addToCart/addToCart";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./ItemDetail.scss"
import { CartContext } from "../context/CartContext";

const ItemDetail = ({id, brand, Description,price, stock}) => {

  const {agregarAlCarrito} = React.useContext(CartContext);

  const[cantidad, setCantidad] = React.useState(1)

  const handleAgregar =() =>{
    const item ={
      id,
      brand,
      Description,
      price,
      cantidad
    }

    agregarAlCarrito(item)
  }


  return (
   <Card id='itemDetail__card'>
          <CardMedia id="itemDetail__img"  
          component="img"
          src={`../assets/Pcs/${id}.jpg`}
          alt="green iguana"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {brand}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {Description}
        </Typography>
        <Typography id='verMas__button' variant="h6" color="text.secondary">
          <b>{new Intl.NumberFormat('en-US', {style:'currency', currency: 'USD'}).format(price)}</b>
        </Typography>
        <AddTocart max={stock} cantidad={cantidad} setCantidad={setCantidad} addCart={handleAgregar} id={id}/>
      </CardContent>
      </Card>
  );
};

export default ItemDetail;
