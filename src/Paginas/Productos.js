import React from 'react'
import Pie from '../Componentes/Pie'

const Productos = () => {
  return (
    <div>
      <div className="position-relative overflow-hidden text-center text-dark bg-body-tertiary" 
      style={{backgroundImage: 'url("./Sliderimagenes/Slider2.jpg")', backgroundSize: 'cover', backgroundPosition: 'center center'}}>
    <div className="col-md-8 p-lg-5 mx-auto my-5">
        <h1 className="display-3 fw-bold">Nuestros Productos</h1>
        <h3 className="fw-normal text-dark mb-3">La calidad del hogar</h3>
        <div className="d-flex gap-3 justify-content-center lead fw-normal"></div>
    </div>
    <div className="product-device shadow-sm d-none d-md-block"></div>
    <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
</div>


      
      <div className="album py-5 bg-light">
        <div className="container">

          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div className="col">
              <div className="card shadow-sm">
              <img src="imagen2.jpg" className="bd-placeholder-img card-img-top w-100 h-auto" aria-label="Placeholder: Thumbnail"></img>

                <div className="card-body">
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-primary">Ver más</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card shadow-sm">
              <img src="imagen2.jpg" className="bd-placeholder-img card-img-top w-100 h-auto" aria-label="Placeholder: Thumbnail"></img>

                <div className="card-body">
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-primary">Ver más</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col">
              <div className="card shadow-sm">
              <img src="imagen2.jpg" className="bd-placeholder-img card-img-top w-100 h-auto" aria-label="Placeholder: Thumbnail"></img>

                <div className="card-body">
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-primary">Ver más</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card shadow-sm">
              <img src="imagen2.jpg" className="bd-placeholder-img card-img-top w-100 h-auto" aria-label="Placeholder: Thumbnail"></img>

                <div className="card-body">
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-primary">Ver más</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card shadow-sm">
              <img src="imagen2.jpg" className="bd-placeholder-img card-img-top w-100 h-auto" aria-label="Placeholder: Thumbnail"></img>

                <div className="card-body">
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-primary">Ver más</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card shadow-sm">
                <img src="imagen2.jpg" className="bd-placeholder-img card-img-top w-100 h-auto" aria-label="Placeholder: Thumbnail"></img>

                <div className="card-body">
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-primary">Ver más</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
    </div>
      
      <Pie/>
    </div>
  )
}

export default Productos
