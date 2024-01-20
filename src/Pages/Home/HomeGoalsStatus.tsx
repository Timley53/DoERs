import React from 'react'
import { ImCross } from 'react-icons/im'

interface props {
    showGoalsStatus: boolean
    ,
     setShowGoalsStatus:  React.Dispatch<React.SetStateAction<boolean>>;
}

export default function HomeGoalsStatus({setShowGoalsStatus, showGoalsStatus} : props) {
  return (
    <div className='h-screen w-screen z-50 bg-black bg-opacity-80 flex fixed justify-end top-0 left-0'>

        <div className="h-screen bg-slate-100  w-[50%] max-w-[450px] shadow-md shadow-white flex flex-col   transition-all">

            <button className='self-end m-4 p-2  transition-all hover:text-rose-500' onClick={()=> setShowGoalsStatus(false)}>
                <ImCross/>
            </button>



           

        </div>
        
    </div>
  )
}
