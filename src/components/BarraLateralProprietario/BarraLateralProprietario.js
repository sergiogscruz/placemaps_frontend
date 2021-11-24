import { NavLink, Link } from 'react-router-dom'
import './BarraLateralProprietario.css'

import { RiPencilFill, RiDashboardLine } from 'react-icons/ri'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { RiStarLine } from 'react-icons/ri'
import { GoCommentDiscussion } from 'react-icons/go'
import { BsGear } from 'react-icons/bs'
import localStoragePlaceMaps from '../services/localStoragePlaceMaps'

export default function BarraLateralProprietario(props) {
  const itensLista = [
    {
      icone: <RiDashboardLine className="color-principal" size="1.3em" />,
      texto: 'dashboard',
      textoFormatado: 'Dashboard'
    },

    {
      icone: <HiOutlineLocationMarker className="color-principal" size="1.3em" />,
      texto: 'pontos',
      textoFormatado: 'Pontos'
    },

    {
      icone: <RiStarLine className="color-principal" size="1.3em" />,
      texto: 'avaliacoes',
      textoFormatado: 'Avaliações'
    },

    {
      icone: <GoCommentDiscussion className="color-principal" size="1.3em" />,
      texto: 'comentarios',
      textoFormatado: 'Comentarios'
    },
    {
      icone: <BsGear className="color-principal" size="1.3em" />,
      texto: 'configuracoes',
      textoFormatado: 'Configurações'
    },

  ]

  const montarLista = () => {
    return (
      itensLista.map((item, i) => {
        if (i === props.item) {
          return (
            <NavLink to={`${props.caminhoRaiz}/` + item.texto} className="item ativo">
              {item.icone}
              <span>{item.textoFormatado}</span>
            </NavLink>       
          )
        }
        else {
          return (
            <NavLink to={`${props.caminhoRaiz}/` + item.texto} className="item">
              {item.icone}
              <span>{item.textoFormatado}</span>
            </NavLink>
          )
        }
      })
    )
  }
  return (
    <div className="barra-lateral-proprietario">
      <div className="padding">
      <Link to="/" style={{width: '17.2%', textDecoration: "none"}}>
        <div className="logo font-logo">
          <span className="color-principal">PLACE </span>
          <span className="color-light">MAPS</span>
        </div>
      </Link>
      </div>

      <div className="linha-horizontal bg-dark-gray"></div>

      <div className="padding usuario d-flex flex-column w-100 align-items-center">
        <div className="foto" style={{backgroundImage: `url(${localStoragePlaceMaps().foto})`}}>

        </div>
        <span className="editar">
          <RiPencilFill className="color-light icone" size="1.1em" />
          Editar
        </span>

        <h4 className="nome">Thiago Damaceno</h4>
      </div>

      <ul className="padding lista list-unstyled w-100">
        { montarLista() }
      </ul>
    </div>
  )
}