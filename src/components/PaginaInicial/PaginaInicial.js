import { useState, useEffect } from 'react';
import './PaginaInicial.css';
import CardResumoPonto from '../UI/Utils/CardResumoPonto/CardResumoPonto';
import Input from '../UI/Utils/Input/Input';
import { BiSearchAlt } from 'react-icons/bi';
import Botao from '../UI/Utils/Botao/Botao';
import Paginacao from '../UI/Utils/Paginacao/Paginacao';
import api from '../services/api'

export default function PaginaInicial(props) {
  const [conteudoBusca, setConteudoBusca] = useState('');
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [itens, setItens] = useState(undefined);
  const itensPorPagina = 5;

  const getCards = async () => {
    const categoria = '';
    const dados = await api.get(
     `api/public/ponto?nome=${conteudoBusca}&categoria=${categoria}&page=${paginaAtual - 1}&size=${itensPorPagina}`
    );
    setItens(dados.data);
  }

  useEffect(() => {
    getCards()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paginaAtual]);

  const montarCards = () => {
    if (itens)
      return (
        itens.content.map((item, i) => {
          return (
            <CardResumoPonto key={`card_${i}`} titulo={item.nome} itens={item.dadoSemanalNomeList} srcImg={item.foto} />
          )
        })
      );
  }

  const eventoBusca = async () => {
    setPaginaAtual(1)
    await getCards()
  }
  
  return (
    <div className="bg-light-azul py-4">
      <div className="container d-flex flex-column">
        <div className="align-self-end d-flex containerInputPesquisaPonto align-items-center">
          <Input onPressEnter={() => { eventoBusca() }} placeholder="Pesquisar por nome" className="inputPesquisaPonto h-100" setStatePai={setConteudoBusca} />
          <Botao className="h-100 d-flex align-items-center justify-content-center" onClick={() => { eventoBusca() }}>
            <BiSearchAlt size="1.7em" className="iconePesquisa" />
          </Botao>
        </div>

        <Paginacao className="d-flex flex-column align-items-center" itens={montarCards()} setStateOnChange={setPaginaAtual} numeroPaginas={(itens ? itens.totalPages : 0)}/>
      </div>
    </div>
  )
};