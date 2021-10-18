import { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import Botao from '../Botao/Botao';
import './Paginacao.css';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

export default function Paginacao(props) {
  const [paginaAtual, setPaginaAtual] = useState(1);

  const decrementar = () => {
    if (paginaAtual > 1)
      setPaginaAtual(paginaAtual - 1)
  }

  const incrementar = () => {
    if (paginaAtual < props.numeroPaginas)
      setPaginaAtual(paginaAtual + 1)
  }

  useEffect(() => {
    props.setStateOnChange(paginaAtual)
  }, [paginaAtual,props]);


  const montarElementos = () => {
    if (props.numeroPaginas === 0)
      return
    const primeiroElemento = paginaAtual > 1 ? <div className="item" onClick={() => { setPaginaAtual(1) }}>{1}</div> : ''

    const elementoAtualMenosUm = paginaAtual - 1 > 1 ? <div className="item" onClick={() => { setPaginaAtual(paginaAtual - 1) }}>{paginaAtual - 1}</div> : ''

    const elementoAtual = <div className="item item-ativo">{paginaAtual}</div>

    const elementoAtualMaisUm = paginaAtual + 1 < props.numeroPaginas ? <div className="item" onClick={() => { setPaginaAtual(paginaAtual + 1) }}>{paginaAtual + 1}</div> : ''

    const ultimoElemento = paginaAtual < props.numeroPaginas ? <div className="item" onClick={() => { setPaginaAtual(props.numeroPaginas) }}>{props.numeroPaginas}</div> : ''
    return (
      <div className="d-flex itens-paginacao">
        {primeiroElemento}
        {elementoAtualMenosUm}
        {elementoAtual}
        {elementoAtualMaisUm}
        {ultimoElemento}
      </div>
    )
  }

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center">
        <div className="btn-paginacao" onClick={() => decrementar()}>
          <AiOutlineLeft className="color-dark-gray font-weight-bold" size="0.8em"/>
        </div>


        {montarElementos()}
        <div className="btn-paginacao" onClick={() => incrementar()}>
          <AiOutlineRight className="color-dark-gray font-weight-bold" size="0.8em"/>
        </div>
      </div>
      <div className={props.className}>
        {props.itens}
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <div className="btn-paginacao" onClick={() => decrementar()}>
          <AiOutlineLeft className="color-dark-gray font-weight-bold" size="0.8em"/>
        </div>


        {montarElementos()}
        <div className="btn-paginacao" onClick={() => incrementar()}>
          <AiOutlineRight className="color-dark-gray font-weight-bold" size="0.8em"/>
        </div>
      </div>
    </div>
  )
};