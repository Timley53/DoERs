import React, { useContext } from 'react'
import { GrExpand } from 'react-icons/gr';
import { GlobalContext } from '../Utils';
import { ProjectTypes } from '../Interface';

interface Props{ 
  projectId: string
}

export default function Expandbutton({ projectId} : Props) {

    const { setHomeProjectModal, setProjectModalId} = useContext(GlobalContext)

  return (
    <button className='hover:text-slate-600 transition-all flex text-sm  items-center p-2 px-0' onClick={()=>{
     
      setProjectModalId(projectId)

      setHomeProjectModal(true)}}>
    Task (8) 
        <GrExpand className={"ml-2"}/>
      </button>  )
}
