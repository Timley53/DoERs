import React from 'react'

function ProjectTime() {
  return (
    <div className='w-[95%] my-1 text-xs'>
        <article className='w-full flex justify-between  my-1'>
            <span className='p-1 px-2 bg-rose-500 rounded-full text-white'>Deadline</span>
            <span>02/1/2025</span>
        </article>
        
        <article className='w-full flex  justify-between my-1'>
            <span  className='p-1 px-2 rounded-full'>Created</span>
            <span>02/1/2025</span>
        </article>
        
    </div>
  )
}

export default ProjectTime