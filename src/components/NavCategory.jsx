import React from "react";
import listaProductos from "./json/productos.json";

const NavCategory = () => {
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
        
        <div className="container">
            <ItemList items={items} />
        </div>
      
    )
}

export default NavCategory;