import react, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './BarraLateralAdministracao.css'

import { RiPencilFill, RiDashboardLine } from 'react-icons/ri'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { RiStarLine } from 'react-icons/ri'
import { GoCommentDiscussion } from 'react-icons/go'
import { FiBell } from 'react-icons/fi'
import { BsGear } from 'react-icons/bs'

export default function BarraLateralAdministracao(props) {
  const [itemAtivo, setItemAtivo] = useState({texto: 'Dashboard', icone: ''})


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
      icone: <FiBell className="color-principal" size="1.3em" />,
      texto: 'lembretes',
      textoFormatado: 'Lembretes'
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
        const onClickItem = () => {
          setItemAtivo(item)
        }
        if (i === props.item) {
          return (
            <NavLink to={"/admin/" + item.texto} className="item ativo" onClick={onClickItem}>
              {item.icone}
              <span>{item.textoFormatado}</span>
            </NavLink>       
          )
        }
        else {
          return (
            <NavLink to={"/admin/" + item.texto} className="item" onNavLinkck={onClickItem}>
              {item.icone}
              <span>{item.textoFormatado}</span>
            </NavLink>
          )
        }
      })
    )
  }
  return (
    <div className="barra-lateral-admin">
      <div className="padding">
        <div className="logo font-logo">
          <span className="color-principal">PLACE </span>
          <span className="color-light">MAPS</span>
        </div>
      </div>

      <div className="linha-horizontal bg-dark-gray"></div>

      <div className="padding usuario d-flex flex-column w-100 align-items-center">
        <div className="foto ">

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