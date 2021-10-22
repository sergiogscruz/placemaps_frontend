import react from 'react'
import './ContainerAdmin.css'

export default function ContainerAdmin(props) {
  return (
    <div className="containerAdmin">
      <h3>{ props.titulo }</h3>

      { props.children }
    </div>
  )
}