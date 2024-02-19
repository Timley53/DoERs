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
  const [deadline, setDeadline] = useState<string >("")
  const {setShowModal, setModalDetails} = useContext(GlobalContext)
  const dispatch = useDispatch()




  const creatingNewTask = (e: React.FormEvent ) => {

      e.preventDefault()

    const newTaskOnboarding: TaskType = {
        taskId:  `task/${generateUniqueId({
          length: 5,
          useLetters: true,
          useNumbers: true,
      })}`,  
      title: title,
      deadline: deadline,
      createdAt: new Date().toDateString(),
      completed: false,
      type: "task",
      pinned: false
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



   


      <Deadline deadline={deadline} setDeadline={setDeadline}/>

       

    <button className='my-6 p-2 w-[80%] bg-emerald-600 hover:bg-emerald-400 transition-all rounded-sm'>Submit</button>

        
    </form>
  )
}

export default NewTask