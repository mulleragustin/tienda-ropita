import React from "react";

const Carousel = () => {
    return (
        <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <a href="#"><img src="images/banner-adidas.webp" className="d-block w-100" alt="adidas"/></a>
                <div className="carousel-caption d-none d-md-block">
                    <h5>Etiqueta de la primera diapositiva</h5>
                    <p>Algún contenido placeholder representativo para la primera diapositiva.</p>
                </div>
                </div>
                <div className="carousel-item">
                <a href="#"><img src="images/banner-puma.webp" className="d-block w-100" alt="puma"/></a>
                <div className="carousel-caption d-none d-md-block">
                    <h5>Etiqueta de la segunda diapositiva</h5>
                    <p>Algún contenido placeholder representativo para la segunda diapositiva.</p>
                </div>
                </div>
                <div className="carousel-item">
                <a href="#"><img src="images/banner-jordan.jpg" className="d-block w-100" alt="jordan"/></a>
                <div className="carousel-caption d-none d-md-block">
                    <h5>Etiqueta de la tercera diapositiva</h5>
                    <p>Algún contenido placeholder representativo para la tercera diapositiva.</p>
                </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Anterior</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Siguiente</span>
            </button>
        </div>
    )
}
export default Carousel;
