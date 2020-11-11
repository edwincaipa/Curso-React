import React from 'react';
import { Link } from 'react-router-dom';
import edwin from '../images/edwin.png';
import bruja from '../images/bruja.png';


class Header extends React.Component {
  render() {
    return (

      <div className="Navegacion">
        <div className="Navegacion1">
          <Link to="/">
            <img className="Barra" src={edwin} />
          </Link>
          <h1 className="Marca">Hewtec</h1>
          <Link to="perfil">
            <img className="foto1" src={bruja} />
          </Link>

        </div>
      </div>

    )
  }

}

export default Header;