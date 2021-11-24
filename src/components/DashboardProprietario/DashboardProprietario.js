import CardDashboardProprietario from "../UI/Utils/CardDashboardProprietario/CardDashboardProprietario";
import { VscGraph } from 'react-icons/vsc'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { RiStarLine } from 'react-icons/ri'
import { GoCommentDiscussion } from 'react-icons/go'
import axios from "axios";
import { useEffect, useState } from "react";

export default function DashboardProprietario() {
  const [quantidadePontos, setQuantidadePontos] = useState(0)
  const [quantidadeComentarios, setQuantidadeComentarios] = useState(0)
  const [quantidadeAvaliacoes, setQuantidadeAvaliacoes] = useState(0)
  const obterDadosPontos = async () => {
    const response = await axios.get(`/api/ponto/obter-pelo-proprietario?page=0&size=10000`)
    setQuantidadePontos(response.data.totalElements)

    let quantidadeComentariosTemp = 0
    response.data.content.forEach(async (ponto) => {
      const responseComentario = await axios.get(`/api/public/comentario/obter-pelo-ponto/${ponto.id}`)
      quantidadeComentariosTemp += responseComentario.data.content.length
      setQuantidadeComentarios(quantidadeComentariosTemp)
    })

    let quantidadeAvaliacoesTemp = 0
    response.data.content.forEach(async (ponto) => {
      const responseAvaliacoes = await axios.get(`/api/public/avaliacao/obter-pelo-ponto/${ponto.id}`)
      quantidadeAvaliacoesTemp += responseAvaliacoes.data.content.length
      setQuantidadeAvaliacoes(quantidadeAvaliacoesTemp)
    })
  }
  
  useEffect(() => { obterDadosPontos() }, [])
  
  return (
    <div className="row">
      <div className="col-12 col-lg-6 my-4">
        <CardDashboardProprietario titulo="PLANO ATUAL (QUANTIDADE DE PONTOS)" icone={<VscGraph size="1.5em"/>} conteudo="10"/>
      </div>
      <div className="col-12 col-lg-6 my-4">
        <CardDashboardProprietario titulo="PONTOS" icone={<HiOutlineLocationMarker size="1.5em"/>} conteudo={quantidadePontos}/>
      </div>

      <div className="col-12 col-lg-6 my-4">
        <CardDashboardProprietario titulo="COMENTÁRIOS" icone={<GoCommentDiscussion size="1.5em"/>} conteudo={quantidadeComentarios}/>
      </div>
      <div className="col-12 col-lg-6 my-4">
        <CardDashboardProprietario titulo="AVALIAÇÕES" icone={<RiStarLine size="1.5em"/>} conteudo={quantidadeAvaliacoes}/>
      </div>
    </div>
  )
}