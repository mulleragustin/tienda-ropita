import React from "react";
import listaProductos from "./json/productos.json";
import NavList from "./NavList";
import { useState } from "react";

const NavListCointainer = () => {
    const arrayCategorias = [...new Set(listaProductos.map(categoria => categoria.categoria))]
    const [categorias] = useState(arrayCategorias)
    console.log(categorias)
    return (
        
             <NavList categorias = {categorias}/>
       
    )
}
export default NavListCointainer