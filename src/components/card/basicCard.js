import * as React from 'react';
import Card from 'react-bootstrap/Card';
import './basicCard.scss'
import { Link } from "react-router-dom"


const BasicCard = ({ id,brand,price, image }) => {
  return (
    <Card id='basicCard' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{brand}</Card.Title>
        <Card.Text className='card__text'>
        <b>{new Intl.NumberFormat('en-US', {style:'currency', currency: 'USD'}).format(price)}</b>
        <Link to={`/detail/${id}`} className="btn btn-outline-primary verMas__button">Ver más</Link>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default BasicCard;