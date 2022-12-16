import React from 'react'
import CartWidget from './CartWidget'
import { Link} from "react-router-dom";
import NavListCointainer from './NavListContainer';

function Navbar() {
 
  return (       
  
    
          <nav className="navbar navbar-expand-lg bg-light ">
            <div className="container-fluid p-0">
              
              <Link className="navbar-brand fs-1" to={"/"}>Ropita</Link>
              
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                {/* <ul className="navbar-nav mx-auto">
                  <li className="nav-item fs-4 ">
                    <NavLink className="nav-link fs-4 text-dark" activeclassname="page" to={`/category/Zapatillas`}>Zapatillas</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link fs-4 text-dark" activeclassname="page" to={"/category/Buzos"}>Buzos</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link fs-4 text-dark" activeclassname="page" to={"/category/Camperas"}>Camperas</NavLink>
                  </li>
               </ul> */}
               <NavListCointainer/>
                 <div className='pe-4'>
                  <Link className='ps-3' style={{pointerEvents: "none"}} to={"/"}><img src="icons/user.svg" alt="user"/></Link>
                  <Link className='ps-3' style={{pointerEvents: "none"}} to={"/"}><img src="icons/star.svg" alt="fav" /></Link>
                  <CartWidget />
                </div>
              </div>
               
            </div>
        </nav>
      
    
  )
}

export default Navbar

