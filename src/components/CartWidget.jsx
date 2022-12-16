import React from "react";
import { Link } from "react-router-dom";
const CartWidget = () => {
    return (
        <Link className="ps-3" to={"/"}>
                <img src="icons/shopping-cart.svg" alt="CartWidget" />
                <span className="position-absolute translate-middle badge rounded-pill bg-danger">1</span>
        </Link>
    )
}
export default CartWidget