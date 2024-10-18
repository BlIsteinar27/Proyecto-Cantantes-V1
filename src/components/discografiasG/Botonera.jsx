import React from 'react'
import { Link } from 'react-router-dom'

const Botonera = ({ item }) => {
  return (
    <>
      <Link to={`/discografiasg/${item.id}`} href="#" className='btn btn-outline-primary me-2' style={{ textTransform: 'capitalize' }}>
        {item.nombre}
      </Link>
    </>
  )
}

export default Botonera