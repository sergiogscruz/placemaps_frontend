import React from 'react';
import './alertUserCreated.css';
import { AiFillCheckCircle }  from 'react-icons/ai';

export default function AlertUserCreated() {
  return (
    <div className="pm-alert-container">
      <div className="pm-alert-conteudo">
        <AiFillCheckCircle size={40} color={"#44C453"}></AiFillCheckCircle>
        Usuário criado com sucesso
      </div>
    </div>
  )
}
