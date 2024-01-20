import React, { useContext } from 'react'
import TaskHead from '../../components/TaskHead'
import TitleDeadline from '../../components/TitleDeadline'
import Expandbutton from '../../components/Expandbutton'
import ProjectTime from '../../components/ProjectTime'
import ProjectNote from '../../components/ProjectNote'
import MicroTasks from '../../components/MicroTasks'
import { ImCross } from 'react-icons/im'
import { GlobalContext } from '../../Utils'

function ProjectModal() {
    const { setHomeProjectModal} = useContext(GlobalContext)
  return (
    <div className='h-screen w-screen z-50 bg-black bg-opacity-90 flex fixed items-center justify-center top-0 left-0'>

<div className={` w-[50%] max-w-[450px] h-[88%] border-2 m-1 rounded-2xl p-2 bg-slate-300 transition-all duration-700 flex flex-col`}  >
        <div className="w-full flex items-center">


     <TaskHead type={"project"}/>
        <button onClick={()=>setHomeProjectModal(false)} className=' p-1 text-rose-400 hover:text-rose-800 transition-all mx-1'><ImCross/></button>

        </div>


     <div className={`h-auto flex flex-col mt-1 `}>


      <TitleDeadline title={"Build E-commerce web app"}/>
        <div className=" my-1 text-sm">
          pecentage
        </div>
            <div className="flex my-2">Task (8)</div>
        </div>


<div className="min-h-[240px] items-start justify-start flex flex-col p-2 overflow-y-scroll  outline-4  outline-gray-400 rounded-md outline microTasks">
    <MicroTasks/>
    <MicroTasks/>
    <MicroTasks/>
    <MicroTasks/>
    <MicroTasks/>
    <MicroTasks/>
    <MicroTasks/>
    <MicroTasks/>
</div>






      <div className="w-[95%] border-dashed border-t-[1px] mx-auto mt-3  border-gray-500 pt-2">

        <ProjectTime/>

  <ProjectNote/>

       


      </div>
        
    </div>

        
    </div>
  )
}

export default ProjectModal