import './ContainerProprietario.css'

export default function ContainerProprietario(props) {
  return (
    <div className="containerProprietario">
      <h3>{ props.titulo }</h3>

      { props.children }
    </div>
  )
}