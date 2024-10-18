import React from 'react'
import { Link } from 'react-router-dom'

const GenerosP = () => {
    return (
        <>
            <div className="container-fluid service service-bg-section pb-5">
                <div className="container pb-5">
                    <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: 800 }}>
                        <h4 className="text-primary py-4">Generos populares</h4>
                        <h1 className="display-5 mb-4">Te presentamos tres de los estilos más queridos: la salsa, la bachata y el merengue.</h1>
                        <p className="mb-0">
                            El mundo de la música latina es vasto y diverso, lleno de ritmos y melodías que reflejan la rica herencia cultural de las comunidades hispanohablantes.
                        </p>
                    </div>
                    <div className="row g-4">
                        <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.2s">
                            <div className="service-item">
                                <div className="service-img">
                                    <img src="https://zdwvswsddzfuazzvtifv.supabase.co/storage/v1/object/public/img/salsa.jpg" className="img-fluid rounded-top w-100" alt="Image" />
                                </div>
                                <div className="rounded-bottom p-4">
                                    <a href="#" className="h4 d-inline-block mb-4"> Salsa</a>
                                    <p className="mb-4">
                                        <b>Salsa: El Ritmo del Baile</b><br />
                                        La salsa es sin duda uno de los géneros más emblemáticos de la música latina. Originada en las comunidades caribeñas, especialmente en Cuba y Puerto Rico, este estilo musical combina elementos de jazz y son cubano, creando un ritmo contagioso que invita a todos a moverse.
                                    </p>
                                    <Link to="/cantantesg/1" className="btn btn-primary rounded-pill py-2 px-4" href="#">Ver Cantantes del genero</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.4s">
                            <div className="service-item">
                                <div className="service-img">
                                    <img src="https://zdwvswsddzfuazzvtifv.supabase.co/storage/v1/object/public/img/bachata.jpg" className="img-fluid rounded-top w-100" alt="Image" />
                                </div>
                                <div className="rounded-bottom p-4">
                                    <a href="#" className="h4 d-inline-block mb-4">Bachata</a>
                                    <p className="mb-4">
                                        <b>Bachata: Pasión y Romance</b><br />
                                        La bachata es otro de los géneros más queridos de la música latina. Nacida en la República Dominicana, este estilo musical evoca emociones profundas a través de sus letras románticas y melodías melancólicas. Con guitarras suaves y ritmos cautivadores.
                                    </p>
                                    <Link to="/cantantesg/2" className="btn btn-primary rounded-pill py-2 px-4" href="#">Ver Cantantes del genero</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.6s">
                            <div className="service-item">
                                <div className="service-img">
                                    <img src="https://zdwvswsddzfuazzvtifv.supabase.co/storage/v1/object/public/img/merengue.jpg" className="img-fluid rounded-top w-100" alt="Image" />
                                </div>
                                <div className="rounded-bottom p-4">
                                    <a href="#" className="h4 d-inline-block mb-4">Merengue</a>
                                    <p className="mb-4">
                                        <b>Merengue: Fiesta y Alegría</b><br />
                                        El merengue se presenta como uno de los géneros más festivos y animados de la música latina. Originario de la República Dominicana, su ritmo rápido y letras alegres lo convierten en el alma de cualquier fiesta.
                                    </p>
                                    <Link to="/cantantesg/3" className="btn btn-primary rounded-pill py-2 px-4" href="#">Ver Cantantes del genero</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GenerosP