import React, { useState, useEffect } from 'react'
import './navbar.css';
import Api from '../services/api';
import {IoIosArrowDropright, IoIosArrowDropleft} from 'react-icons/io';

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
          classMeio.backgroundColor= "#EC1F46";
        }
        itensShow.push((<span key={iten.uuid} style={classMeio} className="pm-navbar-iten">{iten.nome}</span>));
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
      <div className="pm-navbar-btn-carousel">
        <IoIosArrowDropleft className="pm-btn-move pm-navbar-btn-esq" color="#fff" fontSize="30px" onClick={() => {moveDir()}}/>
        {itensList}
        <IoIosArrowDropright className="pm-btn-move pm-navbar-btn-dir" color="#fff" fontSize="30px" onClick={() => {moveEsq()}}/>
      </div>
    </div>
  )
}
