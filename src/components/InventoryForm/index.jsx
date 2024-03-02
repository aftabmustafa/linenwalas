import { useState } from 'react'
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

          <select
            id='fabric'
            name='fabric_options'
            defaultValue={fabricOption}
            onChange={handleFabricChange}
          >
            <option value='Fabric' hidden>
              Fabric
            </option>
            <option value='fabirc#1'>Fabric#1</option>
            <option value='fabirc#2'>Fabric#2</option>
            <option value='fabirc#3'>Fabric#3</option>
            <option value='fabirc#4'>Fabric#4</option>
            <option value='fabirc#5'>Fabric#5</option>
            <option value='fabirc#6'>Fabric#6</option>
          </select>

          <select
            id='item'
            name='item_options'
            defaultValue={itemOption}
            onChange={handleItemChange}
          >
            <option value='Item' hidden>
              Item
            </option>
            <option value='item#1'>Item#1</option>
            <option value='item#2'>Item#2</option>
            <option value='item#3'>Item#3</option>
            <option value='item#4'>Item#4</option>
            <option value='item#5'>Item#5</option>
            <option value='item#6'>Item#6</option>
          </select>

          <select
            id='size'
            name='size_options'
            defaultValue={sizeOption}
            onChange={handleSizeChange}
          >
            <option value='' hidden>
              Size
            </option>
            <option value='size#1'>Size#1</option>
            <option value='size#2'>Size#2</option>
            <option value='size#3'>Size#3</option>
            <option value='size#4'>Size#4</option>
            <option value='size#5'>Size#5</option>
            <option value='size#6'>Size#6</option>
          </select>

          <select
            id='color'
            name='color_options'
            defaultValue={colorOption}
            onChange={handleColorChange}
          >
            <option value='' hidden>
              Color
            </option>
            <option value='color#1'>Color#1</option>
            <option value='color#2'>Color#2</option>
            <option value='color#3'>Color#3</option>
            <option value='color#4'>Color#4</option>
            <option value='color#5'>Color#5</option>
            <option value='color#6'>Color#6</option>
          </select>

          <select
            id='qty'
            name='qty_options'
            defaultValue={qtyOption}
            onChange={hanldeQtyChange}
          >
            <option value='' hidden>
              Qty
            </option>
            <option value='qty#1'>Qty#1</option>
            <option value='qty#2'>Qty#2</option>
            <option value='qty#3'>Qty#3</option>
            <option value='qty#4'>Qty#4</option>
            <option value='qty#5'>Qty#5</option>
            <option value='qty#6'>Qty#6</option>
          </select>
        </fieldset>

        <button>Next</button>
      </form>
    </div>
  )
}

export default InventoryForm
