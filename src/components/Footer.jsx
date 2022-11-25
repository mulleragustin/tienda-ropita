import React from "react";
const Footer = () => {
    return(
        
        <footer className="bg-light text-center ">
            <div className="container p-4">
                <section className="mb-4">
                    <a className="btn btn-outline-light btn-floating m-1" href="#" role="button"> <img src="icons/facebook.svg" alt="facebook" />   </a>
                    <a className="btn btn-outline-light btn-floating m-1" href="#" role="button"> <img src="icons/twitter.svg" alt="twitter" />   </a>                    
                    <a className="btn btn-outline-light btn-floating m-1" href="#" role="button"> <img src="icons/instagram.svg" alt="instagram" />   </a>                    
                    <a className="btn btn-outline-light btn-floating m-1" href="#" role="button"> <img src="icons/youtube.svg" alt="youtube" />   </a>                    
                </section>
            <hr />
                <section className="">
                    <form action="">
                        <div className="row d-flex justify-content-center align-items-center">     
                            <div className="col-auto">
                                <p className=" "><strong>Suscribite para recibir novedades</strong></p>
                            </div>
                            
                            <div className="form-floating mb-3 col-md-5">
                                <input type="email" className="form-control form-control-sm" id="floatingInput" />
                                <label htmlFor="floatingInput"> Email address</label>
                            </div>

                            <div className="col-auto">
                                <button type="submit" className="btn btn-outline-dark mb-4 btn-lg">
                                    Suscribirse
                                </button>
                            </div>
                        </div>
                    </form>
                    
                </section>
                

            
            </div>
            <div className="text-center p-3" style={{backgroundColor:" rgba(0, 0, 0, 0.2)"}}>
               <p>© 2022 Copyright: <a className="text-dark" href="#"> Tienda Ropita</a></p>   
                
             </div>
        </footer>
        

      
    )
}
export default Footer