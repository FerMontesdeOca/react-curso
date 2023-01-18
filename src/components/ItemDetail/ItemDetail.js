import AddTocart from "../addToCart/addToCart";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./ItemDetail.scss"

const ItemDetail = ({id, brand, Description,price}) => {
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
        <AddTocart/>
      </CardContent>
      </Card>
  );
};

export default ItemDetail;
