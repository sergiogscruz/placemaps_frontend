import React, { useState,setState } from 'react';
import './entrar.css';
import { ImQuotesLeft }  from 'react-icons/im';
import Input from '../UI/Utils/Input/Input';
import Botao from '../UI/Utils/Botao/Botao';
import { Link } from 'react-router-dom';

export default function Entrar() {
  const [inputEmail, setInputEmail] = useState('');
  const [inputSenha, setInputSenha] = useState('');

  return (
    <div className="pm-entrar-conteudo">
      <div className="pm-entrar-info">
        <div className="pm-entrar-logo">
          <div className="pm-logo-words">
            <span style={{color: "#EC1F46"}}>PLACE </span>
            <span style={{color: "#EFE5E5"}}>MAPS</span>
          </div>
        </div>
        <div className="pm-depoimento">
          <div className="pm-depoimento-content">
            <ImQuotesLeft size= "2em" style={{color: "#fff", marginBottom: '10px'}}/>
            <p style={{color: "#f5ececcc"}}><i>PlaceMaps é uma plataforma que integra a demanda e oferta da cidade, é sensacional!</i></p>
            <p style={{color: "#EC1F46"}}><strong>Pedro Henrique</strong></p>
            <div className="pm-img-world"></div>
          </div>
        </div>
      </div>
      <div className="pm-entrar-credenciais">
          <div className="pm-center">
            <div className="pm-credenciais-acesso">Acesse sua conta</div>
            <div className="pm-credenciais-input">
              <label>Seu email</label>
              <Input setStatePai={setInputEmail} placeholder="Informe seu email"></Input>
            </div>
            <div className="pm-credenciais-input">
              <label>Senha</label>
              <Input type="password" placeholder="Informe sua senha" setStatePai={setInputSenha}></Input>
            </div>
            <div className="pm-esquece-senha">
              <a onClick={()=> {}}>
                <strong>Esqueceu a senha?</strong>
              </a>
            </div>
            <div >
              <Botao className="pm-credenciais-botao" children="Entrar" onClick={()=> {}}></Botao>
            </div>
            <Link to="/cadastrar" style={{textDecoration: "none", marginTop: "20px"}}>Faça seu cadastro</Link>
          </div>
      </div>
    </div>
  )
}
