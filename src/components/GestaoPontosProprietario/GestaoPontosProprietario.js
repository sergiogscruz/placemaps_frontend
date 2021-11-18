import { IoMdTrash } from 'react-icons/io'
import { RiPencilFill } from 'react-icons/ri'
import Botao from '../UI/Utils/Botao/Botao'
import CorpoTabelaComCads from "../UI/Utils/CorpoTabelaComCards/CorpoTabelaComCards";
import CabecalhoTabelaComCards from "../UI/Utils/CabecalhoTabelaComCards/CabecalhoTabelaComCards";
import Paginacao from '../UI/Utils/Paginacao/Paginacao';

export default function GestaoPontosProprietario() {
  const dados = [
    {
      nome: 'Ponto 1',
      categoria: 'Restaurante',
      status: 'INATIVO'
    },
    {
      nome: 'Ponto 2',
      categoria: 'Lanchonete',
      status: 'ATIVO'
    },
    {
      nome: 'Ponto 3',
      categoria: 'Hotel',
      status: 'INATIVO'
    }
  ]

  const montarAcoes = (funcaoEditar, funcaoExcluir) => {
    return (
      <div>
        <IoMdTrash className="cursor-pointer color-dark-gray mx-2" size="1.3em" onClick={funcaoEditar}/>
        <RiPencilFill className="cursor-pointer color-dark-gray mx-2" size="1.3em" onClick={funcaoExcluir}/>
      </div>
    )
  }

  const linhasTabela = () => {
    return (
      dados.map(dado => {
        const classNameStatus = dado.status == 'ATIVO' ? 'color-perigo' : 'color-sucesso'
        return [
          dado.nome, 
          dado.categoria, 
          <p className={'m-0 p-0 ' + classNameStatus}>{dado.status}</p>, 
          montarAcoes(() => alert(dado.nome), () => alert(dado.categoria))
        ]
      })
    )
  }

  return (
    <div>
      <Paginacao 
        cabecalho={
          <CabecalhoTabelaComCards colunas={['NOME', 'CATEGORIA', 'STATUS', <Botao>Adicionar</Botao>]} />
        } 
        itens={
          <CorpoTabelaComCads dados={linhasTabela()}/>
        }
        numeroPaginas='1'
        setStateOnChange={() => {  }}
        trocaDePaginaEmBaixo={true}
        trocaDePaginaEmCima={false}
        className="mt-5"
      />
    </div>
  )
}