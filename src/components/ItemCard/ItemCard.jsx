import { Link } from "react-router-dom"


const ItemCard = ({nombre,precio,id,img,descripcion,stock}) => {



    return (

        <div className='col-3 m-2 p-3 text-center border border-1 rounded'>
                            <h4 className="text-center text-secondary">{nombre}</h4>
                            <img className="my-2" src={img} width={200} />
                            <p>{descripcion}</p>
                            {
                                stock <= 10 && <p className="text-danger">¡Sólo quedan {stock} unidades!</p>
                            }
                            <p>Precio: ${precio}</p>
                            <Link className="btn btn-primary" to={`/productos/detail/${id}`}>Ver más</Link>
                        </div>
        
    
    )
}

export default ItemCard