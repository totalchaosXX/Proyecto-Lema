import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { FaTrash } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Cart = () => {

    const {cart, totalCompra, vaciarCarrito, eliminarDelCarrito} = useContext(CartContext)

    if(cart.length===0){
        return (

            <div className="container my-5">

                    <h2>Tu carrito está vacío</h2>
                    <hr />
                    <Link className="btn btn-primary" to="/">Ir a comprar productos</Link>
            </div>
        )
    }

    return (
        <div className="container my-5">
           
                    
                    <h2>Tu compra</h2>
                    <hr />
                    {
                        cart.map((prod) => (
                            <div key={prod.id}>
                                <h4>{prod.nombre}</h4>
                                <img src={prod.img} width="100" alt={prod.nombre} />
                                <p>Precio: ${prod.precio}</p>
                                <p>Cantidad: {prod.cantidad}</p>
                                <button 
                                className="btn btn-danger"
                                onClick={() => eliminarDelCarrito(prod.id)}
                                ><FaTrash/></button>
                                <hr />
                            </div>
                        ))
                    }
                    <div>
                        <h5>Total Compra: ${totalCompra()}</h5>
                        <hr />
                        <button onClick={vaciarCarrito} className="btn btn-danger mx-2">Vaciar carrito</button>
                        <Link className="btn btn-success" to="/checkout">Terminar compra</Link>
                    </div>
                    
            
           
            
        </div>
    )
}

export default Cart