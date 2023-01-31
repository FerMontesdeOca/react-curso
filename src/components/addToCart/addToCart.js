import Button from "react-bootstrap/Button";
import './addToCart.scss'
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const AddTocart = ({max, cantidad, setCantidad, addCart, id}) =>{
    const {isInCart} = useContext(CartContext);

    const handleRestar =()=>{
      cantidad > 1 && setCantidad(cantidad -1)
    }

    const handleSumar =()=>{
      cantidad < max && setCantidad(cantidad +1)
    }
    
    const navigate = useNavigate()

    const handleOver =() =>{
        navigate(-1)
    }

    return(
        <div className="buttonsCart">
        <div className="buttonsCounter">
          <Button variant="outline-primary" id="counterLess" onClick={handleRestar}>
             - 
          </Button>
            <p className="counterText">
            {cantidad}
            </p>
          <Button variant="outline-primary" id="counterAdd" onClick={handleSumar}>
            +
          </Button>
        </div>
        <div className="addToCart__btn">
          {
            !isInCart(id)
            ?<Button variant="primary" id="containerCart" onClick={addCart}>
              Add to cart
              </Button>
            : <Link to="/cart" className="btn btn-primary">Terminar mi Compra</Link>
          }
            <Button className="btn btn-primary" onClick={handleOver}>Volver</Button>
        </div>
      </div>
    )


}


export default AddTocart