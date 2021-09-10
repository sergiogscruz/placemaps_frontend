import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Cabecalho from './components/Cabecalho/cabecalho';
import IconeComValor from "./components/UI/Utils/IconeComValor/IconeComValor";
import { AiOutlineCalendar } from 'react-icons/ai'
import Entrar from './components/Entrar/entrar';
import Footer from "./components/footer/Footer";
import Abas from "./components/UI/Utils/Abas/Abas";
import ListaDescritiva from './components/UI/Utils/ListaDescritiva/ListaDescritiva'

const conteudosAbas = [
  {
    titulo: "Seg",
    conteudo: 
      <p>
        Nunc porttitor risus porta cubilia viverra nostra est Nunc porttitor risus porta cubilia viverra nostra estNunc porttitor risus porta cubilia viverra nostra est Nunc porttitor risus porta cubilia viverra nostra estNunc porttitor risus porta cubilia viverra nostra estNunc porttitor risus porta cubilia viverra nostra est
      </p>
  },
  {
    titulo: "Ter",
    conteudo: 
      <ListaDescritiva titulo="Teste" itens={[{texto: "item 1"}, {texto: "item 2"}, {texto: "item 3"}, {texto: "item 4"}]}/>
  },
  {
    titulo: "Qua",
    conteudo: 
      <p>
        Odio justo odio bibendum torquent ullamcorper odio
      </p>
  },
  {
    titulo: "Qui",
    conteudo: 
      <p>
        Odio justo odio bibendum torquent ullamcorper odio
      </p>
  },
  {
    titulo: "Sex",
    conteudo: 
      <p>
        Odio justo odio bibendum torquent ullamcorper odio
      </p>
  },
  {
    titulo: "Sab",
    conteudo: 
      <p>
        Odio justo odio bibendum torquent ullamcorper odio
      </p>
  },
  {
    titulo: "Dom",
    conteudo: 
      <p>
        Odio justo odio bibendum torquent ullamcorper odio
      </p>
  }
]

let routes = (
  <Router>
    <Switch>
      <Route exact path="/">
        <Cabecalho/>
        <div>Todas as opcoes</div>
        <IconeComValor valor="3" onClick={ () => alert('Click no calendario') } pxEsquerdaValor="-15"> 
          <AiOutlineCalendar size="2em"/>
        </IconeComValor>

        <Abas className="mx-5 w-75" abas={conteudosAbas} />
        <Footer/>  
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
