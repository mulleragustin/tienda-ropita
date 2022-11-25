import React from "react";
const CartWidget = () => {
    return (
        <a className="ps-3" href="#h">
                <img src="icons/shopping-cart.svg" alt="CartWidget" />
                <span className="position-absolute translate-middle badge rounded-pill bg-danger">1</span>
        </a>
    )
}
export default CartWidget