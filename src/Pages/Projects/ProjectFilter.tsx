import { useState } from "react"
import { ProjectDeadlineStyle } from "../../AllStyles";
import { useSelector } from "react-redux";
import { Roostate } from "../../Store/GlobalStore";

interface Props{
    filterDate: string;
    setFilterDate:  React.Dispatch<React.SetStateAction<string>>;
    filterTasks: ()=> void;
}

function ProjectFilter({filterDate, setFilterDate, filterTasks}: Props) {
    
    const thisMonth = new Date().getMonth()
    const thisYear = new Date().getFullYear()
    const darkMode = useSelector((state: Roostate) => state.user.darkMode)



        // const date = format("2024-4-25", "yyyy-MM-dd")

    // console.log(filterDate)

    const calculateMonth = (addMonth : number)=>{
        const sub = (thisMonth + 1) + addMonth 

       
        if(sub > 12){
            return 12
        }




        return sub
    } 

    // console.log(format(filterDate, "yyyy-MM-dd"))
 

 
      return(
        <>

       <input type="date" name="createDate" id="createDate" className={ProjectDeadlineStyle.general + (darkMode ? ProjectDeadlineStyle.dark : ProjectDeadlineStyle.light)} onChange={(e)=>{
           setFilterDate(e.target.value)
           filterTasks()
        }}
        
        />
        </>
     )
  
 

}

export default ProjectFilter