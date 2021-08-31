//import react, { useState } from 'react';
import './ListaDescritiva.css';
import { AiFillCheckCircle } from 'react-icons/ai';
import { BiChevronDown } from 'react-icons/bi';
import { useState, useEffect } from 'react';

/**
 * props = {
 *  itensLista: [ { texto: String, preco: float } ],
 *  considerarPreco: boolean,
 *  titulo: String,
 *  className: String
 * }
 */

export default (props) => {
  const [listaExpandida, setListaExpandida] = useState(false);
  const [classNameRotacionarIcone, setClassnameRotacionarIcone] = useState('');
  const [classNameLista, setClassNameLista] = useState('');

  const handleListaExpandida = () => {
    setListaExpandida(!listaExpandida)
  }

  useEffect(() => {
    if (listaExpandida) {
      setClassnameRotacionarIcone('rotate-icone-lista-descritiva');
      setClassNameLista('expandir-lista-descritiva');
    }
    else {
      setClassnameRotacionarIcone('');
      setClassNameLista('')
    }

  }, [listaExpandida]);

  const itens = props.itens.map((item) => {
    const spanPreco = props.considerarPreco ? <span className="col d-flex justify-content-end"> R$ { item.preco } </span> : '';
    return (
      <div className={"col-6 d-flex align-items-center p-0"}>
        <AiFillCheckCircle className="icone-checked-item-da-lista col-1 m-0 p-0"/> 
        <li className="col-11 d-flex justify-content-between row ">
          <span className="col-8">
            { item.texto }
          </span>
          { spanPreco }
        </li>
      </div>
    )
  });

  return (
    <div className={"container-lista-descritiva " + props.className}>
      <div className="container-titulo-lista-descritiva">
        <BiChevronDown className={"icone-lista-descritiva " + classNameRotacionarIcone} onClick={handleListaExpandida}/>
        <h4 className="titulo-lista-descritiva">{ props.titulo }</h4>
      </div>
      <ul className={"lista-descritiva p-0 m-0 row " + classNameLista}>
        { itens }
      </ul>

    </div>
  );
}