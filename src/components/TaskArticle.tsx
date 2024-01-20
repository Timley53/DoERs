import React from 'react'
import TaskHead from './TaskHead'
import TitleDeadline from './TitleDeadline'
import ProjectTime from './ProjectTime'

function TaskArticle() {
  return (
    <div className='w-[280px] p-2 min-h-[240px] rounded-lg col-span-1 border-2 border-blue-300 m-1 bg-blue-200'>

        <TaskHead type={"task"}/>

        <div className="w-full  mt-4 px-2">
            <h2 className='text-xl'>Build E-commerce web app</h2>
            <div className='p-1 inline-block px-2 bg-rose-500 rounded-full text-white text-sm my-3'>2 days left</div>


            <div className="w-[95%] border-dashed border-t-[1px] mx-auto mt-2  border-gray-500 pt-2">
            
                <ProjectTime/>
                </div>
            </div>

            <button className='w-full bg-green-400 p-2 rounded-md my-1 text-sm hover:bg-emerald-500 text-white transition-all'>
                Done
            </button>

        
    </div>
  )
}

export default TaskArticle