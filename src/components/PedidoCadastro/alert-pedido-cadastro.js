import React from 'react';
import './alert-pedido-cadastro.css';
import { AiFillCheckCircle }  from 'react-icons/ai';

export default function AlertPedidoCadastro() {
  return (
    <div className="pm-alert-container">
      <div className="pm-alert-conteudo">
        <AiFillCheckCircle size={40} color={"#44C453"}></AiFillCheckCircle>
        Pedido realizado com sucesso.
      </div>
    </div>
  )
}
