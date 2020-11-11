import React from 'react';
import {
    Link
} from "react-router-dom";

import Header from '../components/Header';
import bruja from '../images/bruja.png';
import edwin from '../images/edwin.png';


class Home extends React.Component {
    render() {
        return (
            <>
                <Header />


                <div className="color row">
                    <div className="contenedor column">
                        <div className="Navegacion1 Navegacion2">
                            <img className="Barra" src={edwin} />
                            <h2 className="Marca Marca-1">Hewtec</h2>
                        </div>
                        <h1 className="texto texto-1">Bienvenidos</h1>
                        <h1 className="texto texto-2">Soy edwin</h1>
                        <Link to="tarea">
                            
                            <button className="Boton">START</button>
                        </Link>

                    </div>
                    <div className="contenedor column">
                        <img className="foto" src={bruja} />
                    </div>
                </div>

            </>
        )

    }

}

export default Home;