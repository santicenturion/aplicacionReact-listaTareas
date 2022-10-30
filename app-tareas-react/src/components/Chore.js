import React from 'react'
import '../stylesheet/Chore.css'
import { AiOutlineCloseCircle } from "react-icons/ai";

const Chore = ({ id, text, completed, completedChore, deleteChore }) => {
  return (
    <div className={ completed ? 'container-chore completed' : 'container-chore'} >
        <div className='text-chore' onClick={() => completedChored(id)}>
            {text}
        </div>
        <div className='chore-container-icons' onClick={() => deleteChore(id)}>
            <AiOutlineCloseCircle className='chore-icon' />
        </div>
    </div>
  )
}

export default Chore