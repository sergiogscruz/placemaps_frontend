import react, { useEffect, useState } from 'react';
import './Abas.css';
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io'; 
/**
 * props = {
 *  abas: [ { titulo, conteudo } ],
 *  className
 * }
 */
export default (props) => {
  const conteudoInicial = props.abas.length > 0 && props.abas[0].conteudo ? props.abas[0].conteudo : '';
  const tituloCabecalho = props.tituloCabecalho ? props.tituloCabecalho : false;
  const [abaAtiva, setAbaAtiva] = useState(0);
  const [conteudoAtivo, setConteudoAtivo] = useState([]);
  const dropdown = props.dropdown ? true : false;
  const IdElemento = (Math.random() * 100).toFixed(15).replace('.','');

  const handleAbaAtiva = (i, conteudo) => {
      let elementos = document.getElementsByClassName("conteudoitem");
      let conteudoItem = document.getElementsByClassName("input-dado-semanal");
      let show = document.getElementsByClassName("show");
      let hide = document.getElementsByClassName("hide");

      if(!dropdown) {
        if(elementos && elementos.length) {
           Object.keys(elementos).forEach(element => {
              elementos[element].classList.add('conteudoitemZero');
           });
        }
      } else {
        if(conteudoItem && conteudoItem.length) {
          Object.keys(conteudoItem).forEach(item => {
            
            conteudoItem[item].checked = false
          });
        }

        if(elementos && elementos.length) {
          Object.keys(elementos).forEach(element => {
            elementos[element].classList.remove('conteudoitemZero');
          });
        }

      }
    setAbaAtiva(i)
    setConteudoAtivo(conteudo)
  }

  const montarAbas = (tituloCabecalho) => {

    return props.abas.map((aba, i) => {
        let className = 'aba';
        if (abaAtiva == i && !tituloCabecalho) {
          className += ' abaAtiva';
        }
        if(tituloCabecalho) {
          className = ' tituloCabecalho'
        }
        let classAux = `header-dado-semanal col d-flex flex-column align-items-center cursor-pointer ${className}`;

        return ( 
          <label style={dropdown ? {borderRadius: '5px'} : {borderRadius: '0'}} id="dado-semanal-label" for={IdElemento} className={classAux} onClick={() => handleAbaAtiva(i, aba.conteudo)}>
              <div style={dropdown ? {color:"#fff", borderRadius: '4px', textTransform: 'capitalize', width: "100%", display: "flex"} : {color:"#333s", textTransform: 'capitalize'}}>
                <div style={{width: "5%"}} className="show">
                  { dropdown ? (<IoIosArrowDown />) : null}
                </div>
                <div style={{width: "95%"}}>
                  { aba.titulo.toLowerCase() } 
                </div>
              </div>
          </label> 
        )
      }
    )
  };

  const montarConteudo = () => {
    let className = `${dropdown ? "conteudoitem" : "conteudodiaSemanal"} mt-3 conteudoAtivo`
    return (
      <div id={dropdown ? "conteudoitem" : "conteudodiaSemanal"} className={className} style={dropdown ? {display: 'flex', flexWrap: 'wrap'} : {display: 'static'}}>
        { conteudoAtivo }
      </div>
    )
  }
  useEffect(() => {
    setTimeout(() => {
      setConteudoAtivo(conteudoInicial)
    }, 1000);  
  },[])
  return (
    <div className={ "row justify-content-center " +  props.className} style={{width: "100%", marginRight: 0, marginLeft: 0}}>
      <input id={IdElemento} class={dropdown ? "input-dado-semanal" : "input-sem-dropdown"} type="checkbox" />
      { montarAbas(tituloCabecalho)}
      { montarConteudo() }
    </div>
  )
};