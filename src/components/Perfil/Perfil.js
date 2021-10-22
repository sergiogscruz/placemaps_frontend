import './Perfil.css';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import "react-multi-carousel/lib/styles.css";

export default function Perfil() {

  return (
  
    <div className="container-perfil">
      <div className="perfil-header">
        <p className="perfil-title">CASEBRE DO DITO RESTAURANTE CAFÉ</p>
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
        <div className="info-location">
          <div className="info-detail">
            <div className="detail-header">RESTAURANTE COM COMIDAS TRADICIONAIS</div>
            <div className="detail-desc1">
              Uma descrição geral qualquer sobre este estabelicimento gastronômico.
            </div>
            <div className="detail-desc2">
              Horário de Funcionamento 19h30 - 23h59
            </div>
            <div className="detail-desc3">
              <div>Entre em contato</div>
              <div className="detail-number">
                <div style={{marginRight:"30px"}}>(44) 30232221</div>
                <div>(44) 999999999</div>
              </div>
            </div>
          </div>
          <div className="info-map"></div>
        </div>

      </div>
    </div>
  )}