import react from  'react';
import './Footer.css'
import Button from '../UI/Utils/Botao/Botao'
import Input from '../UI/Utils/Input/Input';
import ListaNaoOrdenada from '../UI/Utils/ListaNaoOrdenada/ListaNaoOrdenada';
import {SiGooglemaps} from 'react-icons/si'
import {FiPhoneCall} from 'react-icons/fi'
import {IoMdMail} from 'react-icons/io'
import {CgFacebook} from 'react-icons/cg'
import {AiFillYoutube} from 'react-icons/ai'
import {TiSocialInstagram} from 'react-icons/ti'

export default () => {
  return (
    <>

      <div className="bg-footer d-flex justify-content-center align-items-center">
        <div className="mx-3 text-uppercase">
          <h5 className="texto-inscreva-se">Inscreva-se no nosso</h5>
          <h3 className="texto-canal-noticia">Canal de notícias</h3>
        </div>
        <div className="mx-3 div-enviar-email d-flex ">
          <Input placeholder="Seu endereço de e-mail."/>
          <Button>Enviar</Button>
        </div>
      </div>

      <div className="bg-footer-seg">
        <div className="row">
          <div className="col-3">
            <div className="d-flex flex-column align-items-center">
              <h1 className="place-logo text-center">PLACE</h1>
              <h1 className="maps-logo text-center">MAPS</h1>
            </div>
          </div>

          <div className="col-3 d-flex justify-content-center">
              <ListaNaoOrdenada titulo="TODAS AS CATEGORIAS">
              <ul className="list-unstyled">
                <li><a className="text-decoration-none categorias" href="https://google.com.br/">Todas as Ofertas</a></li>
                <li><a className="text-decoration-none categorias" href="https://google.com.br/">Hotéis</a></li>
                <li><a className="text-decoration-none categorias" href="https://google.com.br/">Restaurantes</a></li>
                <li><a className="text-decoration-none categorias" href="https://google.com.br/">Shopping</a></li>
                <li><a className="text-decoration-none categorias" href="https://google.com.br/">Passeios</a></li>
              </ul>
              </ListaNaoOrdenada>
          </div>

          <div className="col-3 d-flex justify-content-center">
              <ListaNaoOrdenada titulo="INFORMAÇÕES ADICIONAIS">
              <ul className="list-unstyled">
                  <li><a className="text-decoration-none categorias" href="https://google.com.br/">Sobre nós</a></li>
                  <li><a className="text-decoration-none categorias" href="https://google.com.br/">Entra em Contato Conosco</a></li>
                  <li><a className="text-decoration-none categorias" href="https://google.com.br/">Perguntas Frequentes</a></li>
              </ul>

                <div className="mt-5 d-flex justify-content-between w-100">
                  <p>REDES SOCIAIS</p>
                  <div className="">
                    <span className="bg-light mx-1 opacity-75 circulo p-1"><CgFacebook className="color-dark" size="1.1em"/></span>
                    <span className="bg-light mx-1 opacity-75 circulo p-1"><AiFillYoutube className="color-dark" size="1.1em"/></span>
                    <span className="bg-light mx-1 opacity-75 circulo p-1"><TiSocialInstagram className="color-dark" size="1.1em"/></span>
                  </div>
                </div>
              </ListaNaoOrdenada>
          </div>

          <div className="col-3 d-flex justify-content-center">
            <ListaNaoOrdenada titulo="INFORMAÇÃO LEGAL">
              <li><a className="text-decoration-none categorias" href="https://google.com.br/">Termos e Condições</a></li>
              <li><a className="text-decoration-none categorias" href="https://google.com.br/">Isenção de Responsabilidade</a></li>
              <li><a className="text-decoration-none categorias" href="https://google.com.br/">Política de Cancelamento</a></li>
              <li><a className="text-decoration-none categorias" href="https://google.com.br/">Privacidade</a></li>
            </ListaNaoOrdenada>
          </div>
        </div>

        <div className="row d-flex justify-content-between px-5 mt-5">
          <div className="col-5 d-flex justify-content-start">
              <ListaNaoOrdenada titulo="DETALHES DO CONTATO">
                <li className="mb-2 mt-3">
                  <h2 className="datalhes-contato-sub">Sinta-se à vontade para nos contactar por telefone, e-mail ou através do nosso formulário de contato.</h2>
                </li>

                <li className="mb-3"><a><span className="mr-3"><SiGooglemaps size="1.5em"/></span> Av. Guedner, 1610 - Jardim Aclimacao, Maringá - PR, 87050-900</a></li>


                <li className="mb-3"><a><span className="mr-3"><FiPhoneCall size="1.5em"/></span> Tel (Horário Comercial) : 3269-1500</a></li>


                <li className="mb-2"><a><span className="mr-3"><IoMdMail size="1.5em"/></span> contato@placemaps.com</a></li>

              </ListaNaoOrdenada>
          </div>

          <div className="col-6 row">
            <div className="col-12">
              <h3 className="datalhes-contato">ENVIE-NOS UMA MENSAGEM</h3>
            </div>

            <div className="col-6 div-enviar-nome-completo">
              <Input className="w-100" placeholder="Nome completo*"/>
            </div>

            <div className="col-6 div-enviar-celular d-flex">
              <Input className="w-100" placeholder="Telefone celular*"/>
            </div>
            
            <div className="col-12 div-enviar-mensagem mt-2">
              <Input className="w-100" placeholder="Mensagem*"/>
            </div>

            <div className="col-12 row mx-0 mt-2">
              <div className="col-5 p-0">
                <Button className="w-100">Enviar</Button>
              </div>

              <div className="d-flex align-items-center justify-content-end col p-0">
                <span className="color-light">*Campos Obrigatórios</span>
              </div>
            </div>    
          </div>    
            
        </div>
        <div className="color-light d-flex flex-column my-5 align-items-center">
          <small>TODOS OS DIREITOS RESERVADOS</small>
          <small>PLACEMAPS</small>
        </div>
      </div>

    </>
  )
}