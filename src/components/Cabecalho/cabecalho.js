import React, { useState,setState } from 'react';
import { Link } from 'react-router-dom';
import './cabecalho.css';
import bandEua from '../UI/imagens/band-eua.png';
import bandBra from '../UI/imagens/band-brasil.png';
import search from '../UI/imagens/search.svg';

export default function Cabecalho() {
  const [inputPesquisa, setInputPesquisa] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    alert("Ops! Ainda não foi implementado essa função");
  }

  function handleChange (e) {
    setInputPesquisa(e.target.value)
  }

  
  return (
    <>
      <div className="pm-cabecalho-info">   
        <div className="pm-cabecalho-info-conteudo">
          <div className="pm-cabecalho-info-duvida">
            <span>Dúvidas? Precisa de ajuda?</span> Entre em contato com a gente (44) 9999-9999
          </div>
          <div className="pm-cabecalho-idioma">
            <img height="19px" width="28px" src={bandBra} alt="Brasil" />
            <img height="19px" width="28px" src={bandEua} alt="Usa" />
          </div>
        </div>
      </div>
      <div className="pm-cabecalho">
        <div className="pm-cabecalho-conteudo">
          <div className="pm-logo">
            <span style={{color: "#EC1F46"}}>PLACE </span>
            <span style={{color: "#333333"}}>MAPS</span>
          </div>
          <div>
            <form className="pm-pesquisa" onSubmit={handleSubmit}>
              <input type="text" onChange={handleChange} placeholder="Pesquise por local"></input>
              <button className="pm-pesquisa-search" type="submit">
                <img src={search}></img>
              </button>
            </form>
          </div>
          <div>
            <Link to="/entrar" className="pm-cabecalho-entrar">Entrar</Link>
            <Link to="/cadastrar" className="pm-cabecalho-cadastrar">Cadastrar</Link>
          </div>
        </div>
      </div>
    </>

  )
}
