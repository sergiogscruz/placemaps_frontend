import './Perfil.css';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import "react-multi-carousel/lib/styles.css";
import "../UI/Utils/base.css";
import { useEffect } from 'react';
import Api from '../services/api';
import { useParams } from "react-router-dom";
import { useState } from 'react';
import Abas from '../UI/Utils/Abas/Abas';
import { HiLocationMarker } from 'react-icons/hi';
import { FaWhatsapp, FaPhoneAlt} from 'react-icons/fa';
import Botao from '../UI/Utils/Botao/Botao';

export default function Perfil() {

  let { uuid } = useParams();
  const [perfil, setPerfil] = useState({})
  const [perfilPonto, setPerfilPonto] = useState({})
  const [endereco, setEndereco] = useState({});
  const [urlMaps, setUrlMaps] = useState('');

  useEffect(function() {
    Api.get('api/public/ponto/' + uuid)
    .then(function(result){
      setPerfil(result.data);
      
    })

    Api.get('/api/public/localizacao/ponto/' + uuid)
      .then(function(result){
        setEndereco(result.data.content[0]);
    })
  }, []);

  useEffect(() => {
    setPerfilPonto(new Perfil(perfil, endereco));

    console.log(endereco.longitude, endereco.latitude)
    setUrlMaps(`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660.823006!2d${endereco.longitude}!3d${endereco.latitude}!!!!!!!2!4f4!3m3!1m2!1s!2zMjPCsDI1JzUzLjciUyA1McKwNTQnNTEuMSJX!!!!!!!!`)
   
  }, [perfil, endereco]);


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

  function sendWhatsapp(whatsapp) {
    let number = '55' + whatsapp;
    let mensagem = encodeURI('Olá gostaria de mais informações');
    window.open(`https://api.whatsapp.com/send?phone=${number}&text=${mensagem}`);
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
            <div className="image-perfil" data-src="https://media-cdn.tripadvisor.com/media/photo-s/12/89/41/12/casebre-do-dito.jpg" />
            <div className="image-perfil" data-src="https://media-cdn.tripadvisor.com/media/photo-s/12/89/43/ef/espaco-interno.jpg" />
            <div className="image-perfil" data-src="https://media-cdn.tripadvisor.com/media/photo-s/1b/01/c0/34/photo2jpg.jpg" />
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
        <Abas abas={[{titulo: "Segunda", conteudo: <div>Qualquer</div>},{titulo: "Terça", conteudo: <div>Qualquer 2</div>},{titulo: "Quarta", conteudo: <div>Qualquer 3</div>}]}/>
      </div>
      <div>
        {/* <Maps lat="-23.440891" lng="-51.925612"/> */}
        <iframe src={urlMaps} width="100%" height="450"  allowfullscreen="" ></iframe>
      </div>
    </div>
  )}