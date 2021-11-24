import React, { useState } from 'react';
import './pedido-cadastro.css';
import Botao from '../UI/Utils/Botao/Botao';
import AlertPedidoCadastro from './alert-pedido-cadastro';
import Loading from '../UI/Utils/Loading/loading';
import * as yup from 'yup';
import { Formik, Form, Field } from 'formik';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';

export default function PedidoCadastro() {
  const [concordaTermos, setConcordaTermos] = useState(false);
  const [pedidoRealizado, setPedidoRealizado] = useState(false);
  const [pendingRequest, setPendingRequest] = useState(false);
  const [redireciona, setRedireciona] = useState(false);

  const session = JSON.parse(localStorage.getItem('session'))


  if(redireciona) {
    return <Redirect to='/' />
  }

  const validation = yup.object().shape({
      nome: yup.string().min(2, 'É necessário no mínimo 2 caracteres').required('Nome é um nome obrigatório'),
      email: yup.string().email('Email inválido').required('O email é necessário'),
      senha: yup.string().min(6, 'É necessário no mínimo 6 caracteres').required('Senha é um campo obrigatório'),
      confirmSenha: yup.string().min(6,'É necessário no mínimo 6 caracteres').oneOf([yup.ref('senha'), null], 'As senhas não são iguais'),
      numeracaoDocumento: yup.string().min(11, 'Documento inválido').required('Documento é um campo obrigatório'),
      concordaTermos: yup.boolean()
    })

  return (
    <div className="pm-pedido-cadastro-conteudo">
      <div className="pm-pedido-cadastro-info">
        <div className="pm-pedido-cadastro-logo">
            <span style={{color: "#EC1F46"}}>PLACE </span>
            <span style={{color: "#EFE5E5"}}>MAPS</span>
        </div>
      </div>
      <div className="pm-pedido-cadastro-credenciais">
        <div className="pm-pedido-cadastro-registrar">Tornar-se Proprietário</div>
        {pendingRequest ? <Loading></Loading> : null}
        {pedidoRealizado ? <AlertPedidoCadastro></AlertPedidoCadastro> : null}
        <Formik
          initialValues={{
            email: session ? session.email : '',
            senha: session ? 'essa-senha-esta-servindo-apenas-como-placeholder' : '',
            confirmSenha: session ? 'essa-senha-esta-servindo-apenas-como-placeholder' : '',
            nome: session ? session.nome : '',
            numeracaoDocumento: '',
            concordaTermos: false
          }}
          validationSchema={validation}
          onSubmit={values => {
            setPendingRequest(true)
            axios.post('api/public/pedidocadastro?planoId=PADRAO', values)
              .then((result) => {
              setPendingRequest(false)
                setPedidoRealizado(true)
                setTimeout(() => {
                  setRedireciona(true)
                }, 2000)
              }).catch((error) => {
                setPendingRequest(false)  
              })
          }}>
            {({ errors, touched }) => (
              <Form>
                <div className="pm-pedido-cadastro-input">
                  <label>Nome*</label>
                  <Field className="pm-pedido-cadastro-input-largura field" placeholder="Ex: João da Silva" name="nome" disabled={session}/>
                  {errors.nome && touched.nome ? ( <div style={{color: "#EC1F46"}}>{errors.nome}</div> ) : null}
                </div>
                <div className="pm-pedido-cadastro-input">
                  <label>Seu email*</label>
                  <Field className="pm-pedido-cadastro-input-largura field" placeholder="Ex: joao@email.com" name="email" disabled={session}/>
                  {errors.email && touched.email ? ( <div style={{color: "#EC1F46"}}>{errors.email}</div> ) : null}
                </div>
                <div className="pm-pedido-cadastro-input">
                  <label>Senha*</label>
                  <Field className="pm-pedido-cadastro-input-largura field" name="senha" type="password" disabled={session} />
                  {errors.senha && touched.senha ? ( <div style={{color: "#EC1F46"}}>{errors.senha}</div> ) : null}
                </div>
                <div className="pm-pedido-cadastro-input">
                  <label>Confirmar Senha*</label>
                  <Field className="pm-pedido-cadastro-input-largura field" name="confirmSenha" type="password" disabled={session} />
                  {errors.confirmSenha && touched.confirmSenha ? <div style={{color: "#EC1F46"}}>{errors.confirmSenha}</div> : null}
                </div>
                <div className="pm-pedido-cadastro-input">
                  <label>Documento*</label>
                  <Field className="pm-pedido-cadastro-input-largura field" name="numeracaoDocumento" type="text" />
                  {errors.numeracaoDocumento && touched.numeracaoDocumento ? <div style={{color: "#EC1F46"}}>{errors.numeracaoDocumento}</div> : null}
                </div>
                <div className="pm-pedido-cadastro-termos">
                  <Field type="checkbox" name="concordaTermos" onClick={() => {setConcordaTermos(!concordaTermos)}}/>
                  <label htmlFor="concordaTermos">Eu concordo com os termos e condições</label>   
                </div>
                <div >
                  <Botao 
                    className="pm-pedido-cadastro-botao" 
                    children="Realizar Pedido" 
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
          <Link to="/" style={{textDecoration: "none"}}>Página Inicial</Link>
        </div>
      </div>
    </div>
  )
}
