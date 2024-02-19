import  { useContext } from 'react'
import TaskHead from '../../components/TaskHead'
import TitleDeadline from '../../components/TitleDeadline'
import ProjectTime from '../../components/ProjectTime'
import ProjectNote from '../../components/ProjectNote'
import MicroTasks from '../../components/MicroTasks'
import { ImCross } from 'react-icons/im'
import { GlobalContext } from '../../Utils'
import { microTasks } from '../../Interface'
import { useSelector } from 'react-redux'
import { Roostate } from '../../Store/GlobalStore'

function ProjectModal() {
    const { setHomeProjectModal, projectModalId, setDeleteDetails, setShowDelete} = useContext(GlobalContext)
    const modalDetails = useSelector((state:Roostate) =>state.user.Projects.find(pj => pj.projectId === projectModalId))

    console.log(modalDetails)

    const deleteTask = () => {
      setDeleteDetails({
        type: "project",
        id: projectModalId,
        title: `${modalDetails?.title}`
      })
      setShowDelete(true)
      setHomeProjectModal(false)
    }
  
   
     
  return (
    <div className='h-screen w-screen z-20 bg-black bg-opacity-90 flex fixed items-center justify-center top-0 left-0'>

<div className={` md:w-[50%] sm:w-[90%] text-black max-w-[450px] min-h-[90%] border-2 m-1 rounded-2xl p-2 bg-slate-300 transition-all duration-700 flex flex-col`}  >
        <div className="w-full flex items-center">

     <TaskHead deleteTask={deleteTask} type={"project"} id={projectModalId} pinned={modalDetails?.pinned || false}/>
        <button onClick={()=>setHomeProjectModal(false)} className=' p-1 text-rose-400 hover:text-rose-800 transition-all mx-1'><ImCross/></button>

        </div>


     <div className={`h-auto flex flex-col mt-1 `}>


      <TitleDeadline deadline={modalDetails ? modalDetails?.deadline : "No deadline"} title={modalDetails?.title}/>

       
            <div className="flex justify-between my-2 mt-4">Task ({modalDetails?.microTasks.length}) 

          <span className='text-xs'>Click on task to mark</span>
            </div>
        </div>


          <div className="min-h-[230px] items-start justify-start flex flex-col p-1 overflow-y-scroll   rounded-md  microTasks">
              {
                modalDetails?.microTasks.map((micro: microTasks) => {

               return  <MicroTasks key={micro.microId} {...micro} projectId ={modalDetails.projectId}/>})
              }
          </div>



      <div className="w-[95%] border-dashed border-t-[1px] mx-auto mt-3  border-gray-500 pt-2">

      <ProjectTime deadline={modalDetails ? modalDetails.deadline: "no deadline" } createdAt={modalDetails ? modalDetails.createdAt: "none"} />

      <span className="w-[80%] text-[13px] break-words">
       Notes: {modalDetails?.note}
      </span>

  <ProjectNote id={modalDetails?.projectId || ""} notes={modalDetails?.note || ""}/>


  
       


      </div>

      {
    (modalDetails?.microTasks.every((mT) => mT.completed === true)) && <button className='mx-auto p-2 my-5 bg-emerald-600 rounded-md text-sm text-white'>All task Completed</button>
  }

        
    </div>

        
    </div>
  )
}

export default ProjectModal