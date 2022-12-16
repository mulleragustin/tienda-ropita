import React from "react";
import { Link } from "react-router-dom";

const Item = ({item}) => {
    return (
    <div className="col-md-4 py-2" >
        <Link to={"/item/" + item.id} className="text-dark text-decoration-none" key={item.id}>
                <div className="card text-center border border-0">
                    <img src={item.imagen} className="img-fluid" alt={item.nombre} style={{objectFit : "cover",height: "40vh"}} />
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