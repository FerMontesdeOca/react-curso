import AddTocart from "../addToCart/addToCart";
import CardMedia from '@mui/material/CardMedia';

const ItemDetail = ({id, brand, Description,price}) => {
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
        <Typography variant="body2" color="text.secondary">
          {Description}
        </Typography>
        <Typography id='verMas__button' variant="h6" color="text.secondary">
          <b>{new Intl.NumberFormat('en-US', {style:'currency', currency: 'USD'}).format(price)}</b>
        </Typography>
      </CardContent>
      </Card>
  );
};

export default ItemDetail;
