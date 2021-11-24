import react from 'react';
import './IconeComValor.css';

/**
 * props = {
 *  valor,
 *  children,
 *  scaleValor,
 *  pxEsquerdaValor,
 *  pxBaixoValor,
 * }
 */


export default (props) => {
  const style = {
    position: 'relative',
    left: (props.pxEsquerdaValor ? props.pxEsquerdaValor : '0') + 'px',
    bottom: (props.pxBaixoValor ? props.pxBaixoValor : '0') + 'px',
    transform: `scale(${(props.scaleValor ? props.scaleValor : '1')})`,
  }
  return (
    <div className="container-icone-com-valor" onClick={() => { props.onClick() }}>
      { props.children }
      <div style={style} className="container-valor-do-icone">
        <span>{ props.valor }</span>
      </div>
    </div>
  );
}