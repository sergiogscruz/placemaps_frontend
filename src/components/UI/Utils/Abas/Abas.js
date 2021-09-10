import react, { useEffect, useState } from 'react';
import './Abas.css';
/**
 * props = {
 *  abas: [ { titulo, conteudo } ],
 *  className
 * }
 */
export default (props) => {
  const conteudoInicial = props.abas.length > 0 && props.abas[0].conteudo ? props.abas[0].conteudo : '';
  const [abaAtiva, setAbaAtiva] = useState(0);
  const [conteudoAtivo, setConteudoAtivo] = useState(conteudoInicial);

  const handleAbaAtiva = (i, conteudo) => {
    setAbaAtiva(i)
    setConteudoAtivo(conteudo)
  }

  const montarAbas = () => {
    return props.abas.map((aba, i) => {
        let className = 'aba';
        if (abaAtiva == i) {
          className += ' abaAtiva';
        }
        return ( 
          <div className="col d-flex flex-column align-items-center cursor-pointer" onClick={() => handleAbaAtiva(i, aba.conteudo)}>
            <span className={ className }>
              { aba.titulo }
            </span>
          </div> 
        )
      }
    )
  };

  const montarConteudo = () => {
    return (
      <div className="mt-5 conteudoAtivo">
        { conteudoAtivo }
      </div>
    )
  }
  return (
    <div className={ "my-5 row justify-content-center " +  props.className}>
      { montarAbas() }
      { montarConteudo() }
    </div>
  )
};