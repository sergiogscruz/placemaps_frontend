import { RiPencilFill } from 'react-icons/ri'
import Botao from '../UI/Utils/Botao/Botao'
import CorpoTabelaComCards from "../UI/Utils/CorpoTabelaComCards/CorpoTabelaComCards";
import CabecalhoTabelaComCards from "../UI/Utils/CabecalhoTabelaComCards/CabecalhoTabelaComCards";
import Paginacao from '../UI/Utils/Paginacao/Paginacao';
import { Modal } from 'reactstrap';
import { useEffect, useState } from 'react';
import '../../components/UI/Utils/GestaoProprietario.css'
import { MdAdd, MdClose, MdCheck } from 'react-icons/md'
import Input from '../UI/Utils/Input/Input'
import Dropdown from '../UI/Utils/Dropdown/Dropdown'
import './GestaoPontosProprietario.css'
import axios from 'axios';
import { AiOutlineCaretDown } from 'react-icons/ai';
import { FaRegTrashAlt } from 'react-icons/fa'
import { UploadImageFirabase } from '../Firebase/upload-image-firebase'; 

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
    let locaisPreenchidos = false
    locais.forEach(local => {
      if (
        local.estado === '' ||
        local.latitude === '' ||
        local.cidade === '' ||
        local.bairro === '' ||
        local.longitude === '' ||
        local.rua === '' ||
        local.numero === '' ||
        local.pais === ''
      ) {
        alert('Preencha todos os campos obrigatórios')
        locaisPreenchidos = true
        return
      }
    })
    if (locaisPreenchidos) return
    const fotosLocais = fotos.map(foto => { return { url: foto } })
    const response = await axios.post(`/api/ponto/categoria/${itemDropdownCriar.id}`, {
      ativo: true,
      contato: {
        telefone: telefoneCriar,
        whatsapp: celularCriar
      },
      descricao: descricaoCriar,
      fixo: (tipoPontoCriar == 'Ponto fixo'),
      fotos: fotosLocais,
      nome: nomeCriar,
      subTitulo: subtituloCriar
    })

    alert('Ponto criado com sucesso')

    //Ponto fixo (1 local)
    locais.forEach(async local => {
      let diasSemanasCheck = []

      if (local.diasDaSemanaIds[0]) diasSemanasCheck.push('SEGUNDA')
      if (local.diasDaSemanaIds[1]) diasSemanasCheck.push('TERCA')
      if (local.diasDaSemanaIds[2]) diasSemanasCheck.push('QUARTA')
      if (local.diasDaSemanaIds[3]) diasSemanasCheck.push('QUINTA')
      if (local.diasDaSemanaIds[4]) diasSemanasCheck.push('SEXTA')
      if (local.diasDaSemanaIds[5]) diasSemanasCheck.push('SEXTA')
      if (local.diasDaSemanaIds[6]) diasSemanasCheck.push('DOMINGO')

      const diasDaSemanaIds = tipoPontoCriar === 'Ponto fixo' ? [
        "SEGUNDA",
        "TERCA",
        "QUARTA",
        "QUINTA",
        "SEXTA",
        "SABADO",
        "DOMINGO"
      ] : diasSemanasCheck
      const body = {
        bairro: local.bairro,
        cidade: local.cidade,
        diasDaSemanaIds,
        estado: local.estado,
        latitude: local.latitude,
        longitude: local.longitude,
        numero: local.numero,
        pais: local.pais,
        pontoId: response.data,
        rua: local.rua
      }
      await axios.post('api/localizacao', body)
    })

    alert('Local criado com sucesso')
    montarDados()
  }


  useEffect(() => {
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

  const montarAcoes = (funcaoDesativar, funcaoEditar, ativar) => {
    return (
      <div>
        <RiPencilFill className="cursor-pointer color-dark-gray mx-2" size="1.3em" onClick={funcaoEditar} />
        {(!ativar.ativo ?
          <MdCheck className="cursor-pointer color-dark-gray mx-2" size="1.3em" onClick={ativar.f} />
          :
          <MdClose className="cursor-pointer color-dark-gray mx-2" size="1.3em" onClick={funcaoDesativar} />
        )}
      </div>
    )
  }

  const desativarPonto = async (id) => {
    await axios.put(`/api/ponto/desativar/${id}`, {})
    await montarDados()
    alert('Ponto desativado')
  }
  const ativarPonto = async (id) => {
    await axios.put(`/api/ponto/ativar/${id}`, {})
    await montarDados()
    alert('Ponto ativado')
  }

  const linhasTabela = () => {
    if (dados?.content) {
      return (
        dados.content.map(dado => {
          const classNameStatus = !dado.ativo ? 'color-perigo' : 'color-sucesso'
          console.log(dado)
          return [
            dado.nome,
            dado.categoria,
            <p className={'m-0 p-0 ' + classNameStatus}>{(dado.ativo ? 'ATIVO' : 'INATIVO')}</p>,
            montarAcoes(() => { desativarPonto(dado.id) }, () => { }, { ativo: dado.ativo, f: () => ativarPonto(dado.id) })
          ]
        })
      )
    }
    return []
  }

  const montarDropdown = () => {
    return <Dropdown options={optionsDropdown} setStateOnChange={setItemDropDownCriar} />
  }

  const [locais, setLocais] = useState([
    {
      estado: "",
      latitude: "",
      cidade: "",
      bairro: "",
      longitude: "",
      rua: "",
      numero: "",
      pais: "",
      diasDaSemanaIds: [true, true, true, true, true, true, true],
      desenharElementoCompletoNaTela: false
    }
  ])

  useEffect(() => {
    if (tipoPontoCriar === 'Ponto fixo' && locais.length > 1) {
      const tempLocais = locais.map(local => local)

      setLocais([tempLocais[0]])
    }
  }, [tipoPontoCriar, locais])

  const removerLocalModal = (i) => {
    const tempLocais = []
    locais.forEach((l, j) => {
      if (i !== j) {
        tempLocais.push(l)
      }
    })
    console.log(i)
    setLocais(tempLocais)
  }

  const montarLocais = () => {

    return locais.map((local, i) =>
      <>
        <div>
          <div className="row">
            <div className="col-8 mt-4">
              <Input className="w-100" placeholder="Rua*" value={local.rua} setStatePai={(l) => {
                setLocais(locais.map((local, j) => {
                  if (i === j) {
                    return { ...local, rua: l }
                  }
                  return local
                }))
              }} />
            </div>
            <div className="col-2 mt-4">
              <Input className="w-100" placeholder="Numero*" value={local.numero} setStatePai={(l) => {
                setLocais(locais.map((local, j) => {
                  if (i === j) {
                    return { ...local, numero: l }
                  }
                  return local
                }))
              }} />
            </div>
            <div className="col-2 mt-4 d-flex align-items-center justify-content-around">
              <AiOutlineCaretDown size="1.6em" className={"cursor-pointer iconeMostrarLocal " + (!local.desenharElementoCompletoNaTela ? "rotate-180" : "")} onClick={() => {
                setLocais(locais.map((local, j) => {
                  if (i === j) {
                    return { ...local, desenharElementoCompletoNaTela: !local.desenharElementoCompletoNaTela }
                  }
                  return local
                }))
              }} />
              {(i > 0 ? <FaRegTrashAlt size="1.4em" className="cursor-pointer" onClick={() => removerLocalModal(i)} /> : '')}
            </div>
            <div className={"row " + (local.desenharElementoCompletoNaTela ? '' : 'd-none')}>
              <div className="col-4 mt-4">
                <Input className="w-100" placeholder="Latitude*" value={local.latitude} setStatePai={(l) => {
                  setLocais(locais.map((local, j) => {
                    if (i === j) {
                      return { ...local, latitude: l }
                    }
                    return local
                  }))
                }} />
              </div>
              <div className="col-4 mt-4">
                <Input className="w-100" placeholder="Longitude*" value={local.longitude} setStatePai={(l) => {
                  setLocais(locais.map((local, j) => {
                    if (i === j) {
                      return { ...local, longitude: l }
                    }
                    return local
                  }))
                }} />
              </div>
              <div className="col-4 mt-4">
                <Input className="w-100" placeholder="Pais*" value={local.pais} setStatePai={(l) => {
                  setLocais(locais.map((local, j) => {
                    if (i === j) {
                      return { ...local, pais: l }
                    }
                    return local
                  }))
                }} />
              </div>
              <div className="col-4 mt-4">
                <Input className="w-100" placeholder="Estado*" value={local.estado} setStatePai={(l) => {
                  setLocais(locais.map((local, j) => {
                    if (i === j) {
                      return { ...local, estado: l }
                    }
                    return local
                  }))
                }} />
              </div>
              <div className="col-4 mt-4">
                <Input className="w-100" placeholder="Cidade*" value={local.cidade} setStatePai={(l) => {
                  setLocais(locais.map((local, j) => {
                    if (i === j) {
                      return { ...local, cidade: l }
                    }
                    return local
                  }))
                }} />
              </div>
              <div className="col-4 mt-4">
                <Input className="w-100" placeholder="Bairro*" value={local.bairro} setStatePai={(l) => {
                  setLocais(locais.map((local, j) => {
                    if (i === j) {
                      return { ...local, bairro: l }
                    }
                    return local
                  }))
                }} />
              </div>
              <div className="col-12">
                {montarDiasSemanas(i)}
              </div>
            </div>
            <div className="row mt-4">
              <div className="col">
                <div className="dropdown-divider"></div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }

  const toggleCheckboxDia = (i, indexDia) => {
    setLocais(locais.map((local, j) => {
      if (i === j) {
        return {
          ...local, diasDaSemanaIds: local.diasDaSemanaIds.map((dia, iDia) => {
            if (iDia === indexDia) {
              return !dia
            }
            return dia
          })
        }
      }
      return local
    }))
  }

  const montarDiasSemanas = (i) => {
    if (tipoPontoCriar == 'Ponto movel') {
      return (
        <div className="mt-4">
          <label for={"criarSegunda"+ i}>Segunda</label>
          <input id={"criarSegunda"+ i} className="checkDiaSemana" type="checkbox" defaultChecked onChange={() => {
            toggleCheckboxDia(i, 0)
          }} />

          <label for={"criarTerca"+ i}>Terça</label>
          <input id={"criarTerca"+ i} className="checkDiaSemana" style={{ marginRight: '30px !importante' }} type="checkbox" defaultChecked onChange={() => {
            toggleCheckboxDia(i, 1)
          }} />

          <label for={"criarQuarta"+ i}>Quarta</label>
          <input id={"criarQuarta"+ i} className="checkDiaSemana" style={{ marginRight: '30px !importante' }} type="checkbox" defaultChecked onChange={() => {
            toggleCheckboxDia(i, 2)
          }} />

          <label for={"criarQuinta"+ i}>Quinta</label>
          <input id={"criarQuinta"+ i} className="checkDiaSemana" style={{ marginRight: '30px !importante' }} type="checkbox" defaultChecked onChange={() => {
            toggleCheckboxDia(i, 3)
          }} />

          <label for={"criarSexta"+ i}>Sexta</label>
          <input id={"criarSexta"+ i} className="checkDiaSemana" style={{ marginRight: '30px !importante' }} type="checkbox" defaultChecked onChange={() => {
            toggleCheckboxDia(i, 4)
          }} />

          <label for={"criarSabado"+ i}>Sábado</label>
          <input id={"criarSabado"+ i} className="checkDiaSemana" style={{ marginRight: '30px !importante' }} type="checkbox" defaultChecked onChange={() => {
            toggleCheckboxDia(i, 5)
          }} />

          <label for={"criarDomingo" + i}>Domingo</label>
          <input id={"criarDomingo" + i} className="checkDiaSemana" style={{ marginRight: '30px !importante' }} type="checkbox" defaultChecked onChange={() => {
            toggleCheckboxDia(i, 6)
          }} />
        </div>
      )
    }
    return ''
  }

  const enviarFoto = async (event) => {
    const image = event.target.files[0]
    if (image) {
      const url = await UploadImageFirabase.upload('perfil', image)
      setTimeout(async () => {
        novaFoto(url)
      }, 2000)
    }
  }
  const novaFoto = (url) => {
    const tempFotos = fotos.map(foto => foto)
    tempFotos.push(url)
    setFotos(tempFotos)
  }

  const [fotos, setFotos] = useState([])
  const montarFotos = () => {
    return (
      fotos.map((foto, i) => {
        return (
          <div className="mt-2">
            <img className="imagem" src={foto} alt="foto do local" style={{ maxWidth: "250px", alignItems: "center" }} />
            <MdClose className="mx-3 cursor-pointer" size="1.3em" onClick={() => removerFoto(i)}/>
          </div>
        )
      })
    )
  }

  const removerFoto = (i) => {
    const tempFotos = []
    fotos.forEach((foto, j) => {
      if (i !== j)
        tempFotos.push(foto)
    })

    setFotos(tempFotos)
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
            <div className="row mt-4">
              <div className="col">
                <div className="dropdown-divider"></div>
              </div>
            </div>

            <div className="row mt-4">
              <div className="col">
                <div className="d-flex">
                  <span className="">Categoria*: </span>
                  <div className="mx-3" style={{ transform: 'translateY(-6px)' }}>
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

            <div className="row mt-4">
              <div className="col">
                <div className="dropdown-divider"></div>
              </div>
            </div>

            <div className="row mt-4">
              <div className="d-flex align-items-center">
                <span className="">{(tipoPontoCriar == 'Ponto fixo' ? 'Local' : 'Locais')}*:</span>
                {tipoPontoCriar == 'Ponto movel' ?
                  <MdAdd size="1.3em" className="botaoAdicionarLocais mx-3" onClick={() => {
                    const tempLocais = locais.map(local => local)
                    tempLocais.push({
                      estado: "",
                      latitude: "",
                      cidade: "",
                      bairro: "",
                      longitude: "",
                      rua: "",
                      numero: "",
                      pais: "",
                      diasDaSemanaIds: [true, true, true, true, true, true, true],
                      desenharElementoCompletoNaTela: false
                    })
                    setLocais(tempLocais)
                  }} />
                  :
                  ''
                }
              </div>
              {montarLocais()}
            </div>

            <div className="row mt-4">
              <div className="col">
                <label className="btn">
                  <i className="fa fa-image"></i> Escolher fotos: <MdAdd className="botaoAdicionarLocais mx-2" size="1.2em" /> <input style={{opacity: '0'}} className="input-file cursor-pointer" type="file" onChange={enviarFoto} accept="image/png, image/jpeg" />
                </label>
              </div>
              <div className="row">
                {montarFotos()}
              </div>

            </div>

            <div className="row mt-4">
              <div className="col">
                <div className="dropdown-divider"></div>
              </div>
            </div>

            <div className="row mt-4">
              <div className="col"><Input setStatePai={setCepCriar} className="w-100" placeholder="CEP*" /></div>
              <div className="col"><Input setStatePai={setLogradouroCriar} className="w-100" placeholder="Logradouro*" /></div>

              <div className="col"><Input setStatePai={setNumeroCriar} className="w-100" placeholder="N°*" /></div>
              <div className="col"><Input setStatePai={setBairroCriar} className="w-100" placeholder="Bairro*" /></div>
            </div>

            <div className="row mt-4">
              <div className="col-4"><Input setStatePai={setCidadeCriar} className="w-100" placeholder="Cidade*" /></div>
              <div className="col-2"><Input setStatePai={setUfCriar} className="w-100" placeholder="UF*" /></div>

              <div className="col"><Input setStatePai={setTelefoneCriar} className="w-100" placeholder="Telefone" /></div>
              <div className="col"><Input setStatePai={setCelularCriar} className="w-100" placeholder="Celular" /></div>
            </div>
            <div className="row mt-5">
              <div className="col"><Input setStatePai={setDescricaoCriar} className="w-100 inputDescricao" placeholder="Descricao*" /></div>
            </div>


            <div className="row mt-4">
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