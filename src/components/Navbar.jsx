import React from 'react'


function Navbar() {

  
  return (
    
      <div className='justify-content-space-between'>
        <h2>Ropita</h2>
        <div >
          <a  href="#h">Home</a>
          <a  href="#h">Tienda</a>
          <a  href="#h">Marcas</a>

        </div>
        <div >
          <a href="#h"><img src="icons/user.svg" alt="user"/></a>
          <a href="#h"><img src="icons/star.svg" alt="fav"/></a>
          <a href="#h"><img src="icons/shopping-cart.svg" alt="cart"/></a>
          

        </div>
      </div>
        
       
    
  )
}

export default Navbar

