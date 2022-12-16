import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import listaProductos from "./json/productos.json";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [items, setItems] = useState([])
    const {id} = useParams();
    useEffect (() => {
        const promesa = new Promise ((resolve,reject) => {
            setTimeout (() => {resolve(id ? listaProductos.filter(item => item.categoria === id) : listaProductos)},2000)
        })
        promesa.then((data)=> {
            setItems(data)
        })
    }, [id])
    
    return (
        
        <div className="container bg-light">
            <ItemList items={items} />
        </div>
      
    )
}

export default ItemListContainer;