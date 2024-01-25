import { BsFillPinAngleFill } from 'react-icons/bs'
import { MdDelete } from 'react-icons/md'

interface props {
    type: string;
}

function TaskHead({type} : props) {
  return (
    <div className="head flex w-full justify-between items-center mb-1">
    <span className='text-[13px] text-purple-800'>{type === "project" && "Project" || type === "task" && "Task" }</span>

    <span className='text-xs px-2  bg-orange-400 rounded-full '>ongoing</span>
    {/* <span className='text-xs px-2  bg-green-400 rounded-full '>ongoing</span> */}

    <div className="flex mx-2">
      <button className={`mx-2 text-[1.14rem] text-slate-500 `}><BsFillPinAngleFill/></button>
      <button className={`mx-2 text-[1.14rem] hover:text-rose-600 transition-all`}><MdDelete/></button>
    </div>
  </div>  )
}

export default TaskHead