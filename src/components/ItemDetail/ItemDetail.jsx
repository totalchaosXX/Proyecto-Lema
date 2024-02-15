import { useContext, useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import SelectTalla from "../SelectTalla/SelectTalla"
import {  useNavigate } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import { Link } from 'react-router-dom';


const tallas = [
    {
        value: "s",
        label: "Small"
    },
    {
        value: "m",
        label: "Medium"
    },
    {
        value: "l",
        label: "Large"
    },
]


const ItemDetail = ({nombre,precio,img,stock,descripcion,id}) => {

    const {agregarAlCarrito, isInCart} = useContext(CartContext)

    console.log(isInCart(id))

    const [cantidad,setCantidad] = useState(1)
    const [talla,setTalla] = useState(null)

    const navigate = useNavigate()

    const handleAgregar = () => {
        const item = {
            nombre,precio,img,stock,descripcion,cantidad,id
        }

        agregarAlCarrito(item)
    }

    const handlerVolver = () => {
        navigate(-1)
        
    }
    
   
    return (
        <div className="container col-4 p-3 text-center border border-1 rounded my-3">
            <h2 className="text-secondary">{nombre}</h2>
            <img src={img} alt={nombre} width={200} className="my-3" />
            <p>{descripcion}</p>
            {
                stock <= 10 && <p className="text-danger">¡Sólo quedan {stock} unidades!</p>
            }
            <h5>Precio: {precio}</h5>
            <br />
            {/* <small>Categoria: {CATEGORIA}</small> */}
            <br />
            <span>Seleccione talla: </span>

            <SelectTalla 
                setSelect={setTalla}
                options={tallas}
            />

            {
                isInCart(id)
                ? <Link className="btn btn-success my-2" to="/cart">Terminar compra</Link>
                : <ItemCount
                max={stock}
                cantidad={cantidad}
                setCantidad={setCantidad}
                handleAgregar={handleAgregar}
            />
            }
           
            
            <hr />
            <button onClick={handlerVolver} className="btn btn-primary">Volver</button>
        </div>
    )
}

export default ItemDetail