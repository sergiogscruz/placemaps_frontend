import react, { useState, useEffect } from 'react';
import './ListaNaoOrdenada.css';

/**
 * props = {
 *  titulo,
 *  classNameUl,
 *  classNameTitulo,
 *  className,
 *  children
 * }
 */

export default (props) => {
  const className = 'd-flex flex-column align-items-center container-lista-nao-ordenada ' + ( props.className ? props.className : '' ) + ' ' + ( props.textColor ? props.textColor : 'text-white');  
  const classNameUl = 'ul-lista-nao-ordenada d-flex flex-column ' + ( props.classNameUl ? props.classNameUl : 'align-items-baseline' ); 
  const classNameTitulo = 'titulo-lista-nao-ordenada ' + ( props.classNameTitulo ? props.classNameTitulo : '' ); 

  return (
    <div className={ className }>
      <div>
        <h5 className={ classNameTitulo }>
          { props.titulo }
        </h5>
        <ul className={ classNameUl }>
          { props.children }
        </ul>
      </div>
    </div>
  );
}