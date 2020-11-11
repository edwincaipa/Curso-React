
import Home from './Views/Home';
import Tareas from './Views/Tareas';
import CrearTareas from './Views/CrearTareas';
import Perfil from './Views/Perfil';
import './styles/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>

        <Route exact path="/" component={Home} />

        <Route path="/tarea" component={Tareas} />

        <Route path="/crear-tarea" component={CrearTareas} />

        <Route path="/perfil" component={Perfil} />

      </Switch>
    </Router>
  );
}

export default App;
