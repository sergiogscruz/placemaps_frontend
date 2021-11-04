import './TabelaComCards.css'

export default function TabelaComCads(props) {
  const montarThead = () => {
    return (
      <div className="row mx-0 cabecalho align-items-center">
        {props.colunas.map(coluna => <p className="text-center col">{coluna}</p>)}
      </div>
    )
  }

  const montarTbody = () => {
    return (
      <div>
        {
          props.dados.map(linha => {
            return (
              <div className="cardLinha row mx-0">
                {linha.map(dado => <p className="text-center col p-0 m-0">{dado}</p>)}
              </div>
            )
          })
        }
      </div>
    )
  }
 
  return (
    <div style={(props.style ? props.style : {})} className={"w-100 tableComCards " + (props.className ? props.className : '')}>
      {montarThead()}

      {montarTbody()}
    </div>
  )
}