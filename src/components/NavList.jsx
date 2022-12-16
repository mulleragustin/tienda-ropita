import React from "react";
import {  NavLink } from "react-router-dom";
const NavList = ({categorias}) => {
    return(
        <ul className="navbar-nav mx-auto">
             {categorias.map(categoria => (
                <li className="nav-item fs-4 ">
                    <NavLink className="nav-link fs-4 text-dark" activeclassname="page" to={`/category/`+ categoria } key={categoria}>
                    <p>{categoria}</p>
                    </NavLink>
                </li>)
             )}
        </ul>)
    
}

export default NavList