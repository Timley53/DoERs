import React, { useState } from 'react'
import { MdPushPin } from "react-icons/md";
import { MdTimer } from "react-icons/md";
import { IoAddOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import PinnedContainer from "./PinnedProject"
import DeadlineContainer from "./PinnedSingleTasks"
import { useSelector } from 'react-redux';
import { Roostate } from '../../Store/GlobalStore';
import PinnedProject from './PinnedProject';
import PinnedSingleTasks from './PinnedSingleTasks';



function PinnedTask() {

  const [showProjects, setShowProjects] = useState<boolean>(true)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const projects = useSelector((state: Roostate) => state.user.Projects)


  const dataPerPage = 8;
  const pages = Math.ceil(projects ? projects.length/ dataPerPage : 0)

  const start = (currentPage - 1) * dataPerPage
  const end = currentPage * dataPerPage

  return (
    <div className='mt-3 w-[98%] bg-slate-100 min-h-[60vh] p-1 rounded-xl transition-mall'>
        <div className="w-full flex justify-between">

          <div className=" flex items-center">

   <span className='p-1 text-sm flex items-center rounded-full px-2 bg-emerald-300 '><MdPushPin/> Pin</span>

   <button onClick={()=>setShowProjects(true)} className={`mx-3 p-1 px-3 bg-slate-300 hover:bg-slate-600 ${showProjects ? "bg-slate-600 text-white" : ""} rounded-full`}>Project</button>

   <button onClick={()=>setShowProjects(false)} className={`mx-2 p-1 px-3 bg-slate-300 hover:bg-slate-600 ${!showProjects ? "bg-slate-600 text-white" : ""} rounded-full`}>Tasks</button>
            
          </div>

          <Link to={"createtask"} className='flex items-center p-2 hover:text-blue-950 transition-all duration-500 sm:bg-slate-200 sm:rounded-full '>
        <IoAddOutline className="mr-1 md:text-xl sm:text-2xl"/>
         <span className='sm:hidden md:flex'>  
           Create task
          </span>
         <span className='sm:flex md:hidden'>  
           Add
          </span>
          </Link>
        </div>




    {
      showProjects && <PinnedProject setCurrentPage={setCurrentPage} pages={pages} currentPage={currentPage}  start={start} end={end}/> || !showProjects && <PinnedSingleTasks  setCurrentPage={setCurrentPage} pages={pages} currentPage={currentPage}  start={start} end={end}/>
    }

  
        
    </div>
  )
}

export default PinnedTask