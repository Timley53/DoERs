import React from 'react'
import ProjectArticle from '../../components/ProjectArticle'
import Pagination from '../../components/Pagination';
import {useSelector} from 'react-redux';
import {Roostate} from '../../Store/GlobalStore';
import {ProjectTypes} from '../../Interface';


interface Props{
  start: number;
  end: number,
  pages: number,
  currentPage: number,
  setCurrentPage:
   React.Dispatch<React.SetStateAction<number>>;
}

function PinnedContainer({start, end, pages, currentPage, setCurrentPage} : Props) {
  const projects = useSelector((state: Roostate) => state.user.Projects)


  return (
    <div className="w-full min-h-[400px]">

    <div className=' w-full  flex flex-wrap mt-2 items-center  h-full '>
      {
        projects?.slice(start, end).map((Proj: ProjectTypes) =>  (<ProjectArticle key={Proj.projectId} {...Proj}/>) )
      }   
      </div>

      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} pages={pages}/>
      
    </div>
  )
}

export default PinnedContainer