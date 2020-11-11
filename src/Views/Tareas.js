import React, { useEffect, useState } from 'react'
import Header from '../components/Header';
import Boton from '../components/Boton';
import Tarea from '../components/Tarea';


const Tareas = () => {

   const [tareas, setTareas] = useState([]);
   const [bandera, setBandera] = useState(false)
   useEffect(() => {
      if (!bandera) {
         const consulta = JSON.parse(localStorage.getItem('tareas'));
         if (consulta) {
            setTareas(
               consulta
            )
         } else { localStorage.setItem('tareas', '[]'); }
         setBandera(true)
      }
   }, [tareas, bandera])

   const handleClick = e => {
      const filtrado = tareas.filter(tarea => (tarea.id !== e.target.id))
      localStorage.setItem('tareas', JSON.stringify(filtrado));
      setTareas(filtrado)
   }

   return (
      <>
         <Header />
         <Boton />
         <div>
            {tareas.length === 0 ?
               <h1 className="negrita no-tareas">No hay tareas registradas</h1>
               :
               tareas.map(tarea => (
                  <Tarea
                     id={tarea.id}
                     key={tarea.id}
                     titulo={tarea.titulo}
                     descripcion={tarea.descripcion}
                     handleClick={handleClick}

                  />

               ))

            }


         </div>
      </>
   );
}
export default Tareas;