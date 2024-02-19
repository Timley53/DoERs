import TaskHead from './TaskHead'
import ProjectTime from './ProjectTime'
import { TaskType } from '../Interface'
import { differenceInDays } from 'date-fns'
import { useContext,  } from 'react'
import { GlobalContext } from '../Utils'
import { Roostate } from '../Store/GlobalStore'
import { useSelector } from 'react-redux'
import { TaskArticleStyle } from '../AllStyles'

function TaskArticle({ title ,deadline,createdAt,  taskId,pinned }: TaskType) {

  const {setDeleteDetails, setShowDelete} = useContext(GlobalContext)
  const darkMode = useSelector((state: Roostate) => state.user.darkMode)



  const daysLeft = differenceInDays(new Date(),  new Date(deadline) ) 

  const deleteTask = () => {
    setDeleteDetails({
      type: "task",
      id: taskId,
      title: title
    })
    setShowDelete(true)
  }


  return (
    <div className={TaskArticleStyle.general + (darkMode ?  TaskArticleStyle.dark : TaskArticleStyle.light )}>

        <TaskHead type={"task"} deleteTask={deleteTask} id={taskId} pinned={pinned}/>

        <div className="w-full  mt-4 px-2">
            <div className='text-[14px] break-words'>{title}</div>
            <div className='p-1 inline-block px-2 bg-rose-500 rounded-full text-white text-xs my-3'> 
            {Math.abs(daysLeft)} days left
            </div>


            <div className="w-[95%] border-dashed border-t-[1px] mx-auto mt-2  border-gray-500 pt-2">
            
                <ProjectTime deadline={deadline} createdAt={createdAt}/>
                </div>
            </div>

            <button className='w-full bg-green-400 p-2 rounded-md my-1 text-sm hover:bg-emerald-500 text-white transition-all'>
                Done
            </button>

        
    </div>
  )
}

export default TaskArticle 