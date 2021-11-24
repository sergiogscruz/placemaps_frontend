import './CorpoTabelaComCards.css'

export default function CorpoTabelaComCards(props) {
  return (
    <div>
      {
        props.dados.map(linha => {
          return (
            <div className="linhaTabelaComCards row mx-0">
              {linha.map(dado => <p className="text-center col p-0 m-0">{dado}</p>)}
            </div>
          )
        })
      }
    </div>
  )
}