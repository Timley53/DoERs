import React from 'react'
import ProjectArticle from '../../components/ProjectArticle'
import Pagination from '../../components/Pagination';
import {useSelector} from 'react-redux';
import {Roostate} from '../../Store/GlobalStore';
import {ProjectTypes} from '../../Interface';
import { homeStyle } from '../../AllStyles';


interface Props{
  start: number;
  end: number,
  pages: number,
  currentPage: number,
  setCurrentPage:
   React.Dispatch<React.SetStateAction<number>>;
}

function PinnedProject({start, end, pages, currentPage, setCurrentPage} : Props) {
  const projects = useSelector((state: Roostate) => state.user.Projects.filter((pj) => pj.pinned === true)) 
   const darkMode = useSelector((state: Roostate) => state.user.darkMode)

  const {pinnedContainer} = homeStyle



  return (
    <div className="w-full min-h-[400px]">

    <div className=' w-full  flex flex-wrap mt-2 items-center  h-full '>
      { 
  projects.length < 1 && <div className={pinnedContainer.general + (darkMode ? pinnedContainer.dark : pinnedContainer.light)}>
    No Pinned Projects
  </div> ||
      projects.length > 0 && projects?.slice(start, end).map((Proj: ProjectTypes) =>  (<ProjectArticle key={Proj.projectId} {...Proj}/>) ) 
      }   
      </div>

      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} pages={pages}/>
      
    </div>
  )
}

export default PinnedProject