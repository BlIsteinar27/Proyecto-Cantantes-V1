import React from 'react'
import { Link } from 'react-router-dom'

const CardD = ({ item }) => {
    return (
        <>
            <div className="col-md-4 col-lg-3 mb-4" >
                <div className="card h-100" data-bs-theme="dark">
                    <div className="card-header p-0">
                        <img src={`https://zdwvswsddzfuazzvtifv.supabase.co/storage/v1/object/public/img/discografias/${item.id}.png`} alt="" className="img-fluid" />
                    </div>
                    <div className="card-body text-center">
                        <h5>{item.titulo}</h5>        
                    </div>
                    <div className="card-footer text-center">
                        <Link to={`/detalled/${item.id}`} href="#" className='btn btn-outline-danger btn-sm me-2'>Ver canciones</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardD