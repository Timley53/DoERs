import { BsFillPinAngleFill } from 'react-icons/bs'
import { MdDelete } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux';
import { pinProject, pinTask } from '../Store/userSlice';
import { Roostate } from '../Store/GlobalStore';

interface props {
    type: string;
    deleteTask: () => void
    id: string,
    pinned: boolean
}

const style = {
  general: "head flex w-full justify-between items-center mb-1",
  dark: "text-purple-600",
  light: "text-black"

}

function TaskHead({type, deleteTask, id, pinned} : props) {

  const dispatch = useDispatch()
  const darkMode = useSelector((state: Roostate) => state.user.darkMode)


  function PinTask(){


    if(type === "project"){
      dispatch(pinProject(id))

    }else if(type === "task"){
      dispatch(pinTask(id))
    }
  }



  return (
    <div className={`${style.general} ${darkMode ? style.dark : style.light}`}>
    <span className='text-[13px] text-purple-600'>{type === "project" && "Project" || type === "task" && "Task" }</span>

    <span className='text-xs px-2  bg-orange-400 rounded-full '>ongoing</span>
    {/* <span className='text-xs px-2  bg-green-400 rounded-full '>ongoing</span> */}

    <div className="flex mx-2">


      <button className={`mx-2 text-[1.14rem]  ${pinned ? "opacity-95" : "opacity-50 "}`} onClick={()=> PinTask()}><BsFillPinAngleFill/></button>



      <button className={`mx-2 text-[1.14rem] hover:text-rose-600 transition-all`} onClick={()=> deleteTask()}><MdDelete/></button>
    </div>
  </div>  )
}

export default TaskHead