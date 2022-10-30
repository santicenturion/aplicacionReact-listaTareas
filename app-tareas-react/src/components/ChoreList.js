import React, {useState} from 'react'
import ChoreForm from './ChoreForm'
import Chore from './Chore'
import '../stylesheet/ChoreList.css'

const ChoreList = () => {

    const[chores, setChores] = useState([])

    const addChore = chore => {
        if(chore.text.trim()){
            chore.text = chore.text.trim()
            const updatesChores = [chore, ...chores]
            setChores(updatesChores)
        }
    }

    const deleteChore = id => {
        const updatesChores = chores.filter(chore => chore.id !== id)
        setChores(updatesChores);
    }

    const completedChore = id => {
        const updatesChores = chores.map(chore =>{
            if(chore.id === id){
                chore.completed = !chore.completed;
            }
            return chore;
        })
        setChores(updatesChores);
    }

  return (
    <>
       <ChoreForm  onSubmit={addChore} />
       <div className='chore-list-container'>
            {
                chores.map((chore) => 
                    <Chore  
                        key={chore.id}
                        id={chore.id}
                        text={chore.text}  
                        completed={chore.completed}  
                        completedChore={completedChore}
                        deleteChore={deleteChore} />
                )
            }
        </div> 
    </>
  )
}

export default ChoreList