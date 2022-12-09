import React from "react";
import { Link } from "react-router-dom";

const Item = ({item}) => {
    return (
        <div className="col-md-2">
            <Link to={"/item/" + item.id} className="text-dark text-decoration-none">
                <div className="card text-center border border-0">
                    <img src={item.imagen} className="card-img-top" alt={item.nombre} />
                    <div className="card-body">
                        <p className="card-text">{item.categoria}</p>
                        <p className="card-text">{item.marca + " " + item.nombre}</p>
                        <p className="card-text">$ {item.precio}</p>
                        <button>Agregar al carrito</button>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Item;