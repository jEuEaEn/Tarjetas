import React from 'react'

function Tarjeta({imagen, nombre, rol, boton}) {
  return (
    <div id='Tarjeta'>
     <img src={imagen} alt="" /> 
     <h3>Nombre: {nombre}</h3>
     <h3>Rol: {rol}</h3>
     <button onClick={boton}>Hola</button>
    </div>
  )
}

export default Tarjeta
