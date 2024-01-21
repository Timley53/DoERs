import React, { useState } from 'react'
import { MdPushPin } from "react-icons/md";
import { MdTimer } from "react-icons/md";
import { IoAddOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import PinnedContainer from "./PinnedContainer"
import DeadlineContainer from "./DeadlineContainer"
import { useSelector } from 'react-redux';
import { Roostate } from '../../Store/GlobalStore';



function PinnedTask() {

  const [showPin, setShowPin] = useState<boolean>(false)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const projects = useSelector((state: Roostate) => state.user.Projects)


  const dataPerPage = 8;
  const pages = Math.ceil(projects ? projects.length/ dataPerPage : 0)

  const start = (currentPage - 1) * dataPerPage
  const end = currentPage * dataPerPage

  return (
    <div className='mt-3 w-[98%] bg-slate-100 min-h-[60vh] p-1 rounded-xl transition-all'>
        <div className="w-full flex justify-between">

          <div className=" flex items-center">
          <button className={`transition-all p-1 px-3 flex items-center bg-slate-300 hover:bg-slate-500 m-2 text-sm rounded-full`}  onClick={()=>setShowPin(false)}><MdPushPin className="mr-1"/> Pin</button>

          <button className={`transition-all p-1 px-3 flex items-center m-1 text-sm rounded-full bg-rose-300 hover:bg-rose-500 mx-4`} onClick={()=>setShowPin(true)}><MdTimer className="mr-1"/> Closer Dealine</button>


          </div>

          <Link to={"createtask"} className='flex items-center p-2 hover:text-blue-950 transition-all duration-500'>
        <IoAddOutline className="mr-1 text-xl"/> Create task
          </Link>
        </div>



    {
      !showPin && <PinnedContainer setCurrentPage={setCurrentPage} pages={pages} currentPage={currentPage}  start={start} end={end}/> || showPin && <DeadlineContainer/>
    }

  
        
    </div>
  )
}

export default PinnedTask