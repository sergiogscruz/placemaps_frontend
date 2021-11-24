import './Perfil.css';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import "react-multi-carousel/lib/styles.css";
import "../UI/Utils/base.css";
import { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useState } from 'react';
import Abas from '../UI/Utils/Abas/Abas';
import { HiLocationMarker } from 'react-icons/hi';
import { FaWhatsapp, FaPhoneAlt} from 'react-icons/fa';
import Botao from '../UI/Utils/Botao/Botao';
import { AiFillCheckCircle } from 'react-icons/ai';
import { BsChevronDown } from 'react-icons/bs';
import { BiUserCircle } from 'react-icons/bi';
import axios from 'axios';

export default function Perfil() {

  let { uuid } = useParams();
  const [perfil, setPerfil] = useState({})
  const [perfilPonto, setPerfilPonto] = useState({})
  const [endereco, setEndereco] = useState({});
  const [urlMaps, setUrlMaps] = useState('');
  const [dadosSemanal, setDadosSemanal] = useState([]);
  const [fotos, setFotos] = useState([]);
  const [comentarios, setComentario] = useState([]);

  useEffect(function() {
    axios.get('api/public/ponto/' + uuid)
    .then(function(result){
      setPerfil(result.data); 
      
      if(result && result.data && result.data.fotos && result.data.fotos.length) {
        result.data.fotos.forEach(function(foto) {
          
          setFotos((fotos) => [...fotos, foto]);
        })
      }
    });

    axios.get('/api/public/comentario/obter-pelo-ponto/' + uuid)
    .then(function(result) {
      if(result && result.data && result.data.content && result.data.content.length) {
        result.data.content.forEach(function(comentario) {

          axios.get('/api/public/comentario/' + comentario.id)
          .then((dadoComentario) => {
            
            let nome = dadoComentario && dadoComentario.data && dadoComentario.data.usuario
              && dadoComentario.data.usuario.nome || 'Anômino'

            let urlFoto = dadoComentario && dadoComentario.data && dadoComentario.data.usuario
            && dadoComentario.data.usuario.foto && dadoComentario.data.usuario.foto.url || null;

            setComentario((comentarios) => 
              [...comentarios, {descricao: comentario.descricao, nome: nome, urlFotoUsuario: urlFoto}])
          })
        })
      }
    })

    axios.get('/api/public/localizacao/ponto/' + uuid)
      .then(function(result){
        let data = result && result.data && result.data.content || [];

        if(data && data.length) {
          setEndereco(data[0]);
        }
    });

    axios.get('/api/public/dadosemanal/obter-pelo-ponto/dias/' + uuid)
    .then(function(result){
      if(result && result.data && result.data.length) {
        result.data.forEach(async function(dadoSemanal) {
          var temp = [];
          await dadoSemanal.dadoSemanalList.forEach(async function(pratoDoDia) {
            
            let result = await axios.get('/api/public/item?dadoSemanalId=' + pratoDoDia.id)
            if (result && result.data && result.data.content && result.data.content.length) { 
              
              let itensDoPratoDoDia = {
                titulo: pratoDoDia.descricao,
                conteudo: (
                  result.data.content.map(function(data) {
                    return (
                      <div className="d-flex itens-dado-semanal">
                        <div style={{display: 'flex', justifyContent: 'flex-start'}}>
                          <AiFillCheckCircle size={25} className="m-r-4"/>
                          <div>{data.descricao}</div>
                        </div>
                        <div style={{width: '50%'}}>
                          {data.valor ? "R$: " + parseFloat(data.valor).toFixed(2).replace(".",",") : "-" }
                        </div>
                      </div>
                    )
                  })
                )
              }
              temp.push((<Abas tituloCabecalho={"teste1"} abas={[itensDoPratoDoDia]} dropdown={true} />))
            }
          })
          setDadosSemanal(dadosSemanal => [...dadosSemanal, [{ titulo: dadoSemanal.diaDaSemana, conteudo: temp }]])
        })
      }
    })
  }, []);

  
  
  useEffect(() => {
    setPerfilPonto(new Perfil(perfil, endereco));
    setUrlMaps(`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665!2d${endereco.longitude}!3d${endereco.latitude}!!!!!!!2!4f5!!!!!`);
  }, [perfil, endereco]);

  function createSemanal(dadosSemanais) {
    if(dadosSemanais && dadosSemanais.length) {
      var semanal = dadosSemanais.map(function(data) {
        return data[0];
      });

      var container = semanal.map(function(item) {
        return {
            titulo: item.titulo,
            conteudo: item.conteudo   
          }
      })

      return (
        <div>
          <Abas abas={container} dropdown={false}/>
        </div>
      )
    }
  }

  function Perfil(perfil, endereco) {
    this.id = perfil && perfil.id || null;
    this.nome = perfil && perfil.nome || null;
    this.telefone = perfil && perfil.contato && perfil.contato.telefone || null;
    this.whatsapp = perfil && perfil.contato && perfil.contato.whatsapp || null;
    this.descricao = perfil && perfil.descricao || null;
    this.subTitulo = perfil && perfil.subTitulo || null;
    this.ativo = perfil && perfil.ativo || null;
    this.endereco = endereco || null;
  }

  function DadoSemanal(data) {
    this.id = data && data.id || null;
    this.descricao = data && data.descricao || null;
    this.nome = data && data.nome || null;
    this.possuiValor = data && data.possui_valor || false;
  }

  function sendWhatsapp(whatsapp) {
    let number = '55' + whatsapp;
    let mensagem = encodeURI('Olá gostaria de mais informações');
    window.open(`https://api.whatsapp.com/send?phone=${number}&text=${mensagem}`);
  }

  function createFotos() {
    let listFoto = fotos.map(function(foto) {
      return (
        <div className="image-perfil" data-src={foto.url} />
      )
    })
    return listFoto;
  }

  function createComentarios() {
      let comentario = comentarios.map(function(comentario) {
        return (
          <div style={{display: "flex", marginBottom: "20px", alignItems: "center"}}>
            <div style={{display: "flex", flexDirection: "column", fontSize: "11px", textTransform: "capitalize"}}>
              {comentario.urlFotoUsuario ? <img src={comentario.urlFotoUsuario} className="user-profile"/> : <BiUserCircle />}
              {comentario.nome && comentario.nome.toLowerCase()}
            </div>
            {comentario.descricao}
            
          </div>
        )
      })

    comentario = comentario && comentario.length ? comentario : "Não não há comentário para este local"
    

    return comentario;
  }

  return (
    <div className="container container-perfil">
      <div className="perfil-header">
        <p className="perfil-title"><strong>{perfil.nome}</strong></p>
        <div className="perfil-score">
          <div>
            <div className="score-desc">NOTA</div>
            <div className="score-value">4.2</div>
          </div>
        </div>
      </div>
      <div className="container-info">
        <div className="info-carousel">
          <AwesomeSlider>
            { createFotos() }
          </AwesomeSlider>
        </div>
      <div className="info-desc">
        <div className="info-location">
            <div className="info-detail">
              <div className="detail-group">
                <div className="detail-header">
                  <div className="lead">{perfil.nome}</div>
                  <span>{perfil.subTitulo}</span>
                </div>
                <div className="detail-header">
                  <div className="lead detail-text">{perfilPonto.descricao}</div>
                </div>
              </div>
              <div className="detail-group">
                <div className="detail-desc">
                  <div className="detail-number">
                    <HiLocationMarker color="#fff" fontSize="18px"/>
                    <div style={{marginLeft: "5px"}}>
                      {endereco.rua + ' - ' + endereco.bairro + ', ' + endereco.numero}
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-between">
                  <div className="detail-desc">
                    <div className="detail-number">
                      <FaWhatsapp color="#fff" fontSize="18px" className="m-r-1"/>
                      <div style={{marginLeft: "5px"}}>{perfilPonto.whatsapp}</div>
                    </div>
                  </div>
                  <div className="detail-desc">
                    <div className="detail-number">
                      <FaPhoneAlt color="#fff" fontSize="18px" className="m-r-1"/>
                      <div style={{marginLeft: "5px"}}>{perfilPonto.telefone}</div>
                    </div>
                  </div>
                </div>
                <div style={{display:'flex',justifyContent: 'center', marginTop: '10px'}}>
                  <Botao className="btn-enviar-whatsapp" onClick={() => sendWhatsapp(perfilPonto.whatsapp)}>
                    <FaWhatsapp className="btn-whatsapp" fontSize="22px"/>
                    Converse com a gente por aqui!
                  </Botao>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
      </div>
      <div>
     
      </div>
      <div>
        { createSemanal(dadosSemanal) }

        {/* <Maps lat="-23.440891" lng="-51.925612"/> */}

        <div style={{marginTop: '50px'}}>
          <div className="header-localizacao">Localização</div>
          <iframe src={urlMaps} width="100%" height="450" ></iframe>
        </div>

        <div style={{marginBottom:"30px", marginTop:"60px"}}>
          <p className="perfil-title m-t-11"><strong>Opniões sobre o {perfil.nome}</strong></p>
          <div style={{width:"49%", height: "8px", backgroundColor: "#0a223d"}}></div>
        </div>
        <div>
          { createComentarios() }
        </div>
      </div>
    </div>
  )}