import react from  'react';
import './Footer.css'
import Button from '../UI/Utils/Botao/Botao'
import Input from '../UI/Utils/Input/Input';
import ListaNaoOrdenada from '../UI/Utils/ListaNaoOrdenada/ListaNaoOrdenada';

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
          <Button backgroundColor="#EC1F46" color="#fff">Enviar</Button>
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
              <h2 className="datalhes-contato-sub">Sinta-se à vontade para nos contactar por telefone, e-mail ou através do nosso formulário de contato.</h2>
              </ListaNaoOrdenada>
          </div>

          <div className="col-5 row">
            <div className="col-12">
              <h3 className="datalhes-contato">ENVIE-NOS UMA MENSAGEM</h3>
            </div>

            <div className="col-6 div-enviar-nome-completo">
              <input className="w-100 m-0" type="text" placeholder="Seu nome completo*"/>
            </div>

            <div className="col-6 div-enviar-celular d-flex">
              <input className="w-100" type="text" placeholder="Telefone celular*"/>
            </div>
            
            <div className="col-12 div-enviar-mensagem">
              <input className="w-100" type="text" placeholder="Mensagem*"/>
            </div>
          </div>    
        </div>
      </div>

    </>
  )
}