import { useContext, useEffect, useState } from "react"
import Filter from "../../components/Filter"
import Search from "../Home/Search"
import { useSelector } from "react-redux"
import { Roostate } from "../../Store/GlobalStore"
import Pagination from "../../components/Pagination"
import { TaskType } from "../../Interface"
import TaskArticle from "../../components/TaskArticle"
import CreateNewLink from "../../components/CreateNewLink"
import DeleteModal from "../../components/DeleteModal"
import { GlobalContext } from "../../Utils"
import { isAfter } from "date-fns"
import { ImCross } from "react-icons/im"
import { TaskStyle } from "../../AllStyles"

function Task() {
  const [searchValue, setSearchValue] = useState<string>("")
  const allTasks = useSelector((state: Roostate)=> state.user.allTasks)
  const [filteredTasks, setFilteredTasks] = useState<TaskType[] | []>([])
  const [searchTasks, setSearchTasks] = useState<TaskType[] | []>([])
  const darkMode = useSelector((state: Roostate) => state.user.darkMode)

  const thisMonth = new Date().getMonth()
  const thisYear = new Date().getFullYear()
  
  
  const [filterDate, setFilterDate] = useState(`${thisYear}-${thisMonth + 1}-31`)
  
  const [currentPage, setCurrentPage] = useState<number>(1)
  const dataPerPage = 8;
  const allTaskspages = Math.ceil(allTasks ? allTasks.length/ dataPerPage : 0)
  const filteredTasksPage = Math.ceil(filteredTasks ? filteredTasks.length/ dataPerPage : 0)
  const searchTasksPages = Math.ceil(searchTasks ? searchTasks.length/ dataPerPage : 0)

  const start = (currentPage - 1) * dataPerPage
  const end = currentPage * dataPerPage

  const {showDelete} = useContext(GlobalContext)
  const [showFilter, setShowFiltered] = useState<boolean>(false)
  const [showSearch, setShowSearch] = useState<boolean>(false)
  const [showDefault, setShowDefault] = useState<boolean>(true)
  const [filtertByDeadline, setFilterByDeadline] = useState<boolean>(true)

  // const [searchInput, setSearchInputs] = useState<string>("")


  // console.log(isAfter(new Date("2024-05-31"), new Date("2024-01-27")))

  
const filterDateFirstDate = (fd: string)=>{
  return fd.split("-")[1]
}


// console.log("the man has food".includes("man"))

  const filterTasks = () => {

    if(filtertByDeadline){
      const fltering = allTasks.filter((task: TaskType) => isAfter(new Date(filterDate), new Date(task.deadline)) && isAfter(new Date(task.deadline), new Date(`2024-${filterDateFirstDate(filterDate)}-01`)))

      console.log(fltering)
  
        const sortedFilteredTasks= fltering.sort((taskA, taskB) => new Date(taskA.deadline).getTime() - new Date(taskB.deadline).getTime())
      setFilteredTasks(sortedFilteredTasks)
  
      // setShowFiltered(true)
      // setShowDefault(false)
      // setShowSearch(false)
  
    } 

    if(!filtertByDeadline){
      const fltering = allTasks.filter((task: TaskType) => isAfter(new Date(filterDate), new Date(task.createdAt)))

      console.log(fltering)
  
        const sortedFilteredTasks= fltering.sort((taskA, taskB) => new Date(taskA.deadline).getTime() - new Date(taskB.deadline).getTime())
      setFilteredTasks(sortedFilteredTasks)
  
      // setShowFiltered(true)
      // setShowDefault(false)
      // setShowSearch(false)
      
    }

    // const fltering = allTasks.filter((task: TaskType) => isAfter(new Date(filterDate), new Date(task.deadline)) && isAfter(new Date(task.deadline), new Date(`2024-${filterDateFirstDate(filterDate)}-01`)))


  }


  useEffect(() => {
  
    const filterSearch =  allTasks.filter((tasks: TaskType) => tasks.title.includes(searchValue) )

    setSearchTasks(filterSearch)
  
  
  }, [searchValue])

  function showSearchFxn() {
    setShowFiltered(false)
      setShowDefault(false)
      setShowSearch(true)
  }
  


  return (
    <div className="w-full p-2 sm:pb-14 md:pb-2">
      {
       showDelete && <DeleteModal/>

      }
      <header className="flex mt-1 w-full justify-between flex-wrap items-center">
        <span className="mx-3 text-blue-600">Task</span>


        <div className="flex items-center">
        <select name="" id="" className="bg-transparent border-2 border-blue-500 rounded-md text-sm p-[3px] 
        " onChange={(e)=> {
  setShowFiltered(true)
  setShowDefault(false)
  setShowSearch(false)

          if(e.target.value === "by deadline"){
            setFilterByDeadline(true)
          } else if(e.target.value === "by creation"){ 
            setFilterByDeadline(false)
          }
        }}>
          <option className="text-black" value="by deadline">Filter by deadline</option>
          <option className="text-black" value="by creation">Filter by creation</option>
        </select> 

       { <Filter filterDate={filterDate} setFilterDate={setFilterDate}    filterType={filtertByDeadline}    filterTasks={filterTasks}/>
                
        }
        </div>
<div className="flex w-full md:justify-between   md:w-[60%]  sm:w-full items-center md:my-0 sm:my-4">

        <Search searchValue={searchValue} setSearchValue={setSearchValue} showSearchFxn={showSearchFxn} />
        <CreateNewLink dynaLink={"../createTask"} />
</div>
      </header>


        {
          (showDefault && !showFilter && !showSearch) &&   <div  className={`${TaskStyle.general} ${darkMode ? TaskStyle.dark : TaskStyle.light}`}>

          <main className="w-full rounded-md items-start justify-start flex flex-wrap min-h-[450px]  ">
          {
    
            allTasks.length < 1 && <div className='w-full h-[350px]  flex items-center justify-center'>
            No record
            </div> || allTasks.length > 0 && 
                    allTasks?.slice(start, end).map((Task: TaskType) =>  (<TaskArticle key={Task.taskId} {...Task}/>) )
          }   
          </main>
          <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} pages={allTaskspages}/>
        </div>  
        }

        {
           (!showDefault && showFilter && !showSearch) &&   <div  className={`${TaskStyle.general} ${darkMode ? TaskStyle.dark : TaskStyle.light}`}>
            <button className="self-end flex m-2 p-2 bg-rose-200 text-rose-600 rounded-full text-sm items-center" onClick={()=> {
              
                  setSearchValue("")
                  setFilteredTasks([])
                  setSearchTasks([])
                  setShowSearch(false)
                  setShowFiltered(false)
                  setShowDefault(true)
                  setFilterByDeadline(true)
                  setFilterDate("")


}}> <ImCross className="mr-2 text-[13px] "/><span> Close</span> </button>

           <main className="w-full rounded-md items-start justify-start flex flex-wrap min-h-[450px]  ">
           {
     
     filteredTasks.length < 1 && <div className='w-full h-[350px]  flex items-center justify-center'>
             No filtered result
             </div> || filteredTasks.length > 0 && 
                     filteredTasks?.slice(start, end).map((Task: TaskType) =>  (<TaskArticle key={Task.taskId} {...Task}/>) )
           }   
           </main>
           <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} pages={filteredTasksPage}/>
         </div>  
          
        }


        
{
           (!showDefault && !showFilter && showSearch) &&   <div  className={`${TaskStyle.general} ${darkMode ? TaskStyle.dark : TaskStyle.light}`}>


<button className="self-end flex m-2 p-2 bg-rose-200 text-rose-600 rounded-full text-sm items-center" onClick={()=> {
  setSearchValue("")
  setFilteredTasks([])
  setSearchTasks([])
  setShowSearch(false)
  setShowFiltered(false)
  setShowDefault(true)


}}> <ImCross className="mr-2 text-[13px] "/><span> Close</span> </button>
           <main className="w-full rounded-md items-start justify-start flex flex-wrap min-h-[450px]  ">
           {
     
     searchTasks.length < 1 && <div className='w-full h-[350px]  flex items-center justify-center'>
             No result
             </div> || searchTasks.length > 0 && 
                     searchTasks?.slice(start, end).map((Task: TaskType) =>  (<TaskArticle key={Task.taskId} {...Task}/>) )
           }   
           </main>
           <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} pages={searchTasksPages}/>
         </div>  
          
        }

      
    </div>
  )
}

export default Task