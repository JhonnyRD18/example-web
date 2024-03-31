import React from 'react'
import Pie from '../Componentes/Pie'

const Nosotros = () => {
  return (
    <div>
      <div className="position-relative overflow-hidden text-center text-dark bg-body-tertiary" 
            style={{backgroundImage: 'url("./Sliderimagenes/Slider1.jpg")', backgroundSize: 'cover', backgroundPosition: 'center center'}}>
          <div className="col-md-10 p-lg-5 mx-auto my-5">
            <h1 className="display-3 fw-bold">Quien somos?</h1>
            <h3 className="fw-normal text-dark mb-3">Aqui encontraras los servicios que tenemos para tu hogar</h3>
            <div className="d-flex gap-3 justify-content-center lead fw-normal"></div>
          </div>
        <div className="product-device shadow-sm d-none d-md-block"></div>
        <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
      </div>

      <div className="row m-4">
        <div className="col-md-7 text-end py-4">
            <h2 className="featurette-heading fw-normal lh-1">First featurette heading. <span className="text-body-secondary">It’ll blow your mind.</span></h2>
            <p className="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
        </div>
        <div className="col-md-5">
        <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src="imagen3.jpg" alt="Descripción de la imagen" width="500" height="500"/>
        </div>
      </div>

      <div className="row m-4">
        <div className="col-md-7 text-end py-4">
            <h2 className="featurette-heading fw-normal lh-1">First featurette heading. <span className="text-body-secondary">It’ll blow your mind.</span></h2>
            <p className="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
        </div>
        <div className="col-md-5">
        <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src="imagen3.jpg" alt="Descripción de la imagen" width="500" height="500"/>
        </div>
      </div>
      <Pie/>
    </div>
  )
}

export default Nosotros

