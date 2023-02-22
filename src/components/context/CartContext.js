import { createContext, useState, useContext } from "react";


export const CartContext = createContext();

export const useCartContext = () => {
  return useContext(CartContext)
}

// const init = JSON.parse(localStorage.getItem('cart')) || []

export const CartProvider =({children}) =>{
    const [cart, setcart] = useState([]);

  const agregarAlCarrito = (item) =>{
    setcart([...cart, item]);
  }

  const deleteItem =(id) =>{
    setcart(cart.filter(item => item.id !== id))
  }

  const isInCart = (id)=>{
    return cart.some(item => item.id === id)
  }

  const emptyCart =() =>{
    setcart([])
  }

  const totalCompra =() =>{
    return cart.reduce((acum, item)=> acum + item.price * item.cantidad, 0)
  }

  const totalArticulos =() =>{
    return cart.reduce((acum,item)=> acum + item.cantidad, 0)
  }

  

    return(
        <CartContext.Provider value={{
            cart,
            agregarAlCarrito,
            isInCart,
            emptyCart,
            totalCompra,
            totalArticulos,
            deleteItem
        }}>
            {children}
        </CartContext.Provider>
    )
}