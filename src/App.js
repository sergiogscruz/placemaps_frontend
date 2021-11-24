import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Cabecalho from './components/Cabecalho/cabecalho';
import Entrar from './components/Entrar/entrar';
import Cadastrar from './components/Cadastrar/cadastrar';

import ContainerBackground from './components/UI/Utils/ContainerBackground/ContainerBackground';
import Footer from "./components/Footer/Footer";
import FeedbackPlataforma from "./components/FeedbackPlataforma/FeedbackPlataforma";
import ImagemFeedBack from "./components/UI/imagens/Ellipse3.png"
import ImagemWill from './components/UI/imagens/will.jpg'
import ImagemCarl from './components/UI/imagens/carl.jpeg'
import Carrossel from "./components/UI/Utils/Carrossel/Carrossel";
import PaginaInicial from "./components/PaginaInicial/PaginaInicial";
import Navbar from './components/Navbar/navbar';
import Perfil from "./components/Perfil/Perfil";
import BarraLateralProprietario from "./components/BarraLateralProprietario/BarraLateralProprietario";
import DashboardProprietario from "./components/DashboardProprietario/DashboardProprietario";
import ContainerProprietario from "./components/UI/Utils/ContainerProprietario/ContainerProprietario";
import GestaoPontosProprietario from "./components/GestaoPontosProprietario/GestaoPontosProprietario";
import { AxiosHelper } from "./components/services/api";
import PedidoCadastro from "./components/PedidoCadastro/pedido-cadastro";

const FeedBacks = [
  <FeedbackPlataforma nome="Amanda Franco" srcimg={ImagemFeedBack} data="Seg 29 Abril, 2021" texto="É um restaurante muito bom e com uma comida muito saborosa. O comportamento da equipe foi bom e educado. Eles nos recebem muito bem. A localização é de agrado e fica bem localizado. No geral foi uma boa experiência e poderia recomendar, sem problemas." />,
  <FeedbackPlataforma nome="Will" srcimg={ImagemWill} data="Seg 29 Abril, 2021" texto="Eles nos recebem muito bem. A localização é de agrado e fica bem localizado. No geral foi uma boa experiência e poderia recomendar, sem problemas." />,
  <FeedbackPlataforma nome="Carl" srcimg={ImagemCarl} data="Seg 29 Abril, 2021" texto="O comportamento da equipe foi bom e educado. Eles nos recebem muito bem. A localização é de agrado e fica bem localizado. No geral foi uma boa experiência e poderia recomendar, sem problemas." />
]

let routes = (
  <Router>
    <Switch>
      <Route exact path="/">
        <Navbar/>
        <PaginaInicial/>
        <Carrossel titulo="O QUE AS PESSOAS PENSAM SOBRE NÓS" itens={FeedBacks} />
        <Footer />
      </Route>
      <Route path="/perfil/:uuid">
        <ContainerBackground >
          <Navbar />
          <Perfil />
          <Carrossel titulo="O QUE AS PESSOAS PENSAM SOBRE NÓS" itens={FeedBacks} />
          <Footer />
        </ContainerBackground >
      </Route>
      <Route path="/lista/:nome">
        <Navbar/>
        <PaginaInicial/>
        <Footer />
      </Route>
      <Route path="/entrar">
        <Entrar></Entrar>
      </Route>
      <Route path="/cadastrar">
        <Cadastrar></Cadastrar>
      </Route>
      <Route path="/ser-proprietario">
        <PedidoCadastro></PedidoCadastro>
      </Route>
      <Route path="/proprietario/dashboard">
        <div className="d-flex">
          <BarraLateralProprietario caminhoRaiz="/proprietario" item={0} />
          <ContainerProprietario titulo="Seja bem vindo">
            <DashboardProprietario />
          </ContainerProprietario>
        </div>
      </Route>
      <Route path="/proprietario/pontos">
        <div className="d-flex">
          <BarraLateralProprietario caminhoRaiz="/proprietario" item={1} />
          <ContainerProprietario titulo="Meus Pontos">
            <GestaoPontosProprietario />
          </ContainerProprietario>
        </div>
      </Route>
      <Route path="/proprietario/avaliacoes">
        <div className="d-flex">
          <BarraLateralProprietario caminhoRaiz="/proprietario" item={2} />
          <ContainerProprietario titulo="Minhas avaliações">
            
          </ContainerProprietario>
        </div>
      </Route>
      <Route path="/proprietario/comentarios">
        <div className="d-flex">
          <BarraLateralProprietario caminhoRaiz="/proprietario" item={3} />
          <ContainerProprietario titulo="Comentários">
            
          </ContainerProprietario>
        </div>
      </Route>
      <Route path="/proprietario/configuracoes">
        <div className="d-flex">
          <BarraLateralProprietario caminhoRaiz="/proprietario" item={4} />
          <ContainerProprietario titulo="Configurações">
            
          </ContainerProprietario>
        </div>
      </Route>
    </Switch>
  </Router>
);

function App() {
  AxiosHelper.initializeAxios()

  return (
    routes
  );
}

export default App;
