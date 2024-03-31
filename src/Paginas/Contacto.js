import React from 'react'
import Pie from '../Componentes/Pie'

const Contacto = () => {
  return (
    <div>
        <div className="position-relative overflow-hidden text-center text-dark bg-body-tertiary" 
                style={{backgroundImage: 'url("./Sliderimagenes/Slider2.jpg")', backgroundSize: 'cover', backgroundPosition: 'center center'}}>
            <div className="col-md-10 p-lg-4 mx-auto my-5">
                <h2 className="display-3 fw-bold">Canal de Contacto</h2>
                <h3 className="fw-normal text-dark mb-3">¡¡Al servicio de brindar una mejor calidad para sus viviendas!!</h3>
                <div className="d-flex gap-3 justify-content-center lead fw-normal"></div>
            </div>
            <div className="product-device shadow-sm d-none d-md-block"></div>
            <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        </div>
        
        <div className='mt-3 mb-3'>
            <h3>Contactos Principales</h3>
            <div className='mt-3 mb-3'>
                <div  className='d-flex justify-content-center m-2'>
                    <i className="bi bi-person"> Juan Perez </i>
                </div>
                <div className='d-flex justify-content-center m-2'>
                    <i className="bi bi-telephone"> +51 999-999-999 </i>
                </div>
                <div className='d-flex justify-content-center m-2'>
                    <i className="bi bi-envelope"> ventas.upvcsystem@gmail.com </i>
                    </div>
                <div className='d-flex justify-content-center m-2'>
                    <i className="bi bi-geo-alt">Santiago de Surco, Lima, Lima</i>
                </div>
            </div>
            <hr className="featurette-divider"/>

            <div className='mt-3 mb-3'>
                <div  className='d-flex justify-content-center m-2'>
                    <i className="bi bi-person"> Juan Perez </i>
                </div>
                <div className='d-flex justify-content-center m-2'>
                    <i className="bi bi-telephone"> +51 999-999-999 </i>
                </div>
                <div className='d-flex justify-content-center m-2'>
                    <i className="bi bi-envelope"> Jrdelperun@gmail.com </i>
                    </div>
                <div className='d-flex justify-content-center m-2'>
                    <i className="bi bi-geo-alt">Santiago de Surco, Lima, Lima</i>
                </div>
            </div>
        </div>

        <div className='mt-3 mb-3'>
            <h3>Contactos Secundarios</h3>
            
            
            
            <div className="container-fluid">
                <div className="row justify-content-center mb-4 mt-4">
                    <div className="col-10 col-md-10 col-lg-10">
            
                                <div className="accordion" id="accordionPanelsStayOpenExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
                                    Person1
                                </button>
                                </h2>
                                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                                <div className="accordion-body p-3">
                                    <div className='d-flex justify-content-start m-1'>
                                        <i className="bi bi-telephone"> +51 999-999-999 </i>
                                    </div>
                                    <div className='d-flex justify-content-start m-1'>
                                        <i className="bi bi-envelope"> Jrdelperun@gmail.com </i>
                                    </div>
                                    <div className='d-flex justify-content-start m-1'>
                                        <i className="bi bi-geo-alt">Santiago de Surco, Lima, Lima</i>
                                    </div>
                                </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                    Person2
                                </button>
                                </h2>
                                <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                                <div className="accordion-body p-3">
                                    <div className='d-flex justify-content-start m-1'>
                                        <i className="bi bi-telephone"> +51 999-999-999 </i>
                                    </div>
                                    <div className='d-flex justify-content-start m-1'>
                                        <i className="bi bi-envelope"> Jrdelperun@gmail.com </i>
                                    </div>
                                    <div className='d-flex justify-content-start m-1'>
                                        <i className="bi bi-geo-alt">Santiago de Surco, Lima, Lima</i>
                                    </div>
                                </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                    Person3
                                </button>
                                </h2>
                                <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                                <div className="accordion-body p-3">
                                    <div className='d-flex justify-content-start m-1'>
                                        <i className="bi bi-telephone"> +51 999-999-999 </i>
                                    </div>
                                    <div className='d-flex justify-content-start m-1'>
                                        <i className="bi bi-envelope"> Jrdelperun@gmail.com </i>
                                    </div>
                                    <div className='d-flex justify-content-start m-1'>
                                        <i className="bi bi-geo-alt">Santiago de Surco, Lima, Lima</i>
                                    </div>
                                </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                    Person4
                                </button>
                                </h2>
                                <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse">
                                <div className="accordion-body p-3">
                                    <div className='d-flex justify-content-start m-1'>
                                        <i className="bi bi-telephone"> +51 999-999-999 </i>
                                    </div>
                                    <div className='d-flex justify-content-start m-1'>
                                        <i className="bi bi-envelope"> Jrdelperun@gmail.com </i>
                                    </div>
                                    <div className='d-flex justify-content-start m-1'>
                                        <i className="bi bi-geo-alt">Santiago de Surco, Lima, Lima</i>
                                    </div>
                                </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                    Person5
                                </button>
                                </h2>
                                <div id="panelsStayOpen-collapseFive" className="accordion-collapse collapse">
                                <div className="accordion-body p-3">
                                    <div className='d-flex justify-content-start m-1'>
                                        <i className="bi bi-telephone"> +51 999-999-999 </i>
                                    </div>
                                    <div className='d-flex justify-content-start m-1'>
                                        <i className="bi bi-envelope"> Jrdelperun@gmail.com </i>
                                    </div>
                                    <div className='d-flex justify-content-start m-1'>
                                        <i className="bi bi-geo-alt">Santiago de Surco, Lima, Lima</i>
                                    </div>
                                </div>
                                </div>
                            </div>
                            
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSix" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                    Person6
                                </button>
                                </h2>
                                <div id="panelsStayOpen-collapseSix" className="accordion-collapse collapse">
                                <div className="accordion-body p-3">
                                    <div className='d-flex justify-content-start m-1'>
                                        <i className="bi bi-telephone"> +51 999-999-999 </i>
                                    </div>
                                    <div className='d-flex justify-content-start m-1'>
                                        <i className="bi bi-envelope"> Jrdelperun@gmail.com </i>
                                    </div>
                                    <div className='d-flex justify-content-start m-1'>
                                        <i className="bi bi-geo-alt">Santiago de Surco, Lima, Lima</i>
                                    </div>
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

export default Contacto
