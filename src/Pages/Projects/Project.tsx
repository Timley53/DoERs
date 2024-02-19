import { useContext, useEffect, useState } from "react"
import CreateNewLink from "../../components/CreateNewLink"
import Search from "../Home/Search"
import { useSelector } from "react-redux"
import { Roostate } from "../../Store/GlobalStore"
import { ProjectTypes } from "../../Interface"
import { isAfter } from "date-fns"
import { GlobalContext } from "../../Utils"
import DeleteModal from "../../components/DeleteModal"
import ProjectArticle from "../../components/ProjectArticle"
import Pagination from "../../components/Pagination"
import { ImCross } from "react-icons/im"
import ProjectFilter from "./ProjectFilter"
import ProjectModal from "../Home/ProjectModal"
import { TaskStyle } from "../../AllStyles"

function Project() {

  const [ ,setFilterByDeadline] = useState<boolean>(true)
  const [searchValue, setSearchValue] = useState<string>("")
  const {showDelete} = useContext(GlobalContext)
  const [showFilter, setShowFiltered] = useState<boolean>(false)
  const [showSearch, setShowSearch] = useState<boolean>(false)
  const [showDefault, setShowDefault] = useState<boolean>(true)
  const [seaarchProjects, setSearchProjects] = useState<ProjectTypes[] | []>([])
  const {HomeProjectModal} = useContext(GlobalContext)

  const allProjects = useSelector((state: Roostate) => state.user.Projects)
  const darkMode = useSelector((state: Roostate) => state.user.darkMode)

  const thisMonth = new Date().getMonth()
  const thisYear = new Date().getFullYear()


const [filterDate, setFilterDate] = useState(`${thisYear}-${thisMonth + 1}-01`)
const [filteredProjects, setFilteredProjects] = useState<ProjectTypes[] | []>([])

  console.log(filterDate)

// =============Pagination

const [currentPage, setCurrentPage] = useState<number>(1)
const dataPerPage = 8;
const allProjectspages = Math.ceil(allProjects ? allProjects.length/ dataPerPage : 0)
const filteredProjectsPage = Math.ceil(filteredProjects ? filteredProjects.length/ dataPerPage : 0)
const searchProjectPages = Math.ceil(seaarchProjects ? seaarchProjects.length/ dataPerPage : 0)

const start = (currentPage - 1) * dataPerPage
const end = currentPage * dataPerPage


// ===============================


const filterDateFirstDate = (fd: string)=>{
  return fd.split("-")[1]
}


const filterTasks = () => {
  const fltering = allProjects.filter((pj : ProjectTypes) => isAfter(new Date(pj.deadline) , new Date(filterDate)) && isAfter( new Date(`${thisYear}-${filterDateFirstDate(filterDate)}-31`), new Date(pj.deadline)))

  console.log(fltering)

    const sortedFilteredTasks= fltering.sort((PjA, PjB) => new Date(PjA.deadline).getTime() - new Date(PjB.deadline).getTime())

    setFilteredProjects(sortedFilteredTasks)

  setShowFiltered(true)
  setShowDefault(false)
  setShowSearch(false)


} 

function showSearchFxn() {
  setShowFiltered(false)
    setShowDefault(false)
    setShowSearch(true)
}



useEffect(() => {
  
  const filterSearch =  allProjects.filter((Pj: ProjectTypes) => Pj.title.includes(searchValue) )

  setSearchProjects(filterSearch)




}, [searchValue])



  return (
    <div className="w-full p-2 pb-24 ">
      {
        showDelete && <DeleteModal/>
      }

      {
        HomeProjectModal && <ProjectModal/>
      }

        <header className="flex mt-1 w-full justify-between flex-wrap items-center">
        <span className="mx-3 text-blue-600">Projects</span>


        <div className="flex items-center">

          <span>Deadline</span>
      

       { <ProjectFilter filterDate={filterDate} setFilterDate={setFilterDate}   filterTasks={filterTasks}/>
                
        }
        </div>
<div className="flex w-full md:justify-between   md:w-[55%] sm:w-full items-center md:my-0 sm:my-4">

        <Search searchValue={searchValue} setSearchValue={setSearchValue} showSearchFxn={showSearchFxn} />
        <CreateNewLink dynaLink={"../createTask"} />
</div>
      </header>

      {
          (showDefault && !showFilter && !showSearch) &&   <div    className={`${TaskStyle.general} ${darkMode ? TaskStyle.dark : TaskStyle.light}`}>

          <main className="w-full rounded-md items-start justify-start flex flex-wrap min-h-[450px]  ">
          {
    
            allProjects.length < 1 && <div className='w-full h-[350px]  flex items-center justify-center'>
            No Project
            </div> || allProjects.length > 0 && 
                    allProjects?.slice(start, end).map((pj: ProjectTypes) =>  (<ProjectArticle key={pj.projectId} {...pj}/>) )
          }   
          </main>
          <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} pages={allProjectspages}/>
        </div>  
        }



        
      {
         (!showDefault && showFilter && !showSearch)  && <div  className={`${TaskStyle.general} ${darkMode ? TaskStyle.dark : TaskStyle.light}`}>

         <button className="self-end flex m-2 p-2 bg-rose-200 text-rose-600 rounded-full text-sm items-center" onClick={()=> {
           
               setSearchValue("")
               setFilteredProjects([])
               
              //  filteredProjects, setFilteredProjects

               setSearchProjects([])
               setShowSearch(false)
               setShowFiltered(false)
               setShowDefault(true)
               setFilterByDeadline(true)
               setFilterDate("")


}}> <ImCross className="mr-2 text-[13px] "/><span> Close</span> </button>

        <main className="w-full rounded-md items-start justify-start flex flex-wrap min-h-[450px]  ">
        {
  
  filteredProjects.length < 1 && <div className='w-full h-[350px]  flex items-center justify-center'>
          No filtered result
          </div> || filteredProjects.length > 0 && 
                  filteredProjects?.slice(start, end).map((Pj: ProjectTypes) =>  (<ProjectArticle key={Pj.projectId} {...Pj}/>) )
        }   
        </main>
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} pages={filteredProjectsPage}/>
      </div>   
        }



{
           (!showDefault && !showFilter && showSearch) &&   <div  className={`${TaskStyle.general} ${darkMode ? TaskStyle.dark : TaskStyle.light}`}>


<button className="self-end flex m-2 p-2 bg-rose-200 text-rose-600 rounded-full text-sm items-center" onClick={()=> {
  setSearchValue("")
  setFilteredProjects([])
  setSearchProjects([])
  setShowSearch(false)
  setShowFiltered(false)
  setShowDefault(true)


}}> <ImCross className="mr-2 text-[13px] "/><span> Close</span> </button>
           <main className="w-full rounded-md items-start justify-start flex flex-wrap min-h-[450px]  ">
           {
     
     seaarchProjects.length < 1 && <div className='w-full h-[350px]  flex items-center justify-center'>
             No result
             </div> || seaarchProjects.length > 0 && 
                     seaarchProjects?.slice(start, end).map((Pj: ProjectTypes) =>  (<ProjectArticle key={Pj.projectId} {...Pj}/>) )
           }   
           </main>
           <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} pages={searchProjectPages}/>
         </div>  
          
        }



      
    </div>
  )
}

export default Project