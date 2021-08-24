import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Cabecalho from './components/Cabecalho/cabecalho';
import Botao from "./components/UI/Utils/Botao/Botao";
import { GiSeaCreature } from 'react-icons/gi/index'
let routes = (
  
  <Router>
    <Cabecalho />
    <Switch>
      <Route exact path="/">
        <Botao onClick={() => alert('Click no botão')}>
          <GiSeaCreature />
        </Botao>
        <div>Todas as opções</div>
      </Route>
      <Route path="/pontosturisticos">
        <div>Pontos Turisticos</div>
      </Route>
      <Route path="/restaurantes">
        <div>Restaurantes</div>
      </Route>
      <Route path="/shoppings">
        <div>Shoppings</div>
      </Route>
      <Route path="/eventos">
        <div>Proximos Eventos</div>
      </Route>
      <Route path="/contatos">
        <div>Contatos</div>
      </Route>
      <Route path="/hoteis">
        <div>Hoteis</div>
      </Route>
      <Route>
        <div>Todas as opções</div>
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
