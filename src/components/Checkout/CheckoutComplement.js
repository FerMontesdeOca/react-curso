import { useCartContext } from "../context/CartContext"



const CheckoutComponent = () => {
    const { totalCompra, totalArticulos } = useCartContext();

    return (
        <div className="checkoutCmp">
            <img className="deliveryImg" src="https://firebasestorage.googleapis.com/v0/b/cursoreact-73bf1.appspot.com/o/delivery.png?alt=media&token=34323aeb-edb6-4b54-8cbe-ee4d823cede7"  alt="delivery"/>

            <p><b>Total de Articulos: </b>{ totalArticulos()}</p>
            <p><b>Total de la compra: </b>{new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(totalCompra())}</p>
        </div>
    )
}

export default CheckoutComponent