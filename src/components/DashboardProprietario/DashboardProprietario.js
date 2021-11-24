import CardDashboardProprietario from "../UI/Utils/CardDashboardProprietario/CardDashboardProprietario";
import { VscGraph } from 'react-icons/vsc'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { RiStarLine } from 'react-icons/ri'
import { GoCommentDiscussion } from 'react-icons/go'

export default function DashboardProprietario() {

  return (
    <div className="row">
      <div className="col-12 col-lg-6 my-4">
        <CardDashboardProprietario titulo="PLANO ATUAL" icone={<VscGraph size="1.5em"/>} conteudo="STANDARD" conteudoFooter="Expira em 10 dias"/>
      </div>
      <div className="col-12 col-lg-6 my-4">
        <CardDashboardProprietario titulo="PONTOS" icone={<HiOutlineLocationMarker size="1.5em"/>} conteudo="5"/>
      </div>

      <div className="col-12 col-lg-6 my-4">
        <CardDashboardProprietario titulo="COMENTÁRIOS" icone={<GoCommentDiscussion size="1.5em"/>} conteudo="1"/>
      </div>
      <div className="col-12 col-lg-6 my-4">
        <CardDashboardProprietario titulo="AVALIAÇÕES" icone={<RiStarLine size="1.5em"/>} conteudo="4"/>
      </div>
    </div>
  )
}