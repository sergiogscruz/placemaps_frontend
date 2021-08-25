import React from 'react';
import './entrar.css';
import { ImQuotesLeft }  from 'react-icons/im';
import world from '../UI/imagens/world.png'

export default function Entrar() {
  return (
    <div className="pm-entrar-conteudo">
      <div className="pm-entrar-info">
        <div className="pm-logo">
          <div className="pm-logo-words">
            <span style={{color: "#EC1F46"}}>PLACE </span>
            <span style={{color: "#EFE5E5"}}>MAPS</span>
          </div>
        </div>
        <div className="pm-depoimento">
          <div className="pm-depoimento-content">
            <ImQuotesLeft size= "2em" style={{color: "#fff"}}/>
            <p style={{color: "#f5ececcc", fontFamily: "'Mulish', sans-serif;"}}><i>PlaceMaps é uma plataforma que integra a demanda e oferta da cidade, é sensacional!</i></p>
            <p style={{color: "#EC1F46", fontFamily: "'Mulish', sans-serif;"}}><stong>Pedro Henrique</stong></p>
            <img src={world}></img>
          </div>
        </div>
      </div>
      <div className="pm-entrar-credenciais">
          <div className="pm-credenciais-acesso">Acesso</div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
      </div>
    </div>
  )
}
