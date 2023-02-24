import { useState } from "react"
import { Link, Navigate } from "react-router-dom"
import { useCartContext } from "../context/CartContext"
import { db } from "../../firebase/config"
import { collection, writeBatch, documentId, getDocs, query, where, addDoc } from "firebase/firestore"
import { Formik } from "formik"
import * as Yup from 'yup'
import { Box, TextField } from "@mui/material"
import "./Checkout.scss"
import CheckoutComponent from "./CheckoutComplement"

const schema = Yup.object().shape({
    nombre: Yup.string().min(4, 'Mínimo 4 caracteres').max(30, 'Máximo 30 caracteres').required('Este campo es requerido'),
    direccion: Yup.string().min(8, 'Mínimo 8 caracteres').max(40, 'Máximo 40 caracteres').required('Este campo es requerido'),
    email: Yup.string().email('El email no es válido').required('Este campo es obligatorio')
})

const Checkout = () => {
    const { cart, totalCompra, emptycart } = useCartContext()

    const [orderId, setOrderId] = useState(null)

    const createOrder = async (values) => {
        
        const orden = {
            cliente: values,
            items: cart,
            total: totalCompra()
        }

        const batch = writeBatch(db)
        const ordersRef = collection(db, 'orders')
        const productosRef = collection(db, 'productos')
        
        const outOfStock = []
        
        const itemsRef = query( productosRef, where( documentId(), 'in', cart.map(prod => prod.id) ) )
  
        const productos = await getDocs(itemsRef)
        
        productos.docs.forEach(doc => {
                const item = cart.find(item => item.id === doc.id)

                if (doc.data().stock >= item.cantidad) {
                    batch.update(doc.ref, {
                        stock: doc.data().stock - item.cantidad
                    })
                } else {
                    outOfStock.push(item)
                }
        })

        if (outOfStock.length === 0) {
            batch.commit()
                .then(() => {
                    addDoc(ordersRef, orden)
                        .then((doc) => {
                            setOrderId(doc.id)
                            emptycart()
                        })
                        .catch((error) => console.log(error) )
                })
        } else {
            alert("Hay items sin stock")
        }
        
    }


    if (orderId) {
        return (
            <div className="container my-5">
                <h2>Tu compra ha sido exitosa</h2>
                <hr/>
                <p>Tu código de orden es: {orderId}</p>

                <Link to="/">Volver</Link>
            </div>
        )
    }

    if (cart.length === 0) {
        return <Navigate to="/"/>
    }

    return (
        <div className="container my-5">
            <h2>Terminar mi compra</h2>
            <hr/>

            <Formik
                initialValues={{
                    nombre: '',
                    direccion: '',
                    email: ''
                }}
                onSubmit={(values) => {
                    // console.log(values)
                    createOrder(values)
                }}
                validationSchema={schema}
            >
                {({
                    values, handleChange, handleSubmit, errors
                }) => (
                    <div className="form-group">
                     <CheckoutComponent />
                    <Box onSubmit={handleSubmit} className="formCheckOut" component="form"
                    sx={{
                     '& > :not(style)': { m: 1, width: '45ch' },
                       }}
                   noValidate
                   autoComplete="on">
                         <TextField id="outlined-basic" label="Tu Nombre" variant="outlined" type='text' value={values.nombre} onChange={handleChange} name="nombre" color="secondary" focused/>
                        {errors.nombre && <p>{errors.nombre}</p>}

                        <TextField id="outlined-basic" label="Tu dirección" variant="outlined" type='text' value={values.direccion} onChange={handleChange} name="direccion" color="secondary" focused/>
                        {errors.direccion && <p>{errors.direccion}</p>}

                        <TextField id="outlined-basic" label="Tu email" variant="outlined" type='email' value={values.email} onChange={handleChange} name="email"color="secondary" focused/>
                        {errors.email && <p>{errors.email}</p>}

                        <button className="btn btn-primary" type="submit">Enviar</button>
                    </Box>
                    </div>
                )}
            </Formik>

            
            
        </div>
    )
}

export default Checkout
