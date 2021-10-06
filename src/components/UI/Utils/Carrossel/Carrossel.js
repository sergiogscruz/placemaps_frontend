import react, { useState, useEffect } from 'react';
import './Carrossel.css'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

/**
 * props = {
 *  itens: [Component],
 *  titulo: String,
 *  ClassName: String,
 *  ClassNameSetas: String * 
 * }
 */

export default (props) => {
  const [itemAtivo, seteItemAtivo] = useState(0)
  const tempoTransicao = 450
  const [style, setStyle] = useState({
    transition: tempoTransicao + "ms"
  })

  // useEffect(() => {
  //   setInterval(() => {
  //     clickSetaDireita()
  //   }, 5000);
  // }, [])

  const clickSetaDireita = function () {
    setStyle({
      ...style,
      opacity: 0
    })
    setTimeout(() => {
      if (itemAtivo == props.itens.length - 1) {
        seteItemAtivo(0)
      }
      else {
        seteItemAtivo(itemAtivo + 1)
      }
      setStyle({
        ...style,
        opacity: 1
      })
    }, tempoTransicao)
  }

  const clickSetaEsquerda = function () {
    setStyle({
      ...style,
      opacity: 0
    })
    setTimeout(() => {
      if (itemAtivo == 0) {
        seteItemAtivo(props.itens.length - 1)
      }
      else {
        seteItemAtivo(itemAtivo - 1)
      }
      setStyle({
        ...style,
        opacity: 1
      })
    }, tempoTransicao)
  }


  return (
    <div className="bg-feedbackelemento">
      <h3 className="d-flex texto-carrossel justify-content-center mt-5">
        <div className="mt-5">
          {props.titulo}
        </div>
      </h3>
      <div className="d-flex align-items-center justify-content-center p-5">
        <IoIosArrowBack className="cursor-pointer" size="2.5em" onClick={clickSetaEsquerda} />
        <div style={style}>
          {props.itens[itemAtivo]}
        </div>
        <IoIosArrowForward className="cursor-pointer" size="2.5em" onClick={clickSetaDireita} />
      </div>
    </div>
  )
}