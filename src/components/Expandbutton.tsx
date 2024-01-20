import React, { useContext } from 'react'
import { GrExpand } from 'react-icons/gr';
import { GlobalContext } from '../Utils';



// interface Props{
//     expand: boolean;
//     setExpand:  React.Dispatch<React.SetStateAction<boolean>>
// }

export default function Expandbutton() {

    const { setHomeProjectModal} = useContext(GlobalContext)

  return (
    <button className='hover:text-slate-600 transition-all flex text-sm  items-center p-2 px-0' onClick={()=> setHomeProjectModal(true)}>
    Task (8) 
        <GrExpand className={"ml-2"}/>
      </button>  )
}
