import React, { useState } from 'react'
import { MdOutlinePendingActions } from "react-icons/md";
import { MdDone } from "react-icons/md";
import { microTasks } from '../Interface';
import { BsStar } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { completedMicro } from '../Store/userSlice';
import { GoStar } from 'react-icons/go';
import { FaStar } from 'react-icons/fa';

interface Props{
  projectId: string
}

function MicroTasks({title, star, completed, microId, projectId}: microTasks & Props) {
  const dispatch = useDispatch()
    
    console.log(title);
    
  return (
    <div className='w-full max-w-[80%] h-auto flex my-2 items-center cursor-pointer' onClick={()=> {
      dispatch(completedMicro({
        projectId,
        microId
      }))
    }}>

        {/* <input type="checkbox" className='mr-2 ' name="tasksName" id="aslas" checked={checked} onChange={()=> setChecked(!checked)} /> */}


          {
       !completed && <span className=' mx-2 p-2 bg-gray-600 rounded-full text-white'>
          <MdOutlinePendingActions/>
        </span> || completed && <span className=' mx-2 p-2 bg-green-500 rounded-full text-white'>
          <MdDone/>
        </span>

          }

        <div className={`text-[13px] flex h-auto break-all text-wrap ${completed ? "line-through" : ""}`}>{title && title[0].toUpperCase() + title.slice(1)} {star ? <FaStar className="ml-2 text-yellow-500" 
        />: ""}</div>
    </div>
  )
}

export default MicroTasks