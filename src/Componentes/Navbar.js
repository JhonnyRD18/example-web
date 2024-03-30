import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      {/* Esto es la barra de navegación con boostrap */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100">
        <div className="container-fluid mt-2 mb-2 mr-6 ml-6">

          {/* Esto es el logo */}
          <Link className="navbar-brand" to="/">
            <img src="/BussinesLogo_dark.png" alt="Logo" width="auto" height="auto" ></img>
          </Link>

          {/* Esto es el botón de menu */}
          <button
            className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/"> Inicio </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Productos"> Productos </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/SobreNosotros"> Sobre Nosotros </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Contacto"> Contacto </Link>
              </li>
            </ul>

            {/* Esto es la barra de búsqueda */}
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Ingresa tu búsqueda" aria-label="Search"/>
              <button type="button" className="btn btn-outline-info">Buscar</button>
            </form>

          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
