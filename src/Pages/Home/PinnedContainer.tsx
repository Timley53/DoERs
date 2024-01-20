import React from 'react'
import ProjectArticle from '../../components/ProjectArticle'
import TaskArticle from '../../components/TaskArticle'
import Pagination from '../../components/Pagination';
import { differenceInDays, format } from 'date-fns';
import generateUniqueId from 'generate-unique-id';


interface Props{
  arr: number[];
  start: number;
  end: number,
  pages: number,
  currentPage: number,
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}

function PinnedContainer({arr, start, end, pages, currentPage, setCurrentPage} : Props) {

  // const today  = new Date()
  // const deadline = new Date("2024-01-30")

  
  // const remainingDays = differenceInDays(deadline, today)
  
  // console.log(remainingDays)
  
  // console.log(format(deadline, "dd-MM-yyyy"));
  
  
  // const id2 = generateUniqueId({
  //   length: 32,
  //   useLetters: false
  // });
  // console.log(id2)


  








  return (
    <div className="w-full min-h-[400px]">

    <div className=' w-full  flex flex-wrap mt-2 items-center  h-full '>
      {
        arr.slice(start, end).map((art: number) =>  (<ProjectArticle key={Math.ceil(Math.random() * 100) + 1 }/>) )
      }
     
      {/* <TaskArticle/> */}
   
      </div>

      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} pages={pages}/>
      
    </div>
  )
}

export default PinnedContainer