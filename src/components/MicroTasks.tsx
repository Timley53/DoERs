import React, { useState } from 'react'
import { MdOutlinePendingActions } from "react-icons/md";
import { MdDone } from "react-icons/md";


function MicroTasks() {
    const [checked, setChecked] = useState<boolean>(false)
    
  return (
    <div className='w-full max-w-[80%] h-auto flex my-2 items-center cursor-pointer' onClick={()=> setChecked(!checked)}>

        {/* <input type="checkbox" className='mr-2 ' name="tasksName" id="aslas" checked={checked} onChange={()=> setChecked(!checked)} /> */}


          {
       !checked && <span className=' mx-2 p-2 bg-gray-600 rounded-full text-white'>
          <MdOutlinePendingActions/>
        </span> || checked && <span className=' mx-2 p-2 bg-green-500 rounded-full text-white'>
          <MdDone/>
        </span>

          }

        <div className={`text-[13px] h-auto break-all text-wrap ${checked ? "line-through" : ""}`}>Build nav components</div>
    </div>
  )
}

export default MicroTasks