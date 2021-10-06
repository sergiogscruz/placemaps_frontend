import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Cabecalho from './components/Cabecalho/cabecalho';
import Entrar from './components/Entrar/entrar';
import Cadastrar from './components/Cadastrar/cadastrar';
import Footer from "./components/footer/Footer";
import FeedbackPlataforma from "./components/FeedbackPlataforma/FeedbackPlataforma";
import ImagemFeedBack from "./components/UI/imagens/Ellipse3.png"
import Carrossel from "./components/UI/Utils/Carrossel/Carrossel";
import PaginaInicial from "./components/PaginaInicial/PaginaInicial";
import Navbar from './components/Navbar/navbar';

const FeedBacks = [
  <FeedbackPlataforma nome="Amanda Franco" srcimg={ImagemFeedBack} data="Seg 29 Abril, 2021" texto="Era um restaurante muito bom e com uma comida muito saborosa. O comportamento da equipe foi bom e educado. Eles nos recebem muito bem. A localização é de agrado e fica bem localizado. No geral foi uma boa experiência e poderia recomendar, sem problemas." />,
  <FeedbackPlataforma nome="Pedro Henrique" srcimg={ImagemFeedBack} data="Seg 29 Abril, 2021" texto="Eles nos recebem muito bem. A localização é de agrado e fica bem localizado. No geral foi uma boa experiência e poderia recomendar, sem problemas." />,
  <FeedbackPlataforma nome="Guilherme Atilio" srcimg={ImagemFeedBack} data="Seg 9 Abril, 2022" texto="Eles nos recebem muito bem. A localização é de agrado e fica bem localizado. No geral foi uma boa experiência e poderia recomendar, sem problemas." />,
  <FeedbackPlataforma nome="Thiago Damaceno" srcimg={ImagemFeedBack} data="Seg 29 Abril, 2021" texto="O comportamento da equipe foi bom e educado. Eles nos recebem muito bem. A localização é de agrado e fica bem localizado. No geral foi uma boa experiência e poderia recomendar, sem problemas." />
]

let routes = (
  <Router>
    <Switch>
      <Route exact path="/">
        <Cabecalho />
        <Navbar/>
        <div>Todas as opcoes</div>
        <PaginaInicial/>
        <Carrossel titulo="O QUE AS PESSOAS PENSAM SOBRE NÓS" itens={FeedBacks} />
        <Footer />
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
        <Cadastrar></Cadastrar>
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
