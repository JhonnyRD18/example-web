import React from 'react'
import Pie from '../Componentes/Pie'

const Productos = () => {
  return (
    <div>
      <div className="position-relative overflow-hidden text-center text-light bg-body-tertiary bg-secondary">
        <div className="col-md-6 p-lg-5 mx-auto my-5">
            <h1 className="display-3 fw-bold">Designed for engineers</h1>
            <h3 className="fw-normal text-light mb-3">Build anything you want with Aperture</h3>
            <div className="d-flex gap-3 justify-content-center lead fw-normal"></div>
        </div>
          <div className="product-device shadow-sm d-none d-md-block"></div>
          <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
      </div>

      
      <div className="container-fluid d-md-flex flex-md-equal w-100 my-md-2 ps-md-4 pe-md-4">
        
        <div className="container-fluid bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div className="my-3 p-3">
            <h2 className="display-5">Another headline</h2>
            <p className="lead">And an even wittier subheading.</p>
          </div>
          <div className="bg-dark shadow-sm mx-auto" style={{width: "100%", height: "300px", borderRadius: "21px 21px 0 0"}}></div>
        </div>

        <div className="container-fluid bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 p-3">
              <h2 className="display-5">Another headline</h2>
              <p className="lead">And an even wittier subheading.</p>
            </div>
            <div className="bg-dark shadow-sm mx-auto" style={{width: "100%", height: "300px", borderRadius: "21px 21px 0 0"}}></div>
        </div>

      </div>

      <div className="d-md-flex flex-md-equal w-100% my-md-2 ps-md-4 pe-md-4">
        
      <div className="container-fluid bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div className="my-3 p-3">
            <h2 className="display-5">Another headline</h2>
            <p className="lead">And an even wittier subheading.</p>
          </div>
          <div className="bg-dark shadow-sm mx-auto" style={{width: "100%", height: "300px", borderRadius: "21px 21px 0 0"}}></div>
        </div>

        <div className="container-fluid bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 p-3">
              <h2 className="display-5">Another headline</h2>
              <p className="lead">And an even wittier subheading.</p>
            </div>
            <div className="bg-dark shadow-sm mx-auto" style={{width: "100%", height: "300px", borderRadius: "21px 21px 0 0"}}></div>
        </div>

      </div>

      <div className="d-md-flex flex-md-equal w-100% my-md-2 ps-md-4 pe-md-4">
        
      <div className="container-fluid bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div className="my-3 p-3">
            <h2 className="display-5">Another headline</h2>
            <p className="lead">And an even wittier subheading.</p>
          </div>
          <div className="bg-dark shadow-sm mx-auto" style={{width: "100%", height: "300px", borderRadius: "21px 21px 0 0"}}></div>
        </div>

        <div className="container-fluid bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 p-3">
              <h2 className="display-5">Another headline</h2>
              <p className="lead">And an even wittier subheading.</p>
            </div>
            <div className="bg-dark shadow-sm mx-auto" style={{width: "100%", height: "300px", borderRadius: "21px 21px 0 0"}}></div>
        </div>

      </div>
      
      <Pie/>
    </div>
  )
}

export default Productos
