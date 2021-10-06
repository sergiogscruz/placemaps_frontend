import react, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import Botao from '../Botao/Botao';

export default (props) => {
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
  }, [paginaAtual]);


  const montarElementos = () => {
    if (props.numeroPaginas == 0)
      return
    const primeiroElemento = <span onClick={() => setPaginaAtual(1)}>1</span>

    const ultimoElemento = props.numeroPaginas > 1 ? <span onClick={() => setPaginaAtual(props.numeroPaginas)}>{props.numeroPaginas}</span> : ''

    const segundoElemento = ''
    const terceiroElemento = ''
    const antepenultimoElemento = ''
    const penultimoElemento = ''
    return (
      <div>
        {primeiroElemento}
        {segundoElemento}
        {terceiroElemento}
        ----
        {antepenultimoElemento}
        {penultimoElemento}
        {ultimoElemento}
      </div>
    )
  }

  return (
    <div>
      <div className="d-flex justify-content-around align-items-center">
        <Botao onClick={() => decrementar()}>
          Decrementar
        </Botao>

        {montarElementos()}

        <Botao onClick={() => incrementar()}>
          Incrementar
        </Botao>

      </div>
      <div className={props.className}>
        {props.itens}
      </div>
    </div>
  )
};