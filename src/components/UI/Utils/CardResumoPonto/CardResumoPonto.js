import Botao from '../Botao/Botao';
import './CardResumoPonto.css';
import { AiFillCheckCircle, AiFillStar} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import urlImagemPadrao from '../../imagens/default-image.jpg';
import { useEffect } from 'react';

/**
 * props = {
 *  itens: [String, String],
 *  titulo: String,
 *  srcImg: String
 * }
 */

export default function CardResumoPonto(props) {
  const style = {
    backgroundImage: props.srcImg ? `url(${props.srcImg})` : `url(${urlImagemPadrao})`
  }
  const itensDescricao = () => {
    if (props.itens)
      return props.itens.map((item, i) => {
        return (
          <li key={i} className="row my-2">
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

  function montarEstrelas() {

    let estrelaFracao = Math.ceil(props.nota)
    let estrelas = [];
    for(let i = 0; i < 5; i++){
      if(i+1 <= estrelaFracao) {
        estrelas.push(<AiFillStar color="yellow" />)
      } else {
        estrelas.push(<AiFillStar color="#fff" />)
      }
    }

    return estrelas
  }

  const patchPerfil = "/perfil/" + props.idPonto;

  return (
    <div className="cardResumoPonto row">
      <div className="col-3 titulo coluna d-flex flex-column align-items-center justify-content-around" style={{padding: "15px"}}>
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
          <h5 className="text-center">{props.titulo}</h5>
          <div> { montarEstrelas() } </div>
        </div>
        <Link to={patchPerfil}><Botao>+ Visualizar</Botao></Link>
      </div>

      <div className="col coluna d-flex flex-column align-items-center justify-content-around img" style={style}>

      </div>

    </div>
  )
}