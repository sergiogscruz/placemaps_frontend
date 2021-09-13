import React, { useState,setState } from 'react';
import './cadastrar.css';
import Botao from '../UI/Utils/Botao/Botao';
import * as yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';


export default function Cadastrar() {
  const [inputEmail, setInputEmail] = useState('');
  const [inputSenha, setInputSenha] = useState('');
  const [confirmSenha, setInputConfirmSenha] = useState('');
  const [inputCPF, setInputCPF] = useState('');
  const [tipoPessoa, setTipoPessoa] = useState('');
  const [concordaTermos, setConcordaTermos] = useState(false);

  const validation = yup.object().shape({
      nome: yup.string().min(2, 'É necessário no mínimo 2 caracteres').required('Nome é um nome obrigatório'),
      email: yup.string().email('Email inválido').required('O email é necessário'),
      senha: yup.string().min(6, 'É necessário no mínimo 6 caracteres').required('Senha é um campo obrigatório'),
      confirmSenha: yup.string().min(6,'É necessário no mínimo 6 caracteres').oneOf([yup.ref('senha'), null], 'As senhas não são iguais'),
      concordaTermos: yup.boolean()
    })

  const handleOnSubmit = function (e) {
    console.log(e)
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
            console.log(values);
          }}>
            {({ errors, touched }) => (
              <Form>
                <div className="pm-cadastrar-input">
                  <label>Nome*</label>
                  <Field className="pm-cadastrar-input-largura field" name="nome" />
                  {errors.nome && touched.nome ? ( <div style={{color: "#EC1F46"}}>{errors.nome}</div> ) : null}
                </div>
                <div className="pm-cadastrar-input">
                  <label>Seu email*</label>
                  <Field className="pm-cadastrar-input-largura field" name="email" />
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
                <div className="pm-cadastrar-termos">
                  <Field type="checkbox" name="concordaTermos" onClick={() => {setConcordaTermos(!concordaTermos)}}/>
                  <label htmlFor="concordaTermos">Eu concordo com os termos e condições</label>   
                </div>
                <div >
                  <Botao 
                    className="pm-cadastrar-botao" 
                    children="Entrar" 
                    type="submit"
                    disabled={!concordaTermos}
                    onClick={() => alert(concordaTermos)}>
                  </Botao>
                </div>
                <span>
                  * Campos obrigatórios
                </span>
              </Form>
            )}
        </Formik>
  

        {/* <div className="pm-cadastrar-registrar">Registrar</div>
        <div className="pm-cadastrar-input">
          <label>Seu email*</label>
          <Input name="email" 
            className="pm-cadastrar-input-largura" 
            placeholder="Informe seu email"
            setStatePai={setInputEmail}
            />
        </div>
        <div className="pm-cadastrar-input">
          <label>Senha*</label>
          <Input className="pm-cadastrar-input-largura" type="password" placeholder="Informe sua senha" setStatePai={setInputSenha}></Input>
        </div>
        <div className="pm-cadastrar-input">
          <label>Repita sua senha*</label>
          <Input className="pm-cadastrar-input-largura" type="password" placeholder="Confirme sua senha" setStatePai={setInputConfirmSenha}></Input>
        </div>
        <div className="pm-cadastrar-termos">
          <input id="termos" type="checkbox" value="PF" onClick={() => setConcordaTermos(!concordaTermos)}></input>
          <label htmlFor="termos">Eu concordo com os termos e condições</label>   
        </div>
        <div >
          <Botao className="pm-cadastrar-botao" children="Entrar" onClick={()=> {alert(concordaTermos)}}></Botao>
        </div> */}
      </div>
    </div>
  )
}
