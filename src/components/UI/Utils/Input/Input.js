import react from 'react';
import './Input.css';

/**
 * props = {
 *  setStatePai,
 *  placeHolder,
 *  className
 * }
 */
export default (props) => {
  const handleInput = (e) => {
    if (typeof props.setStatePai === 'function')
      props.setStatePai(e.target.value);
  };

  const classNameProps = props.className ? props.className : '';
  const className = "input " + classNameProps;

  return (
    <input className={className} placeholder={props.placeholder} onChange={(e) => handleInput(e)}/>
  );
}