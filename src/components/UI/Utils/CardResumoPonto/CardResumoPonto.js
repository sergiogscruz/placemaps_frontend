import react from 'react';
import Botao from '../Botao/Botao';
import './CardResumoPonto.css';
import { AiFillCheckCircle } from 'react-icons/ai';

import urlImagemPadrao from '../../imagens/default-image.jpg';

/**
 * props = {
 *  itens: [String, String],
 *  titulo: String,
 *  srcImg: String
 * }
 */

export default (props) => {
  const style = {
    backgroundImage: props.srcImg ? `url(${props.srcImg})` : `url(${urlImagemPadrao})`
  }

  const itensDescricao = () => {
    if (props.itens)
      return props.itens.map((item) => {
        return (
          <li className="row my-2" key={item}>
            <div className="col-2 p-0 m-0 d-flex justify-content-end align-items-center">
              <AiFillCheckCircle size="1.25em" className="mx-2" />
            </div>
            <div className="col p-0 d-flex">
              <span className="mx-3">
                {item}
              </span>
            </div>
          </li>
        )
      });
  }

  return (
    <div className="cardResumoPonto row">
      <div className="col-3 titulo coluna d-flex flex-column align-items-center justify-content-around">
        <h5 className="text-center">{props.titulo}</h5>
        <Botao>+ Visualizar</Botao>
      </div>

      <div className="col-4 coluna d-flex flex-column align-items-center justify-content-around">
        <ul className="list-unstyled w-100">
          {itensDescricao()}
        </ul>
      </div>

      <div className="col coluna d-flex flex-column align-items-center justify-content-around img" style={style}>

      </div>

    </div>
  )
}