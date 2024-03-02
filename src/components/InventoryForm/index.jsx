import { useState } from 'react'
import Select from 'react-select'
import {
  fabricOptions,
  itemOptions,
  sizeOptions,
  colorOptions,
  qtyOptions,
} from '../../utils/constants'
import './index.css'

function InventoryForm() {
  const [fabricOption, setFabricOption] = useState('Fabric')
  const [itemOption, setItemOption] = useState('Item')
  const [sizeOption, setSizeOption] = useState('Size')
  const [colorOption, setColorOption] = useState('Color')
  const [qtyOption, setQtyOption] = useState('Qty')

  function handleDefault(event) {
    event.preventDefault()
  }

  function handleFabricChange(event) {
    setFabricOption(event.target.value)
  }

  function handleItemChange(event) {
    setItemOption(event.target.value)
  }

  function handleSizeChange(event) {
    setSizeOption(event.target.value)
  }

  function handleColorChange(event) {
    setColorOption(event.target.value)
  }

  function hanldeQtyChange(event) {
    setQtyOption(event.target.value)
  }

  return (
    <div className='formContainer'>
      <form onSubmit={handleDefault}>
        <fieldset>
          <legend>Inventory Stock Update</legend>
          <Select
            value={fabricOption}
            onChange={setFabricOption}
            options={fabricOptions}
            maxMenuHeight={200}
            placeholder={fabricOption}
            className='customReactSelect'
          />
          <Select
            value={itemOption}
            onChange={setItemOption}
            options={itemOptions}
            maxMenuHeight={200}
            placeholder={itemOption}
            className='customReactSelect'
          />
          <Select
            value={sizeOption}
            onChange={setSizeOption}
            options={sizeOptions}
            maxMenuHeight={200}
            placeholder={sizeOption}
            className='customReactSelect'
          />
          <Select
            value={colorOption}
            onChange={setColorOption}
            options={colorOptions}
            maxMenuHeight={200}
            placeholder={colorOption}
            className='customReactSelect'
          />
          <Select
            value={qtyOption}
            onChange={setQtyOption}
            options={qtyOptions}
            maxMenuHeight={200}
            placeholder={qtyOption}
            className='customReactSelect'
          />
        </fieldset>
        <button>Next</button>
      </form>
    </div>
  )
}

export default InventoryForm
