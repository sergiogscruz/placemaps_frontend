import './Perfil.css';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import "react-multi-carousel/lib/styles.css";
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

    // setUrlMaps(`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29294.49986466788!2d${endereco.latitude}!3d${endereco.longitude}3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1635467063772!5m2!1spt-BR!2sbr`)
        setUrlMaps(`https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d10357.087178302436!2d${endereco.longitude}6955346!3d${endereco.latitude}37299436!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1635468368123!5m2!1spt-BR!2sbr`)
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
    <div className="container-perfil">
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
              <div className="detail-header">
                <div className="lead">{perfil.nome}</div>
                <em>{perfil.subTitulo}</em>
              </div>
              <div className="detail-desc">
                <div className="detail-number">
                  <HiLocationMarker color="#0A223D" fontSize="18px"/>
                  <div style={{marginLeft: "5px"}}>
                    {endereco.rua + ' - ' + endereco.bairro + ', ' + endereco.numero}
                  </div>
                </div>
              </div>
              <div className="detail-desc">
                <div className="detail-number">
                  <FaWhatsapp color="#0A223D" fontSize="18px"/>
                  <div style={{marginLeft: "5px"}}>{perfilPonto.whatsapp}</div>
                </div>
              </div>
              <div className="detail-desc">
                <div className="detail-number">
                  <FaPhoneAlt color="#0A223D" fontSize="18px" />
                  <div style={{marginLeft: "5px"}}>{perfilPonto.telefone}</div>
                </div>
              </div>
            </div>
            <div className="info-detail">
              <div className="detail-header">
                <em>Detalhes</em>
                <div className="lead detail-text">{perfilPonto.descricao}</div>
              </div>
              <div style={{display:'flex',justifyContent: 'center', marginTop: '10px'}}>
                <Botao className="btn-enviar-whatsapp" onClick={() => sendWhatsapp(perfilPonto.whatsapp)}>
                  <FaWhatsapp className="btn-whatsapp" fontSize="22px"/>
                  Enviar mensagem
                </Botao>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Abas abas={[{titulo: "Segunda", conteudo: <div>Qualquer</div>},{titulo: "Terça", conteudo: <div>Qualquer 2</div>},{titulo: "Quarta", conteudo: <div>Qualquer 3</div>}]}/>
      </div>
      <div className="info-map">
        <iframe src={urlMaps} width="600" height="450"   loading="lazy"></iframe>
      </div>
    </div>
  )}