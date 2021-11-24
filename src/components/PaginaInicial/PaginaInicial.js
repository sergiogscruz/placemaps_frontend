import { useState, useEffect } from 'react';
import './PaginaInicial.css';
import CardResumoPonto from '../UI/Utils/CardResumoPonto/CardResumoPonto';
import Input from '../UI/Utils/Input/Input';
import { MdOutlineSearch } from 'react-icons/md';
import Botao from '../UI/Utils/Botao/Botao';
import Paginacao from '../UI/Utils/Paginacao/Paginacao';
import { useParams } from "react-router-dom";
import axios from 'axios';

export default function PaginaInicial(props) {
  const [conteudoBusca, setConteudoBusca] = useState('');
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [itens, setItens] = useState(undefined);
  const itensPorPagina = 3;

  const getAllCards = async () => {
    const categoria = '';
    const dados = await axios.get(
     `api/public/ponto?nome=${conteudoBusca}&categoria=${categoria}&page=${paginaAtual - 1}&size=${itensPorPagina}`
    );
    setItens(dados.data);
  }

  const getCards = async (nome) => {
    const dados = await axios.get( 'api/public/ponto?categoria=' + nome)
    setItens(dados.data)
  }
  
  let { nome } = useParams();

  useEffect(() => {
    if(!nome){
      getAllCards();
    } else {
      getCards(nome);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paginaAtual, nome]);


  const montarCards = () => {
    if (itens)
      return (
        itens.content.map((item, i) => {
          return (
            <CardResumoPonto key={`card_${i}`} titulo={item.nome} itens={item.dadoSemanalNomeList} srcImg={item.foto} idPonto={item.id} nota={item.nota}/>
          )
        })
      );
  }

  const eventoBusca = async () => {
    setPaginaAtual(1)
    await getAllCards()
  }
  
  return (
    <div className="bg-light-azul py-4">
      <div className="container d-flex flex-column">
        <div style={{width: "100%"}}>
          <div style={{width: "90%", display: "flex", justifyContent: "flex-end", marginLeft: "auto", marginRight: "auto", maxWidth: "900px"}}>
            <div className="align-self-end d-flex containerInputPesquisaPonto align-items-center" >
              <Input onPressEnter={() => { eventoBusca() }} placeholder="Pesquisar por nome" className="inputPesquisaPonto h-100" setStatePai={setConteudoBusca} />
              <Botao className="h-100 d-flex align-items-center justify-content-center radius-botao" 
                onClick={() => { eventoBusca() }}>
                <MdOutlineSearch size="1.7em" className="iconePesquisa" />
              </Botao>
            </div>
          </div>
        </div>


        <Paginacao 
          classNameItens="d-flex flex-column align-items-center" 
          itens={montarCards()} setStateOnChange={setPaginaAtual} 
          numeroPaginas={(itens ? itens.totalPages : 0)}
          trocaDePaginaEmCima={false}
          trocaDePaginaEmBaixo={true}
        />
      </div>
    </div>
  )
};