

const ItemCount = ({max,cantidad,setCantidad,handleAgregar}) => {

    const handleSumar = () => {
        cantidad < max 
        && setCantidad(cantidad+1)
    }

    const handleRestar = () => {
        {
            cantidad > 1
            && setCantidad(cantidad-1)
         
        }
    }

   

    return (
        <div className="pt-3">
            {/* {cantidad ===1 ? "btn btn-outline-danger" : "btn btn-outline-primary" } */}
            <button onClick={handleRestar} className={`btn ${cantidad===1 ? "btn btn-outline-danger" : "btn btn-outline-primary"}` }>-</button>
            <span className="mx-3">{cantidad}</span>
            <button onClick={handleSumar} className={`btn ${cantidad===max ? "btn btn-outline-danger" : "btn btn-outline-primary"}`}>+</button>
            <br />
            <button onClick={handleAgregar} className="btn btn-success my-2">Agregar al carrito</button>
        </div>
    )
}

export default ItemCount