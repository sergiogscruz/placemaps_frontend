import './CardDashboardProprietario.css'
import Botao from '../Botao/Botao'
export default function CardDashboardProprietario(props) {

  const styleConteudo = {
    fontSize: (props.conteudo.toString().length <= 4 ? '60px' : '35px')
  }

  return (
    <div className={"cardDashboardProprietario " + (props.className ? props.className : '')}>
      <div className="d-flex align-items-center w-100">
        <span className="icone">
          { props.icone }
        </span>
        <h4 className="titulo">{ props.titulo }</h4>
      </div>

      <h2 className="conteudo" style={styleConteudo}>
        { props.conteudo }
      </h2>

      <div className="footer row w-100">
        <div className="col-6 d-flex conteudo">
          { props.conteudoFooter }
        </div>
        <div className="col-6 d-flex justify-content-end">
          <Botao className="fontSizeBotao">+ saber mais</Botao>
        </div>
      </div>
    </div>
  )
}