import React from 'react'
import TaskHead from './TaskHead'
import TitleDeadline from './TitleDeadline'
import ProjectTime from './ProjectTime'
import { TaskType } from '../Interface'
import { differenceInDays } from 'date-fns'

function TaskArticle({taskId, title, notes ,deadline,completed,createdAt, priority }: TaskType) {

  const daysLeft = differenceInDays(new Date(),  new Date(deadline) ) 


  return (
    <div className='w-[280px] p-2 min-h-[240px] rounded-lg col-span-1 border-2 border-blue-300 m-1 bg-blue-200'>

        <TaskHead type={"task"}/>

        <div className="w-full  mt-4 px-2">
            <div className='text-base break-words'>{title}</div>
            <div className='p-1 inline-block px-2 bg-rose-500 rounded-full text-white text-xs my-3'> 
            {daysLeft} days left
            </div>


            <div className="w-[95%] border-dashed border-t-[1px] mx-auto mt-2  border-gray-500 pt-2">
            
                <ProjectTime deadline={deadline} createdAt={createdAt}/>
                </div>
            </div>

            <button className='w-full bg-green-400 p-2 rounded-md my-1 text-sm hover:bg-emerald-500 text-white transition-all'>
                Done
            </button>

        
    </div>
  )
}

export default TaskArticle