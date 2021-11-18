import React, { useState, useEffect } from 'react'
import './navbar.css';
import Api from '../services/api';
import {IoIosArrowDropright, IoIosArrowDropleft} from 'react-icons/io';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Botao from '../UI/Utils/Botao/Botao';

export default function Navbar() {  
  const [itensMenu, setItensMenu] = useState([]);

  const [itensList, setItensList] = useState('');

  let itensShow = [];

  useEffect(()=> {
    Api.get('api/public/categoria')
    .then((result)=> {
      setItensMenu(result.data)
    })
  }, [])

  useEffect(() => {
    setItensList(showItens());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itensMenu])

  function showItens() {
    let qtdItens = 5;
    let ItenMeio = Math.ceil(qtdItens/2)
    itensMenu.forEach((iten) => {
      if (itensShow.length < qtdItens) {
        let classMeio = {};
        if(itensShow.length + 1 === ItenMeio) {
          //classMeio.backgroundColor= "#EC1F46";
        }
        let path = "/lista/" + iten.nome
        itensShow.push((<NavLink to={path} key={iten.id} style={classMeio} className="pm-navbar-iten">{iten.nome}</NavLink>));
        //(<span key={iten.id} style={classMeio} onClick={() => console.log(iten.id)} className="pm-navbar-iten">{iten.nome}</span>)
      }
    });
    return ( <div className="pm-navbar-itens"> { itensShow } </div>);
  }

  function moveDir() {
    itensMenu.splice(itensMenu.length,0,itensMenu[0])
    itensMenu.shift();
    setItensList(showItens());
  }

  function moveEsq() {
    itensMenu.splice(0,0,itensMenu[itensMenu.length-1])
    itensMenu.pop();
    setItensList(showItens());
  }
    
  return (
    <div className="pm-navbar-container">
      <div className="container" style={{display: 'flex'}}>
        <div style={{width: '17.2%', display: 'flex', alignItems: 'center'}} className="pm-logo">
          <span style={{color: "#EC1F46", height: "32px", margin: '0 8px 0 0'}}>PLACE </span>
          <span style={{color: "#fff",height: "32px"}}>MAPS</span>
        </div>
        <div className="pm-navbar-btn-carousel">
          <IoIosArrowDropleft className="pm-btn-move pm-navbar-btn-esq" color="#fff" fontSize="30px" onClick={() => {moveDir()}}/>
          {itensList}
          <IoIosArrowDropright className="pm-btn-move pm-navbar-btn-dir" color="#fff" fontSize="30px" onClick={() => {moveEsq()}}/>
        </div>
        <div style={{width: '17.2%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Link to="/entrar">
          <Botao className="btb-entrar">Entrar</Botao>
        </Link>
            <span>|</span>
          <Link to="/cadastrar" className="pm-cabecalho-cadastrar">Cadastrar</Link>
        </div>
      </div>
     </div>
  )
}
