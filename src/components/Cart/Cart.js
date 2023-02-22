import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from "react-bootstrap/Button";
import {BsTrash} from "react-icons/bs";
import { Link } from "react-router-dom";


const Cart = () => {
  const { cart, emptyCart, totalCompra, deleteItem} = useContext(CartContext);

  return (
    <div className="container my-5">
      <h2 className="text-white">Tu compra</h2>
      { cart.map((item) => (
        <Card key={item.id} id="itemDetail__card">
          <CardMedia
            id="itemDetail__img"
            component="img"
            src={item.image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.brand}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            <b> Cantidad: {item.cantidad} </b>
            </Typography>
            <Typography id="verMas__button" variant="h6" color="text.secondary">
              <b>
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(item.price * item.cantidad)}
              </b>
            </Typography>
               <button className="btn btn-danger btnVaciar" onClick={()=>deleteItem(item.id)}><BsTrash/></button>
          </CardContent>
        </Card>
      ))}
      <h4 className="my-3 text-white">Total de compra: ${totalCompra()}</h4>
      <Button className="btn btn-primary my-4" onClick={emptyCart}>Vaciar carrito</Button>
      <Link to="/checkout" className="btn btn-primary ms-3">Terminar mi Compra</Link>
    </div>
  );
};

export default Cart;
