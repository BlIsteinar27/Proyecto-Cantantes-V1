import React from 'react'

const Perfil = () => {
    return (
        <>
            <div className="container-fluid team pb-3">
                <div className="container pb-3">
                    <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: 800 }}>
                        <h4 className="text-primary">Our Team</h4>
                        <h1 className="display-5 mb-4">Meet Our Advisers</h1>
                        <p className="mb-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur adipisci facilis cupiditate recusandae aperiam temporibus corporis itaque quis facere, numquam, ad culpa deserunt sint dolorem autem obcaecati, ipsam mollitia hic.
                        </p>
                    </div>
                    <div className="row g-4 text-center">
                        <div className="col-md-12 col-lg-12  wow fadeInUp" data-wow-delay="0.2s">
                            <div className="team-item">
                                <div className="team-img">
                                    <img src="/src/assets/img/team-1.jpg" className="img-fluid" alt />
                                </div>
                                <div className="team-title">
                                    <h4 className="mb-0">David James</h4>
                                    <p className="mb-0">Profession</p>
                                </div>
                                <div className="team-icon">
                                    <a className="btn btn-primary btn-sm-square rounded-circle me-3" href><i className="fab fa-facebook-f" /></a>
                                    <a className="btn btn-primary btn-sm-square rounded-circle me-3" href><i className="fab fa-twitter" /></a>
                                    <a className="btn btn-primary btn-sm-square rounded-circle me-3" href><i className="fab fa-linkedin-in" /></a>
                                    <a className="btn btn-primary btn-sm-square rounded-circle me-0" href><i className="fab fa-instagram" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Perfil