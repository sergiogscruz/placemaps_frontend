import react from 'react';
import './Botao.css';

/**
 * props = {
 *  type,
 *  onClick,
 *  children
 * }
 */
export default (props) => {
  const type = props.type ? props.type : 'button';
  const className = 'botao ' + (props.className ? props.className : '');

  return (
    <button className={className} onClick={props.onClick} type={type}>
      {props.children}
    </button>
  );
}