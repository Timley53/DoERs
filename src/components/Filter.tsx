import { TaskFilter } from "../AllStyles";
import { useSelector } from "react-redux";
import { Roostate } from "../Store/GlobalStore";

interface Props{
    filterDate: string;
    setFilterDate:  React.Dispatch<React.SetStateAction<string>>;
    filterTasks: ()=> void;
    filterType: boolean
}

function Filter({ setFilterDate, filterTasks, filterType}: Props) {
    
    const thisMonth = new Date().getMonth()
    const thisYear = new Date().getFullYear()
    const darkMode = useSelector((state: Roostate) => state.user.darkMode)

    


        // const date = format("2024-4-25", "yyyy-MM-dd")

    // console.log(filterDate)

    const calculateMonth = (subMonth : number)=>{
        const sub = (thisMonth + 1) - subMonth 

       
        if(sub < 1){
            return 1
        }




        return sub
    } 

    // console.log(format(filterDate, "yyyy-MM-dd"))
 

  if(filterType)
  {
    return (
    
        <div className='flex mx-2 items-center'>
            <span>:</span>
    
            <select name="filter" id="filter" className={`${TaskFilter.general} ${darkMode ? TaskFilter.dark : TaskFilter.light}`} onChange={(e)=>{ 
                setFilterDate(e.target.value)
                filterTasks()
            }
                }>
    
    
                <option value={`${thisYear}-${thisMonth + 1}-31`} className="my-2">this month</option>
    
                <option className="text-black" value={`${thisYear}-${calculateMonth(1)}-31`}>Last month</option>
                <option className="text-black"  value={`${thisYear}-${calculateMonth(2)}-31`}>2 Months ago</option>
                <option className="text-black"  value={`${thisYear}-${calculateMonth(3)}-31`}>3 Month</option>
                <option className="text-black"  value={`${thisYear}-${calculateMonth(4)}-31`}>4 Month</option>
                <option  className="text-black" value={`${thisYear}-${calculateMonth(5)}-31`}>5 Month</option>
            </select>
        </div>
      )
  }else if(!filterType){

      return(
<>

       <input type="date" name="createDate" id="createDate" className="ml-3 bg-white border-2 border-blue-500 p-[2px] rounded-md text-sm  max-w-[120px]" onChange={(e)=>{
           setFilterDate(e.target.value)
           filterTasks()
        }}
        
        />
        </>
     )
  }
 

}

export default Filter