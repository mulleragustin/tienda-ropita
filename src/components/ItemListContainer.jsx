import React from "react";

const ItemListContainer = ({greeting}) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className=" fs-1 alert alert-primary text-center m-3" role="alert">
                        {greeting}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer;