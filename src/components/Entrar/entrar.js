import React, { useState,setState } from 'react';
import './entrar.css';
import { ImQuotesLeft }  from 'react-icons/im';
import world from '../UI/imagens/world.png';
import Input from '../UI/Utils/Input/Input';
import Botao from '../UI/Utils/Botao/Botao';

export default function Entrar() {
  const [inputEmail, setInputEmail] = useState('');
  const [inputSenha, setInputSenha] = useState('');

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
            <ImQuotesLeft size= "2em" style={{color: "#fff", marginBottom: '10px'}}/>
            <p style={{color: "#f5ececcc", fontFamily: "'Mulish', sans-serif;"}}><i>PlaceMaps é uma plataforma que integra a demanda e oferta da cidade, é sensacional!</i></p>
            <p style={{color: "#EC1F46", fontFamily: "'Mulish', sans-serif;"}}><stong>Pedro Henrique</stong></p>
            <div className="pm-img-world"></div>
          </div>
        </div>
      </div>
      <div className="pm-entrar-credenciais">
          <div className="pm-center">
            <div className="pm-credenciais-acesso">Acesse sua conta</div>
            <div className="pm-credenciais-input">
              <label>Seu email</label>
              <Input setStatePai={setInputEmail}></Input>
            </div>
            <div className="pm-credenciais-input">
              <label>Senha</label>
              <Input type="password" setStatePai={setInputSenha}></Input>
            </div>
            <div className="pm-esquece-senha">
              <a>
                <stong>Esqueceu a senha?</stong>
              </a>
            </div>
            <div >
              <Botao className="pm-credenciais-botao" children="Entrar"></Botao>
            </div>
            <a className="pm-credenciais-cadastro">
              <stong>Faça seu cadastro</stong>
            </a>
          </div>
      </div>
    </div>
  )
}
