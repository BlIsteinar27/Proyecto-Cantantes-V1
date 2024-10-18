import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">
                <div className="container py-5">
                    <div className="row g-5">
                        {/* Sección de Música Latina */}
                        <div className="col-md-6 col-lg-3">
                            <div className="footer-item d-flex flex-column h-100">
                                <h3 className="text-white mb-4">
                                    <i className="bi bi-music-note-list text-primary me-3" />
                                    Latin music
                                </h3>
                                <p className="mb-3 ">Conoce acerca un poco de la Musica Latina.</p>
                            </div>
                        </div>
                        {/* Sección de Páginas */}
                        <div className="col-md-6 col-lg-3">
                            <div className="footer-item d-flex flex-column h-100">
                                <h4 className="text-white mb-4">Páginas</h4>
                                <Link to="/inicio" href="#"><i className="fas fa-angle-right me-2" />Inicio</Link>
                                <Link to="/cantantesg/1" href="#AcercaDe"><i className="fas fa-angle-right me-2" />Cantantes</Link>
                                <Link to="/discografiasg/1" href="#"><i className="fas fa-angle-right me-2" />Discografias</Link>

                            </div>
                        </div>
                        {/* Sección de Información de Contacto */}
                        <div className="col-md-6 col-lg-3">
                            <div className="footer-item d-flex flex-column h-100">
                                <h4 className="text-white mb-4">Contacto</h4>
                                <a href="#"><i className="fa fa-map-marker-alt me-2" /> San Diego, Carabobo, Venezuela</a>
                                <a href="#"><i class="fa fa-user me-2"></i>Desarrollador : Jose Roman</a>
                            </div>
                        </div>
                        {/* Sección de Redes Sociales */}
                        <div className="col-md-6 col-lg-3 ">
                            <div className="footer-item d-flex flex-column h-100">
                                <h4 className="text-white mb-4">Redes</h4>
                                <div className="d-flex flex-wrap justify-content-center justify-content-lg-start footer-btn"> {/* Añadido footer-btn */}
                                    {/* Cada ícono se coloca en un botón */}
                                    <a className="btn btn-secondary btn-md-square rounded-circle me-2 mb-2" href="https://github.com/BlIsteinar27/">
                                        <i className="fab fa-github" />
                                    </a>
                                    <a className="btn btn-secondary btn-md-square rounded-circle me-2 mb-2" href="#">
                                        <i className="fab fa-linkedin-in" />
                                    </a>
                                    <a className="btn btn-secondary btn-md-square rounded-circle me-2 mb-2" href="#">
                                        <i className="fab fa-instagram" />
                                    </a>
                                    <a className="btn btn-secondary btn-md-square rounded-circle me-2 mb-2" href="#">
                                        <i className="fab fa-discord" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer