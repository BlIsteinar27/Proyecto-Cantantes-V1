import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({item}) => {
    return (
        <>
            <div className="col-md-4 col-lg-3 mb-4" >
                <div className="card h-100" data-bs-theme="dark">
                    <div className="card-header p-0">
                        <img src={`https://zdwvswsddzfuazzvtifv.supabase.co/storage/v1/object/public/img/cantantes/${item.foto}`} alt={item.nombre} className="img-fluid" />
                    </div>
                    <div className="card-body text-center">
                        <h5>{item.nombre}</h5>
                        <p className="text-success">{item.notas}</p>
                    </div>
                    <div className="card-footer text-center">
                        <Link to={`/detallec/${item.id}`} className="btn btn-outline-danger btn-sm mx-1">Ver mas informacion</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card