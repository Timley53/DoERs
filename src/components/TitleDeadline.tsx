import React from 'react'
import { dateTypes } from '../Interface'
import {differenceInDays} from "date-fns"

interface Prop{
    title: string | undefined,
    deadline: string
}

function TitleDeadline({title , deadline} : Prop) {

  console.log(deadline)
  const daysLeft = differenceInDays(new Date(),  new Date(deadline) ) 


  
  return (
    <div className="flex w-full items-center justify-between mt-2">
    <span className='w-[50%] text-[.96rem] text-wrap break-words'>{title ? title[0].toUpperCase() + title.slice(1) : "No title"}</span>

    <span className='bg-red-500 text-[11px] p-1 px-2 rounded-full text-white'>
      {daysLeft} days left
    </span>

  </div>  )
}

export default TitleDeadline