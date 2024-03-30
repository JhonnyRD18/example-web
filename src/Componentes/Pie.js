import React from "react";
import { Link } from "react-router-dom";

const Pie = () => {
  return (
    <div>
      <footer className="text-white bg-dark">
        <div className="container py-4 w-100">
            <nav className="row">

          <Link to="/" className="col-md-6 d-flex align-items-center justify-content-center">
            <img src="/BussinesLogo_dark.png" alt="Logo" width="auto" height="auto" ></img>
          </Link>

          <ul className="nav col-md-6 d-flex align-items-center justify-content-center">
            <li className="nav-item">
              <Link to="#" className="nav-link px-2 text-body-secondary text-reset">
                Redes Sociales
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link px-2 text-body-secondary text-reset">
                Contacto
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link px-2 text-body-secondary text-reset">
                Información
              </Link>
            </li>
            
          </ul>
            <hr className="dropdown-divide m-4 w-100"/>
          

          <div className="Container w-100">
            <nav className="row">
                <p className="text-align-center m-0">&copy; 2024 Company, Inc</p>
            </nav>
          </div>

          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Pie;
