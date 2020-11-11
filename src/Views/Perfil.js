import React, { Component } from 'react';
import Boton from '../components/Boton';
import '../styles/perfilstyles.css';
import { Link } from 'react-router-dom';
import Header from '../components/Header'

const Perfil = () => {
    
        return (

            <>
                <Header />
                <Boton />
                <form className="formulario-editar">
                <div className="form-group">
               <h4 className="text-editar">Nombre:</h4>
               <input type="text" className="form-control input-editar" disabled value="Edwin Caipa" />
                </div>
               <div className="form-group">
               <h4 className="text-editar">Apellidos:</h4>
               <input type="text" className="form-control input-editar" disabled value=" Caipa Ramirez" />
            </div>
            <div className="form-group">
               <h4 className="text-editar">Estudios:</h4>
               <input type="text" className="form-control input-editar" disabled value="Estudiante de Ing. de Sistemas" />
            </div>
            <div className="form-group">
               <h4 className="text-editar">Hobbits:</h4>
               <input type="text" className="form-control input-editar" disabled value="Comer, Leer ,Jugar" />
            </div>
             <Link to="/tarea">
               <button type="submit" className="boton-crear1">VER MIS TAREA</button>
            </Link>
         </form>
      </>
   );
}


export default Perfil;