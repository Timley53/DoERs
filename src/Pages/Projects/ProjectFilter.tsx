import { ProjectDeadlineStyle } from "../../AllStyles";
import { useSelector } from "react-redux";
import { Roostate } from "../../Store/GlobalStore";

interface Props{
    filterDate: string;
    setFilterDate:  React.Dispatch<React.SetStateAction<string>>;
    filterTasks: ()=> void;
}

function ProjectFilter({ setFilterDate, filterTasks}: Props) {
    
    
    const darkMode = useSelector((state: Roostate) => state.user.darkMode)



     
 

 
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