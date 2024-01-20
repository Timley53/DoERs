import React from 'react'
import { microTasks } from '../Interface'

interface Props {
    notes: string,
    setNotes: React.Dispatch<React.SetStateAction<string>>;
  
    
}

function NewNotes({notes, setNotes}: Props) {
  return (
   <textarea name="" id="" value={notes} onChange={(e)=> setNotes(e.target.value)} className='w-[80%] max-w-[300px] h-[60%] rounded-sm p-1 my-2 text-sm' placeholder='Notes'>

   </textarea>
  )
}

export default NewNotes