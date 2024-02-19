import  {  useContext, useState } from 'react'

import ProjectNote from './ProjectNote';
import ProjectTime from './ProjectTime';
import TaskHead from './TaskHead';
import TitleDeadline from './TitleDeadline';
import Expandbutton from './Expandbutton';
import { ProjectTypes } from '../Interface';
import { GlobalContext } from '../Utils';
import { useSelector } from 'react-redux';
import { Roostate } from '../Store/GlobalStore';

const style = {
  general: "md:w-[280px] sm:w-[95%] min-h-[200px]  max-h-[300]  border-2 m-1 rounded-2xl p-2 bg-slate-300 transition-all duration-700 flex flex-col",
  dark: "bg-transparent border-2 border-dashed border-purple-400",
  light: "bg-slate-100"

}

function ProjectArticle({projectId,title,deadline, createdAt, microTasks, pinned }: ProjectTypes) {
  const [expand] = useState<boolean>(false)

  const {setDeleteDetails, setShowDelete} = useContext(GlobalContext)
  const darkMode = useSelector((state: Roostate) => state.user.darkMode)

  // const props = {
  //   projectId,title, note,deadline, createdAt,status, microTasks, onhold, pinned
  // }
  const deleteTask = () => {
    setDeleteDetails({
      type: "project",
      id: projectId,
      title: title
    })
    setShowDelete(true)
  }
 
  console.log(createdAt)

  const percentage = microTasks ? microTasks.filter(mc => mc.completed === true).length / microTasks.length : 0;

  return (
    <div className={`${style.general} ${ darkMode ? style.dark : style.light}`}  >
     <TaskHead type={"project"} deleteTask={deleteTask} id={projectId} pinned={pinned}/>


     <div className={`h-auto flex flex-col `}>


     <TitleDeadline deadline={deadline} title={title}/>

         <Expandbutton  projectId={projectId}/>
        </div>

        <div className=" my-1 text-xs">
          {percentage * 100}% Completed
        </div>

      <div className="w-[95%] border-dashed border-t-[1px] mx-auto mt-3  border-gray-500 pt-2">

        <ProjectTime deadline={deadline} createdAt={createdAt} />
{/* {
  expand && 
  <ProjectNote/>
} */}

       


      </div>
        
    </div>
  )
}

export default ProjectArticle