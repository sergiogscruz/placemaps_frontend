import react, { useState, useEffect } from 'react';
import './PaginaInicial.css';
import CardResumoPonto from '../UI/Utils/CardResumoPonto/CardResumoPonto';
import Input from '../UI/Utils/Input/Input';
import { BiSearchAlt } from 'react-icons/bi';
import Botao from '../UI/Utils/Botao/Botao';

export default () => {
  const [conteudoBusca, setConteudoBusca] = useState('');
  const [itens, setItens] = useState([]);

  const getCards = async () => {
    const page = 0;
    const categoria = '';
    const size = 5;
    const response = await fetch(
      `https://place-maps.herokuapp.com/api/public/ponto?nome=${conteudoBusca}&categoria=${categoria}&page=${page}&size=${size}`
    );

    const dados = await response.json();

    setItens(dados.content);
  }

  useEffect(getCards, []);

  const montarCards = () => {
    return (
      itens.map((item, i) => {
        return (
          <CardResumoPonto id={`card_${i}`} titulo={item.nome} itens={item.dadoSemanalNomeList} srcImg={item.foto} />
        )
      })
    );
  }

  //<CardResumoPonto titulo="Titulo do ponto" itens={["Item 1", "Item 2", "Item 3", "Item 4"]} srcImg={Img}/>
  return (
    <div className="bg-light-azul py-4">
      <div className="container d-flex flex-column">
        <div className="align-self-end d-flex containerInputPesquisaPonto align-items-center">
          <Input onPressEnter={() => { getCards() }} placeholder="Pesquisar por nome" className="inputPesquisaPonto h-100" onPressEnter={() => { getCards() }} setStatePai={setConteudoBusca} />
          <Botao className="h-100 d-flex align-items-center justify-content-center" onClick={() => { getCards() }}>
            <BiSearchAlt size="1.7em" className="iconePesquisa" />
          </Botao>
        </div>

        <div className="d-flex flex-column align-items-center">
          {montarCards()}
        </div>
      </div>
    </div>
  )
};