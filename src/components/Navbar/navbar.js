import React, { useState, useEffect } from 'react'
import './navbar.css';
import {IoIosArrowDropright, IoIosArrowDropleft} from 'react-icons/io';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Botao from '../UI/Utils/Botao/Botao';
import axios from 'axios';
import { AxiosHelper } from '../services/api';

export default function Navbar() {  
  const [itensMenu, setItensMenu] = useState([]);

  const [itensList, setItensList] = useState('');
  const [session, setSession] = useState({});

  let itensShow = [];

  useEffect(()=> {
    axios.get('api/public/categoria')
    .then((result)=> {
      setItensMenu(result.data)
    })
  }, [])

  useEffect(() => {
    setItensList(showItens());
  }, [itensMenu])

  useEffect(() => {
    setSession( JSON.parse(localStorage.getItem("session")));
  },[])

  function showItens() {
    let qtdItens = 5;
    let ItenMeio = Math.ceil(qtdItens/2)
    itensMenu.forEach((iten) => {
      if (itensShow.length < qtdItens) {
        let classMeio = {};
        if(itensShow.length + 1 === ItenMeio) {
        }
        let path = "/lista/" + iten.nome
        itensShow.push((<NavLink to={path} key={iten.id} style={classMeio} className="pm-navbar-iten">{iten.nome}</NavLink>));
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

  function deleteSession() {
    localStorage.removeItem("session");
    setSession({})
    AxiosHelper.initializeAxios();
  }

  function actions() {
    const setProprietario = (
      <Link to="/ser-proprietario">
        <Botao className="btb-entrar">Proprietário</Botao>
      </Link>
    )

    if (session && session.token) {

      let proprietario = (
        <Link to="/proprietario/dashboard" style={{textDecoration: "none", color: "#fff", marginLeft: "5px", fontFamily: "'Mulish', sans-serif"}}>Área restrita</Link>
      )
      return (
        <div style={{display: "flex", alignItems: "center"}}>
          <div style={{width: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Botao className="btb-entrar" onClick={() => deleteSession()}>Sair</Botao>
          </div>
          { session && session.tipoUsuario === "PROPRIETARIO" ? proprietario : setProprietario }
        </div>
      )
    }

    return (
      <div style={{width: '24.2%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Link to="/entrar">
          <Botao className="btb-entrar">Entrar</Botao>
        </Link>
        <span>|</span>
        <Link to="/cadastrar">
          <Botao className="btb-entrar">Cadastrar</Botao>
        </Link>
        <span>|</span>
        {setProprietario}
      </div>
    )
  }
    
  return (
    <div className="pm-navbar-container">
      <div className="container" style={{display: 'flex'}}>
        <Link to="/" style={{width: '17.2%', display: 'flex', alignItems: 'center', textDecoration: "none"}}>
          <div  className="pm-logo">
            <span style={{color: "#EC1F46", height: "32px", margin: '0 8px 0 0'}}>PLACE</span>
            <span style={{color: "#fff",height: "32px"}}>MAPS</span>
          </div>
        </Link>
        <div className="pm-navbar-btn-carousel">
          <IoIosArrowDropleft className="pm-btn-move pm-navbar-btn-esq" color="#fff" fontSize="30px" onClick={() => {moveDir()}}/>
          {itensList}
          <IoIosArrowDropright className="pm-btn-move pm-navbar-btn-dir" color="#fff" fontSize="30px" onClick={() => {moveEsq()}}/>
        </div>
        { actions() }
      </div>
     </div>
  )
}
