
import { useContext } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";


const CartWidget = () => {
    const {totalCantidad} = useContext(CartContext) 

    return (
        <Link to="/cart" className="text-white">
            <FaCartShopping />
            <span>{totalCantidad()}</span>
        </Link>
    )
}

export default CartWidget