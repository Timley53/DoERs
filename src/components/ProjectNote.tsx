import { useState } from 'react'

function ProjectNote() {
        const [notes, setNotes] = useState<string>("")
        

  return (
    <div className='flex w-[95%] flex-col'>
        <textarea name="projectNotes" className='bg-transparent border-2 rounded-md text-sm w-full' value={notes} onChange={(e)=> setNotes(e.target.value)} id="" cols={30} rows={3}></textarea>

        <button className='mt-2 text-sm w-full p-1 bg-emerald-300 rounded-lg hover:bg-emerald-500 transition-all'>Submit</button>
        
    </div>
  )
}

export default ProjectNote