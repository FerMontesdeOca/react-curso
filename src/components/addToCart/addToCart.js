import { useState } from "react";
import Button from "react-bootstrap/Button";
import './addToCart.scss'


const AddTocart = () =>{

    let [counter, setCounter] = useState(1)

    const sumar =()=>{
        setCounter(counter +1)
    }
    const restar =()=>{
        if(counter > 1){
            setCounter(counter -1)
        }
    }

    return(
        <div className="buttonsCart">
        <div className="buttonsCounter">
          <Button variant="outline-primary" id="counterLess" onClick={restar}>
             - 
          </Button>{' '}
            <p className="counterText">
            {counter}
            </p>
          <Button variant="outline-primary" id="counterAdd" onClick={sumar}>
            +
          </Button>{' '}
        </div>
        <div>
            <Button variant="primary" id="containerCart">
                Add to cart
            </Button>{' '}
        </div>
      </div>
    )


}


export default AddTocart