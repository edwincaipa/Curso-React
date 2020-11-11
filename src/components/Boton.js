import React from 'react'
import '../styles/boton.css'
import boton from '../images/Boton.png';
import { 
      Link 
} from "react-router-dom";
const  Boton = () => {
      return (
         <Link to="/crear-tarea">
            <div>
             <img className="boton" src={boton}/>
            </div>
         </Link>
      );
   }
   
   export default Boton ;