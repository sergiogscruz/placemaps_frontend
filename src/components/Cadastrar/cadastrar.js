import React, { useState, useEffect } from 'react';
import './cadastrar.css';
import Botao from '../UI/Utils/Botao/Botao';
import AlertUserCreated from './alertUserCreated';
import Loading from '../UI/Utils/Loading/loading';
import * as yup from 'yup';
import { Formik, Form, Field } from 'formik';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';
import { AxiosHelper } from '../services/api';
import { UploadImageFirabase } from '../Firebase/upload-image-firebase';

export default function Cadastrar() {
  const [concordaTermos, setConcordaTermos] = useState(false);
  const [userCreated, setUserCreated] = useState(false);
  const [pendingRequest, setPendingRequest] = useState(false);
  const [tipoUsuario, setTipoUsuario] = useState('');
  const [redireciona, setRedireciona] = useState(false);
  const [fotoPerfil, setFotoPerfil] = useState({url: 'https://firebasestorage.googleapis.com/v0/b/place-maps-331023.appspot.com/o/imagens%2Fno-user-image-icon-27.jpg?alt=media&token=55643b2f-4342-46c5-bb5e-1631b6070a07'});

  useEffect(() => {
    setRedireciona(true);
  },[tipoUsuario])

  if(redireciona) {
    if(tipoUsuario) {
      return <Redirect to='/' />
    }
  }

  const validation = yup.object().shape({
      nome: yup.string().min(2, 'É necessário no mínimo 2 caracteres').required('Nome é um nome obrigatório'),
      email: yup.string().email('Email inválido').required('O email é necessário'),
      senha: yup.string().min(6, 'É necessário no mínimo 6 caracteres').required('Senha é um campo obrigatório'),
      confirmSenha: yup.string().min(6,'É necessário no mínimo 6 caracteres').oneOf([yup.ref('senha'), null], 'As senhas não são iguais'),
      concordaTermos: yup.boolean()
    })

  const handleChange = async (event) => {
    const image = event.target.files[0]
    if (image) {
      const url = await UploadImageFirabase.upload('perfil', image)
      setTimeout(async () => {
        setFotoPerfil({url: url})
      }, 2000)
    }
  }

  return (
    <div className="pm-cadastrar-conteudo">
      <div className="pm-cadastrar-info">
        <div className="pm-cadastrar-logo">
            <span style={{color: "#EC1F46"}}>PLACE </span>
            <span style={{color: "#EFE5E5"}}>MAPS</span>
        </div>
      </div>
      <div className="pm-cadastrar-credenciais">
        <div className="pm-cadastrar-registrar">Registrar</div>
        {pendingRequest ? <Loading></Loading> : null}
        {userCreated ? <AlertUserCreated></AlertUserCreated> : null}
        <Formik
          initialValues={{
            email: '',
            senha: '',
            confirmSenha: '',
            nome: '',
            concordaTermos: false
          }}
          validationSchema={validation}
          onSubmit={values => {
            setPendingRequest(true)
            values['foto'] = fotoPerfil
            axios.post('api/public/autenticacao/cadastrar-usuario', values )
              .then((result) => {
              setPendingRequest(false)
                if (result.status === 200) {
                 setUserCreated(true)
                  setTimeout(() => {
                    if (result.data.token) {
                      setTipoUsuario(result.data.tipoUsuario);
                      localStorage.setItem("session", JSON.stringify(result.data));
                      AxiosHelper.initializeAxios()
                    }
                  }, 2000)
                }
              }).catch((error) => {
                
            })
          }}>
            {({ errors, touched }) => (
              <Form>
                <div className="pm-cadastrar-input">
                  <label>Nome*</label>
                  <Field className="pm-cadastrar-input-largura field" placeholder="Ex: João da Silva" name="nome" />
                  {errors.nome && touched.nome ? ( <div style={{color: "#EC1F46"}}>{errors.nome}</div> ) : null}
                </div>
                <div className="pm-cadastrar-input">
                  <label>Seu email*</label>
                  <Field className="pm-cadastrar-input-largura field" placeholder="Ex: joao@email.com" name="email" />
                  {errors.email && touched.email ? ( <div style={{color: "#EC1F46"}}>{errors.email}</div> ) : null}
                </div>
                <div className="pm-cadastrar-input">
                  <label>Senha*</label>
                  <Field className="pm-cadastrar-input-largura field" name="senha" type="password" />
                  {errors.senha && touched.senha ? ( <div style={{color: "#EC1F46"}}>{errors.senha}</div> ) : null}
                </div>
                <div className="pm-cadastrar-input">
                  <label>Confirmar Senha*</label>
                  <Field className="pm-cadastrar-input-largura field" name="confirmSenha" type="password" />
                  {errors.confirmSenha && touched.confirmSenha ? <div style={{color: "#EC1F46"}}>{errors.confirmSenha}</div> : null}
                </div>
                <div className="foto">
                  <div>
                    <img className="imagem" src={(fotoPerfil.url)} alt="firebase-image" style={{maxWidth: "150px", alignItems: "center"}}/>
                  </div>
                  <div>
                    <label className="btn btn-primary">
                      <i className="fa fa-image"></i> Escolher foto <input className="input-file" type="file" onChange={handleChange} accept="image/png, image/jpeg" />
                    </label>
                  </div>
                </div>
                <div className="pm-cadastrar-termos">
                  <Field type="checkbox" name="concordaTermos" onClick={() => {setConcordaTermos(!concordaTermos)}}/>
                  <label htmlFor="concordaTermos">Eu concordo com os termos e condições</label>   
                </div>
                <div >
                  <Botao 
                    className="pm-cadastrar-botao" 
                    children="Registrar" 
                    type="submit"
                    disabled={!concordaTermos}>
                  </Botao>
                </div>
                <span className="pm-margin-bottom">
                  * Campos obrigatórios
                </span>
              </Form>
            )}
        </Formik>

        <div style={{marginTop: "20px"}}>
          <Link to="/entrar" style={{textDecoration: "none"}}>Entrar</Link>
        </div>
        <div style={{marginTop: "20px"}}>
          <Link to="/" style={{textDecoration: "none"}}>Página Inicial</Link>
        </div>
      </div>
    </div>
  )
}
