import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { edditNotes } from '../Store/userSlice'

interface Props {
  notes: string
  id: string
}



function ProjectNote({notes, id} : Props) {
        const [Locnotes, setNotes] = useState<string>(notes)
        
        const dispatch = useDispatch()

  return (
    <div className='flex w-[95%] flex-col my-2'>
        <textarea name="projectNotes" className='bg-transparent border-2 rounded-md text-sm w-full' value={Locnotes} onChange={(e)=> setNotes(e.target.value)} id="" cols={30} rows={3} maxLength={70}></textarea>

        <button onClick={()=> {
          dispatch(edditNotes({
            id: id,
            notes: Locnotes
          }))
        }} className='mt-2 text-sm w-full p-1 bg-emerald-300 rounded-lg hover:bg-emerald-500 transition-all'>Submit</button>
        
    </div>
  )
}

export default ProjectNote