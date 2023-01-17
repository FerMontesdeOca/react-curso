import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './basicCard.scss'
import Button from '@mui/material/Button';


const BasicCard = ({id, brand, Description,price}) => {

  return (
    <Card id='basicCard' className='col-5' sx={{ maxWidth: 285 }}>
          <CardMedia  
          component="img"
          height="150"
          src={`../assets/Pcs/${id}.jpg`}
          alt="green iguana"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {brand}
        </Typography>
        <Typography id='verMas__button' variant="h6" color="text.secondary">
          <b>{new Intl.NumberFormat('en-US', {style:'currency', currency: 'USD'}).format(price)}</b>
          <Button variant="contained" size="medium">
          Ver mas
        </Button>
        </Typography>
      </CardContent>
      </Card>
  );
};

export default BasicCard;
