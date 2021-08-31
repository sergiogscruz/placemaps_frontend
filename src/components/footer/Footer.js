import react from  'react';
import './Footer.css'
import Button from '../UI/Utils/Botao/Botao'

export default () => {
  return (
    <>

    <div className="bg-footer d-flex justify-content-center align-items-center">
      <div className="mx-3 text-uppercase">
        <h5 className="texto-inscreva-se">Inscreva-se no nosso</h5>
        <h3 className="texto-canal-noticia">Canal de notícias</h3>
      </div>
      <div className="mx-3 div-enviar-email d-flex ">
        <input type="text" placeholder="Seu endereço de e-mail."/>
        <Button backgroundColor="#EC1F46" color="#fff">Enviar</Button>
      </div>
    </div>

    <div className="bg-footer-seg row">
      <div className="col-3">
        <div className="d-flex flex-column align-items-center">
          <h1 className="place-logo text-center">PLACE</h1>
          <h1 className="maps-logo text-center">MAPS</h1>
        </div>
      </div>
      <div className="borda col-3 d-flex justify-content-center">
        <div className="borda w-85">
            <h5 className="div-titulos-rodape">TODAS AS CATEGORIAS</h5>
                <ul className="list-unstyled">
                  <li><a className="text-decoration-none categorias" href="https://google.com.br/">Todas as Ofertas</a></li>
                  <li><a className="text-decoration-none categorias" href="https://google.com.br/">Hotéis</a></li>
                  <li><a className="text-decoration-none categorias" href="https://google.com.br/">Restaurantes</a></li>
                  <li><a className="text-decoration-none categorias" href="https://google.com.br/">Shopping</a></li>
                  <li><a className="text-decoration-none categorias" href="https://google.com.br/">Passeios</a></li>
                </ul>
        </div>
      </div>

      <div className="borda col-3 d-flex justify-content-center">
          <div className="borda w-85">
            <h5 className="div-titulos-rodape">INFORMAÇÕES ADICIONAIS</h5>
                    <ul className="list-unstyled">
                        <li><a className="text-decoration-none categorias" href="https://google.com.br/">Sobre nós</a></li>
                        <li><a className="text-decoration-none categorias" href="https://google.com.br/">Entra em Contato Conosco</a></li>
                        <li><a className="text-decoration-none categorias" href="https://google.com.br/">Perguntas Frequentes</a></li>
                    </ul>
          </div>
      </div>


      <div className="borda col-3 d-flex justify-content-center">
          <div className="borda w-85">
                    <h5 className="div-titulos-rodape">INFORMAÇÃO LEGAL</h5>
                    <ul className="list-unstyled">
                        <li><a className="text-decoration-none categorias" href="https://google.com.br/">Termos e Condições</a></li>
                        <li><a className="text-decoration-none categorias" href="https://google.com.br/">Isenção de Responsabilidade</a></li>
                        <li><a className="text-decoration-none categorias" href="https://google.com.br/">Política de Cancelamento</a></li>
                        <li><a className="text-decoration-none categorias" href="https://google.com.br/">Privacidade</a></li>
                    </ul>
          </div>
      </div>


    <div className="borda col-5 d-flex justify-content-start">
      <div className="borda w-85">
        <h3 className="datalhes-contato">DETALHES DO CONTATO</h3>
        <h2 className="datalhes-contato-sub">Sinta-se à vontade para nos contactar por telefone, e-mail ou através do nosso formulário de contato.</h2>
      </div>
    </div>

    <div className="borda col-7 d-flex justify-content-start">
      <div className="borda w-100">
        <h3 className="datalhes-contato">ENVIE-NOS UMA MENSAGEM</h3>
        <div className="mx-0 div-enviar-nome-completo d-flex">
        <input type="text" placeholder="Seu nome completo*"/>
      </div>

      <div className="mx-0 div-enviar-celular d-flex">
        <input type="text" placeholder="Telefone celular*"/>
      </div>
      
      <div className="mx-0 div-enviar-mensagem d-flex">
        <input type="text" placeholder="Mensagem*"/>
      </div>

      </div>
    </div>    

    </div>
    
    </>
  )
}