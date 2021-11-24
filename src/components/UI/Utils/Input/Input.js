import './Input.css';

/**
 * props = {
 *  setStatePai,
 *  placeHolder,
 *  className
 * }
 */
export default function Input(props) {
  const handleInput = (e) => {
    if (typeof props.setStatePai === 'function')
      props.setStatePai(e.target.value);
  };

  const verificarTeclaPressionada = (e) => {
    if (props.onPressEnter) {
      const code = (e.keyCode ? e.keyCode : e.which);
      if(code === 13) {
        props.onPressEnter()
      }
    }
  }

  const classNameProps = props.className ? props.className : '';
  const className = "input " + classNameProps;

  return (
    props.value ? 
      <input value={props.value} onKeyPress={verificarTeclaPressionada} type={props.type} className={className} placeholder={props.placeholder} onChange={(e) => handleInput(e)}/>
    :
      <input onKeyPress={verificarTeclaPressionada} type={props.type} className={className} placeholder={props.placeholder} onChange={(e) => handleInput(e)}/>
  );

}