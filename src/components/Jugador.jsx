import React from 'react'

const Jugador = ({nombre, listo}) => {
  return (
    <div className='d-flex border border-2'>
        <h3>{nombre}</h3>
        <p>{listo ? "Listo" : "No listo"}</p>
    </div>
  )
}

export default Jugador