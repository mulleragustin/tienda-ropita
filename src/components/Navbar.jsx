import React from 'react'
import CartWidget from './CartWidget'


function Navbar() {

  
  return (        
          <nav className="navbar navbar-expand-lg bg-light ">
            <div className="container-fluid p-0">
              <div>
              <a className="navbar-brand fs-1" href="#">Ropita</a>
              </div>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto ">
                  <li className="nav-item fs-4 ">
                    <a className="nav-link fs-4 text-dark" href="#">Inicio</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link fs-4 text-dark" href="#">Tienda</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link fs-4 text-dark" href='#'>Marcas</a>
                  </li>
               </ul>
                 <div className='pe-4'>
                  <a className='ps-3' href="#h"><img src="icons/user.svg" alt="user"/></a>
                  <a className='ps-3' href="#h"><img src="icons/star.svg" alt="fav"/></a>
                  <CartWidget />
                </div>
              </div>
               
            </div>
        </nav>
      
    
  )
}

export default Navbar

