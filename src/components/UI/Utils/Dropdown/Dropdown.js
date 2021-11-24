import { useEffect, useState } from 'react'
import { DropdownButton, Dropdown as ReactstrapDropdown } from 'react-bootstrap'
import { InputGroup } from 'reactstrap'
import './Dropdown.css'

export default function Dropdown(props) {
  const [itemAtivo, setItemAtivo] = useState({id: '', nome: 'Selecione uma opção'})

  useEffect(() => console.log(itemAtivo), [itemAtivo])
  const handleItemAtivo = (item) => {
    setItemAtivo(item)
    if (typeof props.setStateOnChange === 'function') {
      props.setStateOnChange(item)
    }
  }
  const montarOptions = () => {
    return props.options.map(option => {
      return <ReactstrapDropdown.Item onClick={() => handleItemAtivo(option)}>{option.nome}</ReactstrapDropdown.Item>
    })
  }
  return (
    <InputGroup className="mb-3">
      <DropdownButton
        variant="outline-primary"
        title={itemAtivo.nome}
      >
        { montarOptions() }
      </DropdownButton>
    </InputGroup>
  )
}