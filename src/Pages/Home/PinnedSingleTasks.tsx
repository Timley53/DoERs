import React from 'react'
import { useSelector } from 'react-redux';
import { Roostate } from '../../Store/GlobalStore';
import { TaskType } from '../../Interface';
import TaskArticle from '../../components/TaskArticle';
import Pagination from '../../components/Pagination';
import { homeStyle } from '../../AllStyles';

interface Props{
  start: number;
  end: number,
  pages: number,
  currentPage: number,
  setCurrentPage:
   React.Dispatch<React.SetStateAction<number>>;
}

function PinnedSingleTasks({start, end, pages, currentPage, setCurrentPage} : Props) {
  const allTasks = useSelector((state: Roostate) => state.user.allTasks.filter((task: TaskType) => task.pinned === true))
  const darkMode = useSelector((state: Roostate) => state.user.darkMode)



  const {pinnedContainer} = homeStyle

  return (
    <div className="w-full min-h-[400px]">

    <div className=' w-full  flex flex-wrap mt-2 items-center  h-full '>
      {

allTasks.length < 1 && <div  className={pinnedContainer.general + (darkMode ? pinnedContainer.dark : pinnedContainer.light)}>
No Pinned Task
</div> ||
  allTasks.length > 0 && 
        allTasks?.slice(start, end).map((Task: TaskType) =>  (<TaskArticle key={Task.taskId} {...Task}/>) )
      }   
      </div>

      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} pages={pages}/>
      
    </div>  )
}

export default PinnedSingleTasks