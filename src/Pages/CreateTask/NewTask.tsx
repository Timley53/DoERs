import React, { useState } from 'react'
import NewTaskTitleInput from '../../components/NewTaskTitleInput'

function NewTask() {
  const [title, setTitle] = useState<string >("")
  const [priority, setPriority] = useState<string>("")
  const [notes, setNotes] = useState<string>("")
  const [showNotes, setShowNotes] = useState<boolean>(false)
  const [deadline, setDeadline] = useState<string >("")

  return (
    <form className='w-[95%] max-w-[420px] bg-cyan-300 h-[100%] bg-opacity-25 rounded-md flex flex-col items-center p-1 py-2 pb-4 text-sm'>
        <h2 className='text-lg'>New Task</h2>
        <NewTaskTitleInput title={title} setTitle={setTitle}/>
      <article className='text-left w-[90%] max-w-[300px] my-2 '>
   <label htmlFor="" className=''>Notes</label>
  
          <textarea name="" className='max-w-[300px] w-[100%] h-[100px] my-2 rounded-md p-2'></textarea>
</article>

        <article className='text-left flex flex-col w-[90%] max-w-[300px]'>
            <label htmlFor="">Deadline</label>
            <input type="date" name="" id=""  className='my-1 w-[100%] p-2 rounded-sm' />
        </article>

        <article className='w-[80%] p-1 flex my-2'>
            <button className='p-2 m-1 bg-slate-400 w-1/3 rounded-sm hover '>Normal</button>
            <button className='p-2 m-1 bg-yellow-200 w-1/3 rounded-sm'>Midly urgent</button>
            <button className='p-2 m-1 bg-rose-400 w-1/3 rounded-sm'>Urgent</button>
        </article>

    <button className='my-6 p-2 w-[80%] bg-emerald-600 hover:bg-emerald-400 transition-all rounded-sm'>Submit</button>

        
    </form>
  )
}

export default NewTask