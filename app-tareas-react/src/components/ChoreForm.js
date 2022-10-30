import React, {useState} from 'react'
import '../stylesheet/ChoreForm.css'
import { v4 as uuidv4 } from 'uuid'

const ChoreForm = (props) => {

  const [input, setInput] = useState('');

  const handleChange = e => {
    setInput(e.target.value)
  }

  const handleShipping = e => {
    e.preventDefault();
    const choreNew = {
      id: uuidv4(),
      text: input,
      completed: false
    }

    props.onSubmit(choreNew)
  }

  return (
    <form className='chore-form' onSubmit={handleShipping}>
        <input
            className='chore-input'
            type='text'
            placeholder='Escribe una tarea'
            name='texto'
            onChange={handleChange}
        />
        <button className='chore-button'>
            Agregar tarea
        </button>
    </form>
  )
}

export default ChoreForm