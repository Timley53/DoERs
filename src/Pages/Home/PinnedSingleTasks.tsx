import React from 'react'
import { useSelector } from 'react-redux';
import { Roostate } from '../../Store/GlobalStore';
import { TaskType } from '../../Interface';
import TaskArticle from '../../components/TaskArticle';
import Pagination from '../../components/Pagination';

interface Props{
  start: number;
  end: number,
  pages: number,
  currentPage: number,
  setCurrentPage:
   React.Dispatch<React.SetStateAction<number>>;
}

function PinnedSingleTasks({start, end, pages, currentPage, setCurrentPage} : Props) {
  const allTasks = useSelector((state: Roostate) => state.user.allTasks)
  return (
    <div className="w-full min-h-[400px]">

    <div className=' w-full  flex flex-wrap mt-2 items-center  h-full '>
      {

allTasks.length < 1 && <div className='w-full h-[350px]  flex items-center justify-center'>
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