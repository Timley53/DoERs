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

function ProjectArticle() {
  const [expand, setExpand] = useState<boolean>(false)
  return (
    <div className={`w-[280px] min-h-[200px]  ${expand ? "h-auto" : " max-h-[300]"} border-2 m-1 rounded-2xl p-2 bg-slate-300 transition-all duration-700 flex flex-col`}  >
     <TaskHead type={"project"}/>


     <div className={`h-auto flex flex-col `}>


      <TitleDeadline title={"Build E-commerce web app"}/>
         <Expandbutton/>
        </div>

        <div className=" my-1 text-sm">
          pecentage
        </div>

      <div className="w-[95%] border-dashed border-t-[1px] mx-auto mt-3  border-gray-500 pt-2">

        <ProjectTime/>
{
  expand && 
  <ProjectNote/>
}

       


      </div>
        
    </div>
  )
}

export default ProjectArticle