import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CartWidget from "./components/CartWidget";
import Contacto from "./components/Contacto";
import Nabvar from "./components/Nabvar";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import ItemListContainer from "./containers/ItemListContainer";




function App() {
  return (
    <BrowserRouter>
      <Nabvar /> 
      <Switch>
        <Route exact path='/' component={ItemListContainer} />
        <Route exact path='/categoria/:idCategoria' component={ItemListContainer} />
        <Route exact path='/detalle/:id' component={ItemDetailContainer} />
        <Route exact path='/carrito' component={CartWidget} />
        <Route exact path='/contacto' component={Contacto} />
      </Switch>
    </BrowserRouter>
  );
}


export default App;
