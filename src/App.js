import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Cabecalho from './components/Cabecalho/cabecalho';
import ListaDescritiva from "./components/UI/Utils/ListaDescritiva/ListaDescritiva";

const itensListaDescritiva = [
  {
    texto: 'Item 1',
    preco: '12,00',
  },
  {
    texto: 'Item 2',
    preco: '2,00',
  },
  {
    texto: 'Item 3',
    preco: '10,75',
  },
]

let routes = (
  <Router>
    <Cabecalho />
    <Switch>
      <Route exact path="/">   
        <ListaDescritiva className="w-75" titulo="Titulo" itens={itensListaDescritiva} considerarPreco={true}/>
        <ListaDescritiva className="w-50 my-5" titulo="Titulo" itens={itensListaDescritiva} considerarPreco={true}/>
        <ListaDescritiva className="w-50 my-5" titulo="Titulo" itens={itensListaDescritiva} considerarPreco={true}/>
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
