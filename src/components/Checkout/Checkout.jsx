import { useState } from "react"
import { useCartContext } from "../../context/CartContext"
import { Link, Navigate } from "react-router-dom"
import { collection, addDoc } from "firebase/firestore"
import { db } from "../../firebase/config"

const Checkout = () =>{

    const {cart, totalCompra,vaciarCarrito} = useCartContext()
    const [orderId, setOrderId] = useState(null)

    const [values, setValues] = useState({
        nombre: '',
        direccion: '',
        email: ''
    })

    const handleInputChange = (e) => {
        
        setValues({
            ...values,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        
        const orden = {
            cliente: values,
            items: cart,
            total: totalCompra(),
            fecha: new Date()
        }
        const ordersRef = collection(db, "orders")

        addDoc(ordersRef, orden)
        .then((doc) => {
            setOrderId(doc.id)
            vaciarCarrito()
        })
    }

    if(orderId){
        return (
            <div className="container my-5">
                <h2>Tu compra se realizó correctamente</h2>
                <hr />
                <p>Tu número de compra es: <strong>{orderId}</strong> </p>
                <Link className="btn btn-primary" to="/">Volver al inicio</Link>
                
            </div>
        )
    }

    if(cart.length===0){
        return <Navigate to="/"/>
    }

    return (
        <div className="container my-5">
            <h2>Checkout</h2>
            <hr />

            <form onSubmit={handleSubmit}>
                <input 
                value={values.nombre}
                type="text"
                placeholder="Nombre"
                className="form-control my-2"
                onChange={handleInputChange}
                name="nombre"
                required
                />
                <input 
                value={values.direccion}
                type="text"
                placeholder="Dirección"
                className="form-control my-2"
                onChange={handleInputChange}
                name="direccion"
                required
                />
                <input
                value={values.email} 
                type="email"
                placeholder="Email"
                className="form-control my-2"
                onChange={handleInputChange}
                name="email"
                required
                />
                <button className="btn btn-primary my-3" type="submit">Ir a pagar</button>

            </form>
        </div>
    )
}

export default Checkout