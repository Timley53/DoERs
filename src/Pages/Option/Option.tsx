import { useEffect, useState } from "react"
import Goals from "./Goals"
import { GrAdd } from "react-icons/gr"
import GoalCreateModal from "./GoalCreateModal"
import { useSelector } from "react-redux"
import { Roostate } from "../../Store/GlobalStore"
import QuotesComp from "./QuotesComp"

export interface QuotesType{
  text: string
}

const style = {
  general: "w-full  flex flex-col h-screen",
  dark: "bg-black text-white",
  light: ""
}

function Option() {
const [addGoal, setAddGoal] = useState(false)

const allGoals = useSelector((state: Roostate) => state.user.goals)
const darkMode = useSelector((state: Roostate) => state.user.darkMode)

  console.log(allGoals);
  

 


  return (
    <div className={`${style.general} ${darkMode ? style.dark : style.light} `}>

    {
      addGoal && <GoalCreateModal setAddGoal={setAddGoal}/>
    }

        <button
        className="w-[130px] text-sm rounded-lg hover:bg-emerald-500 bg-emerald-200 p-2 self-center flex items-center m-2"
         onClick={()=>setAddGoal(true)} 
         ><GrAdd className="mx-2"/> Add Goals
         </button>


   <QuotesComp />

      <Goals/>

    </div>
  )
}

export default Option