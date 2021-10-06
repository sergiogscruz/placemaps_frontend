import './Botao.css';

/**
 * props = {
 *  type,
 *  onClick,
 *  children
 * }
 */
export default function Botao(props) {
  const type = props.type ? props.type : 'button';
  const className = 'botao ' + (props.className ? props.className : '');
  const disabled = props.disabled || false;

  return (
    <button className={className} onClick={props.onClick} type={type} disabled={disabled}>
      {props.children}
    </button>
  );
}