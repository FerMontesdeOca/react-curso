import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './basicCard.scss'
import AddTocart from '../addToCart/addToCart';


const BasicCard = ({productos}) => {

  return (
    <div className='row justify-content-around'>
    { productos.map((prod => (
      <Card key={prod.id} id='basicCard' className='col-5' sx={{ maxWidth: 285 }}>
      <CardActionArea>
      <CardMedia  
      component="img"
      height="150"
      src={`../assets/Pcs/${prod.id}.jpg`}
      alt="green iguana"
    />
    <CardContent>
    <Typography gutterBottom variant="h5" component="div">
      {prod.brand}
    </Typography>
    <Typography variant="body2" color="text.secondary">
      {prod.Description}
    </Typography>
    <Typography variant="h6" color="text.secondary">
      <b>$ {prod.price}</b>
    </Typography>
  </CardContent>
  <AddTocart/>
  </CardActionArea>
  </Card>
    )))
    }
  </div>
  );
};

export default BasicCard;
