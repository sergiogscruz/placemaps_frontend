import { IoMdTrash } from 'react-icons/io'
import { RiPencilFill } from 'react-icons/ri'
import Botao from '../UI/Utils/Botao/Botao'
import CorpoTabelaComCards from "../UI/Utils/CorpoTabelaComCards/CorpoTabelaComCards";
import CabecalhoTabelaComCards from "../UI/Utils/CabecalhoTabelaComCards/CabecalhoTabelaComCards";
import Paginacao from '../UI/Utils/Paginacao/Paginacao';
import { Modal } from 'reactstrap';
import { useEffect, useState } from 'react';
import '../../components/UI/Utils/GestaoProprietario.css'
import { MdClose } from 'react-icons/md'
import Input from '../UI/Utils/Input/Input'
import Dropdown from '../UI/Utils/Dropdown/Dropdown'
import api from '../services/api'
import './GestaoPontosProprietario.css'
import localStoragePlaceMaps from '../services/localStoragePlaceMaps';
import axios from 'axios';

export default function GestaoPontosProprietario() {
  const [paginaAtualPontos, setPaginaAtualPontos] = useState(1)

  useEffect(() => montarDados(), [paginaAtualPontos])

  // Modal criar
  const [modalCriar, setModalCriar] = useState(false);
  const toggleModalCriar = () => {
    setNomeCriar('')
    setSubtituloCriar('')
    setCepCriar('')
    setLogradouroCriar('')
    setNomeCriar('')
    setBairroCriar('')
    setCidadeCriar('')
    setUfCriar('')
    setTelefoneCriar('')
    setCelularCriar('')
    setDescricaoCriar('')
    setItemDropDownCriar('')

    setModalCriar(!modalCriar)
  }
  const [nomeCriar, setNomeCriar] = useState('')
  const [subtituloCriar, setSubtituloCriar] = useState('')
  const [tipoPontoCriar, setTipoPontoCriar] = useState('Ponto fixo')
  const [itemDropdownCriar, setItemDropDownCriar] = useState('')
  const [optionsDropdown, setOptionsDropdown] = useState([])
  const [cepCriar, setCepCriar] = useState('')
  const [logradouroCriar, setLogradouroCriar] = useState('')
  const [numeroCriar, setNumeroCriar] = useState('')
  const [bairroCriar, setBairroCriar] = useState('')
  const [cidadeCriar, setCidadeCriar] = useState('')
  const [ufCriar, setUfCriar] = useState('')
  const [telefoneCriar, setTelefoneCriar] = useState('')
  const [celularCriar, setCelularCriar] = useState('')
  const [descricaoCriar, setDescricaoCriar] = useState('')
  const criarPonto = async () => {
    if (
      nomeCriar === '' ||
      subtituloCriar === '' ||
      cepCriar === '' ||
      logradouroCriar === '' ||
      numeroCriar === '' ||
      bairroCriar === '' ||
      cidadeCriar === '' ||
      ufCriar === '' ||
      descricaoCriar === '' ||
      itemDropdownCriar === ''
    ) {
      alert('Preencha todos os campos obrigatórios')
      return
    }
    console.log({
      ativo: true,
      contato: {
        telefone: telefoneCriar,
        whatsapp: celularCriar
      },
      descricao: descricaoCriar,
      fixo: (tipoPontoCriar == 'Ponto fixo'),
      fotos: [
        { url: "https://media-cdn.tripadvisor.com/media/photo-s/0e/d1/78/32/um-pouquinho-do-nosso.jpg" },
        { url: "https://digitalpixel.com.br/wp-content/uploads/2016/09/dicas-para-restaurantes-e-lanchonetes-anunciarem-no-facebook-870x580.jpg" }
      ],
      nome: nomeCriar,
      subTitulo: subtituloCriar
    })
    const response = await axios.post(`/api/ponto/categoria/${itemDropdownCriar.id}`, {
      ativo: true,
      contato: {
        telefone: telefoneCriar,
        whatsapp: celularCriar
      },
      descricao: descricaoCriar,
      fixo: (tipoPontoCriar == 'Ponto fixo'),
      fotos: [
        { url: "https://media-cdn.tripadvisor.com/media/photo-s/0e/d1/78/32/um-pouquinho-do-nosso.jpg" },
        { url: "https://digitalpixel.com.br/wp-content/uploads/2016/09/dicas-para-restaurantes-e-lanchonetes-anunciarem-no-facebook-870x580.jpg" }
      ],
      nome: nomeCriar,
      subTitulo: subtituloCriar
    })
    console.log(response)
    alert('ok')
  }


  useEffect(() => {
    console.log(JSON.parse(localStorage.getItem('session')))
    async function get() {
      const response = await axios.get('/api/public/categoria')
      setOptionsDropdown(response.data)
    }
    get()
  }, [])

  const [dados, setDados] = useState([])
  const montarDados = async () => {
    const response = await axios.get(`/api/ponto/obter-pelo-proprietario?page=${paginaAtualPontos - 1}&size=${7}`)
    setDados(response.data)
  }

  const montarAcoes = (funcaoEditar, funcaoExcluir) => {
    return (
      <div>
        <IoMdTrash className="cursor-pointer color-dark-gray mx-2" size="1.3em" onClick={funcaoEditar} />
        <RiPencilFill className="cursor-pointer color-dark-gray mx-2" size="1.3em" onClick={funcaoExcluir} />
      </div>
    )
  }

  const desativarPonto = async (id) => {
    const response = await axios.put(`/api/ponto/desativar/${id}`, {})
    console.log(response)
    alert('ponto desativado')
  }

  const linhasTabela = () => {
    if (dados?.content) {
      return (
        dados.content.map(dado => {
          const classNameStatus = !dado.ativo ? 'color-perigo' : 'color-sucesso'
          return [
            dado.nome,
            'CATEGORIA',
            <p className={'m-0 p-0 ' + classNameStatus}>{(dado.ativo ? 'ATIVO' : 'INATIVO')}</p>,
            montarAcoes(() => { desativarPonto(dado.id) }, () => {  })
          ]
        })
      )
    }
    return []
  }

  const montarDropdown = () => {
    return <Dropdown options={optionsDropdown} setStateOnChange={setItemDropDownCriar} />
  }

  return (
    <>
      <div>
        <Paginacao
          cabecalho={
            <CabecalhoTabelaComCards colunas={['NOME', 'CATEGORIA', 'STATUS', <Botao onClick={toggleModalCriar}>Adicionar</Botao>]} />
          }
          itens={
            <CorpoTabelaComCards dados={linhasTabela()} />
          }
          numeroPaginas={(dados?.totalPages)}
          setStateOnChange={setPaginaAtualPontos}
          trocaDePaginaEmBaixo={true}
          trocaDePaginaEmCima={false}
          className="mt-5"
        />
      </div>

      <div>
        <Modal className="modalGestaoProprietario" isOpen={modalCriar} toggle={toggleModalCriar} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
          <div className="modalGestaoProprietario cabecalho">
            <h4>Cadastrar Ponto</h4>
            <div className="iconeFechar">
              <MdClose className="cursor-pointer" size="1.3em" onClick={toggleModalCriar} />
            </div>
          </div>

          <div className="modalGestaoProprietario body">
            <div className="row">
              <div className="col"><Input setStatePai={setNomeCriar} className="w-100" placeholder="Nome*" /></div>
              <div className="col"><Input setStatePai={setSubtituloCriar} className="w-100" placeholder="Subtítulo*" /></div>
            </div>

            <div className="row mt-5">
              <div className="col">
                <div className="d-flex">
                  <span className="mx-3">Categoria: </span>
                  <div style={{ transform: 'translateY(-6px)' }}>
                    {montarDropdown()}
                  </div>
                </div>
              </div>
              <div className="col d-flex row" onChange={(e) => setTipoPontoCriar(e.target.value)}>
                <div className="col">
                  <input id="radioPontoFixo" type="radio" value="Ponto fixo" name="gender" defaultChecked />
                  <label style={{ marginLeft: '10px' }} for="radioPontoFixo">
                    Ponto fixo
                  </label>
                </div>
                <div className="col">
                  <input id="radioPontoMovel" type="radio" value="Ponto movel" name="gender" />
                  <label style={{ marginLeft: '10px' }} for="radioPontoMovel">
                    Ponto movel
                  </label>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col"><Input setStatePai={setCepCriar} className="w-100" placeholder="CEP*" /></div>
              <div className="col"><Input setStatePai={setLogradouroCriar} className="w-100" placeholder="Logradouro*" /></div>

              <div className="col"><Input setStatePai={setNumeroCriar} className="w-100" placeholder="N°*" /></div>
              <div className="col"><Input setStatePai={setBairroCriar} className="w-100" placeholder="Bairro*" /></div>
            </div>

            <div className="row mt-5">
              <div className="col-4"><Input setStatePai={setCidadeCriar} className="w-100" placeholder="Cidade*" /></div>
              <div className="col-2"><Input setStatePai={setUfCriar} className="w-100" placeholder="UF*" /></div>

              <div className="col"><Input setStatePai={setTelefoneCriar} className="w-100" placeholder="Telefone" /></div>
              <div className="col"><Input setStatePai={setCelularCriar} className="w-100" placeholder="Celular" /></div>
            </div>
            <div className="row mt-5">
              <div className="col"><Input setStatePai={setDescricaoCriar} className="w-100 inputDescricao" placeholder="Descricao*" /></div>
            </div>

            <div className="row mt-5">
              <div className="col">

              </div>
              <div className="col row">
                <div className="col">
                  <button className="btn btn-danger w-100" onClick={toggleModalCriar}>Cancelar</button>
                </div>
                <div className="col">
                  <button className="btn btn-success w-100" onClick={criarPonto}>Salvar</button>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>

    </>
  )
}