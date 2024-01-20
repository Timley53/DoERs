import React, { useContext, useState } from 'react'
import NewTask from './NewTask'
import NewProject from './NewProject'
import CreateModal from './CreateModal'
import { GlobalContext } from '../../Utils'

function CreateTask() {
  const [newTask, setSetTask] = useState(true)
  const {showModal} = useContext(GlobalContext)

  return (
    <div className='w-[100%] pb-9 h-full flex flex-col items-center'>
      <header className='w-full flex p-2 '>
        <h2 className='w-full text-center'>Create new task</h2>
      </header>

      {
      showModal && <CreateModal/>
  }


      <div className="tab w-[80%] flex justify-around my-2 p-2">
        <button className=' bg-opacity-85 p-2 rounded-md hover:bg-slate-300 transition-all w-[50%]' onClick={()=> setSetTask(true)}>New Task</button>
        <button className=' bg-opacity-85 p-2 rounded-md hover:bg-slate-300 transition-all w-[50%]' onClick={()=>setSetTask(false)}>New Project</button>
      </div>

      <div className="wrapper w-full flex items-center flex-col">
        {
          newTask &&  <NewTask/> || !newTask && <NewProject/>
        }
       
      </div>
      
    </div>
  )
}

export default CreateTask