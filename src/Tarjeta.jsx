import React from 'react'

function Tarjeta({imagen, nombre, rol}) {
  return (
    <div id='Tarjeta' className='tarjetas-container'>
     <img src={imagen} alt="" /> 
     <h3>Nombre: {nombre}</h3>
     <h3>Rol: {rol}</h3>
     <button>Boton</button>
    </div>
  )
}

export default Tarjeta
