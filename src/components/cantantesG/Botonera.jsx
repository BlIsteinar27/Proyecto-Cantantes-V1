import React from 'react'
import { Link } from 'react-router-dom'

const Botonera = ({item}) => {
    return (
        <>
            <Link to={`/cantantesg/${item.id}`} href="#" className='btn btn-outline-info me-2'style={{ textTransform: 'capitalize' }}>
                {item.nombre}
            </Link>
        </>
    )
}

export default Botonera