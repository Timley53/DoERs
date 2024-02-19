import React, { useState } from 'react'
import { MdCancel } from 'react-icons/md';
import { useDispatch } from 'react-redux'
import { addGoal } from '../../Store/userSlice';
import generateUniqueId from 'generate-unique-id';

interface Props{
  setAddGoal: React.Dispatch<React.SetStateAction<boolean>>;
}

function GoalCreateModal({setAddGoal}: Props) {
    const [newGoal, setNewGoal] = useState("")
    const dispatch = useDispatch()
  return (
    <div className=' h-screen w-screen bg-opacity-45 bg-gray-600 backdrop-blur-md fixed flex items-center justify-center text-black'>

        <form  className="addinp w-[60%] max-w-[400px] h-[60%] max-h-[400px] bg-white flex flex-col items-center p-2 rounded-md">

          <button className='self-end text-2xl m-2 hover:text-rose-500' onClick={()=> setAddGoal(false)}><MdCancel/></button>

            <h2>Add new Goal</h2>

            <textarea className='my-3 w-[70%] h-[70%] bg-transparent border-4 rounded-sm text-sm p-2' name="newGoal" id="newGoal" placeholder='Write new goal' value={newGoal} onChange={(e)=> setNewGoal(e.target.value)}>
                
            </textarea>

        <button onClick={(e)=>{

          e.preventDefault()

        dispatch(addGoal({
             text: newGoal,
             date: new Date().toDateString(),
             completed: false,
             goalId: `goal/${generateUniqueId({
              length: 8,
              useLetters: true,
              useNumbers: true,
          })}`,
        }))
        setAddGoal(false)
        
        }} className='my-3 p-3 px-6 rounded-sm bg-emerald-300'> Submit</button>

        </form>
        
    </div>
  )
}

export default GoalCreateModal