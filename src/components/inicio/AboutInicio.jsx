import React from 'react'

const AboutInicio = () => {
    return (
        <>
            <div  className="container-fluid about py-2">
                <div className="container py-5">
                    <div className="row g-5 align-items-center">
                        <div className="col-xl-7 wow fadeInLeft" data-wow-delay="0.2s">
                            <div>
                                <h4 className="text-primary">Acerca de</h4>
                                <h1 className="display-5 mb-4">Conoce acerca un poco de la Musica Latina</h1>
                                <p className="mb-4">
                                    Es un vibrante y diverso conjunto de géneros que refleja la rica herencia cultural y las tradiciones de los países de habla hispana y las comunidades latinas en todo el mundo. Desde los ritmos contagiosos de la salsa hasta las melodías románticas de la bachata y la energía festiva del merengue, la música latina ha conquistado corazones y ha dejado una huella indeleble en la escena musical global.
                                </p>
                                <div className="row g-4">
                                    <div className="col-md-6 col-lg-6 col-xl-6">
                                        <div className="d-flex">
                                            <div><i className="bi bi-brush fa-3x text-primary" /></div>
                                            <div className="ms-4">
                                                <h4>Explora el arte</h4>
                                                <p>Aunque muchos no lo crean, la musica pertenece al mundo artistico</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 col-xl-6">
                                        <div className="d-flex">
                                            <div><i className="bi bi-music-note fa-3x text-primary" /></div>
                                            <div className="ms-4">
                                                <h4>El arte de la musica</h4>
                                                <p>La musica puede ser un comienzo de algo magico.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <a href="#" className="btn btn-primary rounded-pill py-3 px-5 flex-shrink-0">Leer mas</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 wow fadeInRight" data-wow-delay="0.2s">
                            <div className="bg-primary rounded position-relative overflow-hidden">
                                <img src="https://zdwvswsddzfuazzvtifv.supabase.co/storage/v1/object/public/img/about2.png" className="img-fluid rounded w-100" alt="" />
                                
                                
                                
                                <div className="rounded-bottom">
                                    <img src="https://zdwvswsddzfuazzvtifv.supabase.co/storage/v1/object/public/img/about.png" className="img-fluid rounded-bottom w-100" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutInicio