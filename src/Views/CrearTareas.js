import React, { useState } from 'react';
import Error from '../components/Error';
import Header from '../components/Header';

import '../styles/nuevatarea.css'
import { nanoid } from 'nanoid'


    
        const CrearTareas = ({ history }) => {
     
        const [bandera, setBandera] = useState(false)
        const [tarea, setTarea] = useState({
            id: nanoid(),
            titulo:'',
            descripcion:''
        })


        const { titulo, descripcion } = tarea
        const handleChange = e => {
            setTarea({
                ...tarea,
                [e.target.name]: e.target.value
            })
        }

        const handleSubmit = e => {
            e.preventDefault();
            if (titulo.trim === '' || descripcion.trim() === ''){
                setBandera(true);
                return;
            }
            
        
            const vectorTarea = JSON.parse(localStorage.getItem("tareas"));
            vectorTarea.push(tarea)
            localStorage.setItem('tareas', JSON.stringify(vectorTarea));
            history.push('/tarea')
        }
    
                   return (
                    <>
                    <Header />
                   
                    <div>
                    <div className="altura">
                        {bandera ? <Error mensaje='Todos los campos son requeridos' />:null}
                            <form className="formulario" onSubmit={handleSubmit}>
                            <label className="text-crear">Nombre Tarea</label><br></br>
                            <input type="text" className="input-crear" name="titulo" onChange={handleChange} /><br></br> <br></br>
                            <label className="text-crear">Descripción de Tarea</label>
                            <input type="text" className="input-crear" name="descripcion" onChange={handleChange} /><br></br> <br></br>
                            <button type="submit" className="boton-crear">GUARDAR TAREA</button>
                        </form>
                    </div>
                </div>
            </>
        );

      }
     
export default CrearTareas;