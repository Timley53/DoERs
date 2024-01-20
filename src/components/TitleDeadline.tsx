import React from 'react'

interface Prop{
    title: string,
    deadlineDate?: any
}

function TitleDeadline({title} : Prop) {
  return (
    <div className="flex w-full items-center justify-between mt-2">
    <span className='w-[50%] text-[.96rem]'>{title}  </span>

    <span className='bg-red-500 text-[11px] p-1 px-2 rounded-full text-white'>
      2 weeks left
    </span>

  </div>  )
}

export default TitleDeadline