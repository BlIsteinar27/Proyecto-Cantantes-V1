import { MusicNote, MusicNotes } from 'phosphor-react'
import React from 'react'



const Features = () => {
    return (
        <>
            <div className="container-fluid text-center feature pb-5">
                <div className="container pb-5">
                    <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: 800 }}>
                        <h4 className="text-primary">Caracteristicas</h4>
                        <h1 className="display-5 mb-4">Cada uno de estos estilos no solo representa una forma de expresión musical, sino también una rica herencia cultural.</h1>
                        <p className="mb-0">
                            Exploramos tres géneros vibrantes y llenos de ritmo que son fundamentales en la música latina: <b>salsa, bachata y merengue.</b>
                        </p>
                    </div>
                    <div className="row g-4">
                        <div className="col-md-6 col-lg-4 col-xl-4 wow fadeInUp" data-wow-delay="0.2s">
                            <div className="feature-item p-4">
                                <div className="feature-icon p-4 mb-4">
                                    <i className=" text-primary" ><MusicNote size={100} /></i>
                                </div>
                                <h4>Salsa</h4>
                                <p className="mb-4">La <b>salsa</b> es un género dinámico que combina ritmos afrocaribeños con influencias jazzísticas y latinas. Originaria de ...
                                </p>
                                <a className="btn btn-primary rounded-pill py-2 px-4" href="#">Ver Mas</a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-xl-4 wow fadeInUp" data-wow-delay="0.4s">
                            <div className="feature-item p-4">
                                <div className="feature-icon p-4 mb-4">
                                    <i className=" text-primary" ><MusicNotes size={100} /></i>
                                </div>
                                <h4>Bachata</h4>
                                <p className="mb-4">La <b>bachata</b> , que emergió en la República Dominicana en los años 60, es un género romántico que fusiona elementos del...
                                </p>
                                <a className="btn btn-primary rounded-pill py-2 px-4" href="#">Ver mas</a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-xl-4 wow fadeInUp" data-wow-delay="0.6s">
                            <div className="feature-item p-4">
                                <div className="feature-icon p-4 mb-4">
                                    <i className=" text-primary" ><MusicNote size={100} /></i>
                                </div>
                                <h4>Merengue</h4>
                                <p className="mb-4">El <b>merengue</b>, otro pilar de la música dominicana, es conocido por su ritmo rápido y pegajoso que invita a bailar. Este género se caracteriza por...
                                </p>
                                <a className="btn btn-primary rounded-pill py-2 px-4" href="#">Ver mas</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Features