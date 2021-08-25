import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Cabecalho from './components/Cabecalho/cabecalho';
import Entrar from './components/Entrar/entrar';

let routes = (
  
  <Router>
    <Switch>
      <Route exact path="/">
        <Cabecalho></Cabecalho>
        <div>Todas as opções</div>
      </Route>
      <Route path="/pontosturisticos">
        <Cabecalho></Cabecalho>
        <div>Pontos Turisticos</div>
      </Route>
      <Route path="/restaurantes">
        <Cabecalho></Cabecalho>
        <div>Restaurantes</div>
      </Route>
      <Route path="/shoppings">
        <Cabecalho></Cabecalho>
        <div>Shoppings</div>
      </Route>
      <Route path="/eventos">
        <Cabecalho></Cabecalho>
        <div>Proximos Eventos</div>
      </Route>
      <Route path="/contatos">
        <Cabecalho></Cabecalho>
        <div>Contatos</div>
      </Route>
      <Route path="/hoteis">
        <Cabecalho></Cabecalho>
        <div>Hoteis</div>
      </Route>
      <Route path="/entrar">
        <Entrar></Entrar>
      </Route>
      <Route path="/cadastrar">
        <div>CADASTRAR</div>
      </Route>
    </Switch>
  </Router>
);

function App() {
  return (
    routes
  );
}

export default App;
