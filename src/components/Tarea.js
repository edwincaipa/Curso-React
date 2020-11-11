import React from 'react';
import '../styles/Tarea.css'
const Tarea = ({ id, titulo, descripcion, handleClick }) => {
  return (
      <>
        <div className="Texto1 ">
           <div className="equis" id={id} onClick={handleClick} title="Eliminar">
              <i className="fas fa-times" id={id} onClick={handleClick}>X</i>
             </div>
             
             <div className="contenedor-tarea">
             <h2 className="negrita">{titulo}</h2>
             <h5 className="negrita">{descripcion}</h5>
             </div>
         </div>
      </>
   );
}

export default Tarea;