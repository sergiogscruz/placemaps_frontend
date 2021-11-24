import './CabecalhoTabelaComCards.css'

export default function CabecalhoTabelaComCards(props) {

  return (
    <div className="row mx-0 cabecalho align-items-center">
      {props.colunas.map(coluna => <p className="text-center col">{coluna}</p>)}
    </div>
  )
}