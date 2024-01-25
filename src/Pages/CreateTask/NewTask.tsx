import React, { useContext, useState } from 'react'
import NewTaskTitleInput from '../../components/NewTaskTitleInput'
import Deadline from './Deadline'
import { GlobalContext } from '../../Utils'
import { TaskType } from '../../Interface'
import generateUniqueId from 'generate-unique-id'
import { useDispatch } from 'react-redux'
import { createNewTask } from '../../Store/userSlice'

function NewTask() {
  const [title, setTitle] = useState<string >("")
  const [priority, setPriority] = useState<string | null>("")
  const [notes, setNotes] = useState<string>("")
  // const [showNotes, setShowNotes] = useState<boolean>(false)
  const [deadline, setDeadline] = useState<string >("")
  const {setShowModal, setModalDetails} = useContext(GlobalContext)
  const dispatch = useDispatch()


  let current;

  if(priority === "Normal"){
    current = "600"
  } else if(priority === "Midly urgent"){
    current = "600"
  } else if(priority === "Urgent"){
    
    current = "600"
  } else{
    
    current = "300"
  }

  const creatingNewTask = (e: React.FormEvent ) => {

      e.preventDefault()

    const newTaskOnboarding: TaskType = {
        taskId:  `task/${generateUniqueId({
          length: 5,
          useLetters: true,
          useNumbers: true,
      })}`,  
      notes: notes,
      title: title,
      priority: priority || "normal",
      deadline: deadline,
      createdAt: new Date().toDateString(),
      completed: false,
      type: "task"
    }



    dispatch(createNewTask({
      ...newTaskOnboarding
    }))
    setModalDetails({
      message: "Task Created"
   })
   setShowModal(true)
  }
  
  // console.log(priority);
  
  return (
    <form onSubmit={creatingNewTask} className='w-[95%] max-w-[420px] bg-cyan-300 h-[100%] bg-opacity-25 rounded-md flex flex-col items-center p-1 py-2 pb-4 text-sm'>
        <h2 className='text-lg'>New Task</h2>
        <NewTaskTitleInput title={title} setTitle={setTitle}/>



       <article className='text-left w-[90%] max-w-[300px] my-2 '>
      <label htmlFor="" className=''>Notes</label>
              <textarea name="" className='max-w-[300px] w-[100%] h-[100px] my-2 rounded-md p-2' value={notes} onChange={(e)=> setNotes(e.target.value)}></textarea>
    </article>



      <Deadline deadline={deadline} setDeadline={setDeadline}/>

        <article className='w-[80%] p-1 flex justify-between my-2' >
           <label htmlFor="Normal">
            <input type="radio" value={"Normal"}  onChange={(e)=> setPriority(e.target.value)} name="priority" id="Normal" /> <span>Normal</span>
           </label>

           <label htmlFor="Midly urgent">
            <input type="radio" value={"Midly urgent"}  onChange={(e)=> setPriority(e.target.value)}className='text-yellow-400' name="priority" id="Midly urgent" size={10}/> <span>Midly urgent</span>
           </label>

           <label htmlFor="Urgent">
            <input type="radio" value={"Urgent"} onChange={(e)=> setPriority(e.target.value)} name="priority" id="Urgent" /> <span>Urgent</span>
           </label>
        </article>

    <button className='my-6 p-2 w-[80%] bg-emerald-600 hover:bg-emerald-400 transition-all rounded-sm'>Submit</button>

        
    </form>
  )
}

export default NewTask