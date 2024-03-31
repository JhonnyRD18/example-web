import React from "react";
import { Link } from "react-router-dom";

const Pie = () => {
  return (
    <div>
      
      <footer className="d-flex flex-wrap justify-content-between align-items-center pt-4 pb-4 mt-3 border-top bg-dark text-light">
        <div className="container d-flex flex-column flex-md-row justify-content-between">
          <p className="mb-0 text-body-secondary order-2 order-md-1">&copy; 2024 Company, Inc</p>

          <Link to="/" className="col-md-6 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
            <img src="/BussinesLogo_dark.png" alt="Logo" width="auto" height="auto" ></img>
          </Link>
        </div>
      </footer>
  </div>

  );
};

export default Pie;
