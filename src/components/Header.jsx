import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import FiltroGenerosC from './cantantesG/FiltroGenerosC'
import FiltroGenerosD from './discografiasG/FiltroGenerosD'

const Header = () => {
  const location = useLocation(); // Obtiene la ubicación actual

  return (
    <>
      <div className="container-fluid position-relative p-5">
        <nav className="navbar navbar-expand-lg navbar-light navbar-bg px-4 px-lg-5 py-3 py-lg-0">
          <a href="#" className="navbar-brand p-0">
            <h1 className="text-primary">
              <i className="bi bi-music-note-list me-3" />
              Latin music
            </h1>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="fa fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              <Link 
                to="/inicio" 
                className={`nav-item nav-link ${location.pathname === '/inicio' ? 'active' : ''}`}
              >
                Inicio
              </Link>
              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Cantantes por Género
                </a>
                <div className="dropdown-menu m-0">
                  <FiltroGenerosC />
                </div>
              </div>
              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Discografías por Género
                </a>
                <div className="dropdown-menu m-0">
                  <FiltroGenerosD />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header