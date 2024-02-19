import  { useState } from 'react'
import { MdPushPin } from "react-icons/md";
import { useSelector } from 'react-redux';
import { Roostate } from '../../Store/GlobalStore';
import PinnedProject from './PinnedProject';
import PinnedSingleTasks from './PinnedSingleTasks';
import { ProjectTypes, TaskType } from '../../Interface';


const style = {
  general: 'mt-3 w-[98%] mx-auto my-3 min-h-[60vh] p-1 rounded-xl transition-all',
  dark: "bg-gray-800 text-white",
  light: "bg-slate-100 "
}

function PinnedTask() {

  const [showProjects, setShowProjects] = useState<boolean>(true)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const projects = useSelector((state: Roostate) => state.user.Projects)
  const allTasks = useSelector((state: Roostate) => state.user.allTasks)
  const darkMode = useSelector((state: Roostate) => state.user.darkMode)


  const dataPerPage = 8;
  const Projectpages = Math.ceil(projects ? projects.filter((pj: ProjectTypes)  => pj.pinned === true).length / dataPerPage : 0)
  const allTaskspages = Math.ceil(allTasks ? allTasks.filter((task: TaskType) => task.pinned === true).length / dataPerPage : 0)

  const start = (currentPage - 1) * dataPerPage
  const end = currentPage * dataPerPage

  return (
    <div className={`${style.general} ${darkMode ? style.dark : style.light} `}>
        <div className="w-full flex justify-between">

          <div className=" flex items-center">

   <span className='p-1 text-sm flex items-center rounded-full px-2 bg-emerald-300 '><MdPushPin/> Pin</span>

   <button onClick={()=>setShowProjects(true)} className={`mx-3 p-1 px-3 bg-slate-300 hover:bg-slate-600 ${showProjects ? "bg-slate-600 text-white" : ""} rounded-full`}>Project</button>

   <button onClick={()=>setShowProjects(false)} className={`mx-2 p-1 px-3 bg-slate-300 hover:bg-slate-600 ${!showProjects ? "bg-slate-600 text-white" : ""} rounded-full`}>Tasks</button>
            
          </div>

         
        </div>




    {
      showProjects && <PinnedProject setCurrentPage={setCurrentPage} pages={Projectpages} currentPage={currentPage}  start={start} end={end}/> || !showProjects && <PinnedSingleTasks  setCurrentPage={setCurrentPage} pages={allTaskspages} currentPage={currentPage}  start={start} end={end}/>
    }

  
        
    </div>
  )
}

export default PinnedTask