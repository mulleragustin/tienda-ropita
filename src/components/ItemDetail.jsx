import React from "react";


const ItemDetail = ({item}) => {
    return (
        <div className="row">
            <div className="col-md-4 offset-md-2">
                <img src={item.imagen} alt={item.nombre} className="img-fluid" />
            </div>
            <div className="col-md-4">
                <h1>{item.marca + " " + item.nombre}</h1>
                <h5>{item.categoria}</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus fugit fuga quam dolorum est hic quis laborum ipsum voluptates commodi officia accusantium nisi nam a esse, impedit quasi vitae nobis?</p>
                <p><b>${item.precio}</b></p>
               
            </div>
        </div>
    )
}

export default ItemDetail;