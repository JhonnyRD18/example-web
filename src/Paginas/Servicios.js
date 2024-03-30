import React from 'react'
import Pie from '../Componentes/Pie'

const Servicios = () => {
  return (
    <div>
      <div className="position-relative overflow-hidden text-center text-dark bg-body-tertiary" 
      style={{backgroundImage: 'url("./Sliderimagenes/Slider1.jpg")', backgroundSize: 'cover', backgroundPosition: 'center center'}}>
    <div className="col-md-6 p-lg-5 mx-auto my-5">
        <h1 className="display-3 fw-bold">Nuestros Servicios</h1>
        <h3 className="fw-normal text-dark mb-3">Aqui encontraras los servicios que tenemos para tu hogar</h3>
        <div className="d-flex gap-3 justify-content-center lead fw-normal"></div>
    </div>
    <div className="product-device shadow-sm d-none d-md-block"></div>
    <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
</div>

      
      <div className="d-md-flex flex-md-equal w-100 my-md-4 ps-md-4 pe-md-4">
        
        <div className="container-fluid bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-light overflow-hidden">
          <div className="my-3 p-3">
            <h2 className="display-5">Another headline</h2>
            <p className="lead">And an even wittier subheading.</p>
          </div>
          <div className=" mx-auto">
          <img src="imagen2.jpg" className="img-fluid" alt="Descripción de la imagen" style={{width: "100%", height: "auto", borderRadius: "21px 21px 0 0"}}></img>
          </div>
        </div>

        <div className="container-fluid bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 p-3">
              <h2 className="display-5">Another headline</h2>
              <p className="lead">And an even wittier subheading.</p>
            </div>
            <div className=" mx-auto">
              <img src="imagen2.jpg" className="img-fluid" alt="Descripción de la imagen" style={{width: "100%", height: "auto", borderRadius: "21px 21px 0 0"}}></img>
            </div>

        </div>

      </div>

      <div className="d-md-flex flex-md-equal w-100% my-md-4 ps-md-4 pe-md-4">
        
      <div className="container-fluid bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div className="my-3 p-3">
            <h2 className="display-5">Another headline</h2>
            <p className="lead">And an even wittier subheading.</p>
          </div>
          <div className=" mx-auto">
          <img src="imagen2.jpg" className="img-fluid" alt="Descripción de la imagen" style={{width: "100%", height: "auto", borderRadius: "21px 21px 0 0"}}></img>
          </div>
        </div>

        <div className="container-fluid bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-light overflow-hidden">
          <div className="my-3 p-3">
            <h2 className="display-5">Another headline</h2>
            <p className="lead">And an even wittier subheading.</p>
          </div>
          <div className=" mx-auto">
          <img src="imagen2.jpg" className="img-fluid" alt="Descripción de la imagen" style={{width: "100%", height: "auto", borderRadius: "21px 21px 0 0"}}></img>
          </div>
        </div>

      </div>

      <Pie/>
    </div>
  )
}

export default Servicios

