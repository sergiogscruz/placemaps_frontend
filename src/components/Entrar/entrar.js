import React, { useEffect, useState } from 'react';
import './entrar.css';
import { ImQuotesLeft }  from 'react-icons/im';
import Botao from '../UI/Utils/Botao/Botao';
import { Link, Redirect } from 'react-router-dom';
import * as yup from 'yup';
import { Formik, Form, Field } from 'formik';
import { AxiosHelper } from '../services/api';
import Loading from '../UI/Utils/Loading/loading';
import axios from 'axios';

export default function Entrar() {
  const [pendingRequest, setPendingRequest] = useState(false);
  const [statusCodeLogin, setStatusCodeLogin] = useState('');
  const [tipoUsuario, setTipoUsuario] = useState('');
  const [redireciona, setRedireciona] = useState(false);

  const validation = yup.object().shape({
    email: yup.string().email('Email inválido').required('O email não informado'),
    senha: yup.string().required('Senha não informada'),
  })

  useEffect(() => {
    setRedireciona(true);
  },[tipoUsuario])

  if(redireciona) {
    if(tipoUsuario) {
      return <Redirect to='/' />
    }
  }

  return (
    <div className="pm-entrar-conteudo">
      <div className="pm-entrar-info">
        <div className="pm-entrar-logo">
          <div className="pm-logo-words">
            <span style={{color: "#EC1F46"}}>PLACE </span>
            <span style={{color: "#EFE5E5"}}>MAPS</span>
          </div>
        </div>
        <div className="pm-depoimento">
          <div className="pm-depoimento-content">
            <ImQuotesLeft size= "2em" style={{color: "#fff", marginBottom: '10px'}}/>
            <p style={{color: "#f5ececcc"}}><i>PlaceMaps é uma plataforma que integra a demanda e oferta da cidade, é sensacional!</i></p>
            <p style={{color: "#EC1F46"}}><strong>Pedro Henrique</strong></p>
            <div className="pm-img-world"></div>
          </div>
        </div>
      </div>
      <div className="pm-entrar-credenciais">
        <div className="pm-center">
          <div className="pm-credenciais-acesso">Acesse sua conta</div>
          { pendingRequest ? <Loading></Loading> : null}
          <Formik
            initialValues={{
              email: '',
              senha: '',
            }}
            validationSchema={validation}
            onSubmit={value => {
              setPendingRequest(true)

              axios.post('api/public/autenticacao', value)
                .then(function(result) {
                  if (result.data.token) {
                    setTipoUsuario(result.data.tipoUsuario);
                    localStorage.setItem("session", JSON.stringify(result.data));
                    AxiosHelper.initializeAxios()
                  }

                  setPendingRequest(false);
                })
                .catch(function(error) {
                  setPendingRequest(false);
                  setStatusCodeLogin(error.response.status)
                })
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="pm-entrar-input">
                  <label htmlFor="email">Seu email* </label>
                  <Field id="email" className="pm-entrar-input-largura field" placeholder="Informe seu email" name="email" />
                  {errors.email && touched.email ? ( <div style={{color: "#EC1F46"}}>{errors.email}</div> ) : null}
                </div>
                <div className="pm-entrar-input">
                  <label htmlFor="senha" >Senha*</label>
                  <Field id="senha" className="pm-entrar-input-largura field" name="senha" type="password" />
                  {errors.senha && touched.senha ? ( <div style={{color: "#EC1F46"}}>{errors.senha}</div> ) : null}
                </div>
                { statusCodeLogin === 401 ? <div style={{color: '#EC1F46'}}>Senha ou email incorreto</div> :null }
                <div >
                  <Botao 
                    className="pm-entrar-botao" 
                    children="Entrar" 
                    type="submit">
                  </Botao>
                </div>
              </Form>
            )}
          </Formik>
          <div style={{marginTop: "20px"}}>
            <Link to="/cadastrar" style={{textDecoration: "none"}}>Faça seu cadastro</Link>
          </div>
          <div style={{marginTop: "20px"}}>
            <Link to="/" style={{textDecoration: "none"}}>Página Inicial</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
