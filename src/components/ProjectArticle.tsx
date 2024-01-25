import React, { useContext, useState } from 'react'
import { BsFillPinAngleFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import MicroTasks from './MicroTasks';
import { GrExpand } from "react-icons/gr";
import { FaEdit } from "react-icons/fa";
import ProjectNote from './ProjectNote';
import ProjectTime from './ProjectTime';
import TaskHead from './TaskHead';
import TitleDeadline from './TitleDeadline';
import Expandbutton from './Expandbutton';
import { ProjectTypes, TaskType } from '../Interface';

function ProjectArticle({projectId,title, note,deadline, createdAt,status, microTasks, onhold, pinned }: ProjectTypes) {
  const [expand, setExpand] = useState<boolean>(false)

  const props = {
    projectId,title, note,deadline, createdAt,status, microTasks, onhold, pinned
  }

  console.log(createdAt)

  const percentage = microTasks ? microTasks.filter(mc => mc.completed === true).length / microTasks.length : 0;

  return (
    <div className={`md:w-[280px] sm:w-[95%] min-h-[200px]  max-h-[300]  border-2 m-1 rounded-2xl p-2 bg-slate-300 transition-all duration-700 flex flex-col`}  >
     <TaskHead type={"project"}/>


     <div className={`h-auto flex flex-col `}>


     <TitleDeadline deadline={deadline} title={title}/>

         <Expandbutton  projectId={projectId}/>
        </div>

        <div className=" my-1 text-xs">
          {percentage * 100}% Completed
        </div>

      <div className="w-[95%] border-dashed border-t-[1px] mx-auto mt-3  border-gray-500 pt-2">

        <ProjectTime deadline={deadline} createdAt={createdAt} />
{
  expand && 
  <ProjectNote/>
}

       


      </div>
        
    </div>
  )
}

export default ProjectArticle