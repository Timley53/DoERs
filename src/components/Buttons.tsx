// /===Interface================>
import { FaCheckDouble } from "react-icons/fa";
import { GoGoal } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { setDarkMode } from "../Store/userSlice";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { Roostate } from "../Store/GlobalStore";
interface HomeGoalsBtnProps {
    showGoalsStatus: boolean
    ,
     setShowGoalsStatus:  React.Dispatch<React.SetStateAction<boolean>>;
}


interface GoalBtnProps{
    id: string
}

export const HomeGoalsBtn = ({setShowGoalsStatus } : HomeGoalsBtnProps) => {

    return(
        <button className="p-1 text-sm bg-slate-500 hover:bg-slate-200 text-white rounded-md transition-all" onClick={()=> setShowGoalsStatus(true)}>

            <span className="sm:hidden md:flex">
            Goals/Status
            </span>

            <span className="md:hidden sm:flex  text-2xl px-2">
            <GoGoal/>
            </span>
        </button>
    )
}

export const GoalBtn = ({ } : GoalBtnProps) => {


    return (
        <button className="p-2 px-3 m-2 rounded-md mb-0 mt-4 self-end bg-emerald-300">
                <FaCheckDouble/>
        </button>
    )

}

export interface DarkModeType {
    place: string
}

export const DarkModeBtn = ({place} : DarkModeType ) => {

    const darkMode = useSelector((state: Roostate) => state.user.darkMode)
    const dispatch = useDispatch() 
if(place === "nav") return (
        <article className='w-[60%] justify-center p-1 bg-slate-300 mt-28  flex rounded-xl items-center'>

        {
         <button className={`w-[100%] transition-all flex items-center justify-center text-2xl duration-2000 p-2  text-center ${darkMode ? "bg-black text-white": "bg-transparent"} rounded-xl `} onClick={()=>dispatch(setDarkMode())}>
            
                {
                    darkMode && <MdLightMode/> || !darkMode && <MdDarkMode/> 
                }

          
            
            </button>
        }
        


    </article>
    )

    if(place === "homeHeader") return (
        <article className='md:hidden justify-center bg-slate-300 flex rounded-xl items-center'>

        {
         <button className={`w-[100%] transition-all flex items-center justify-center text-2xl duration-2000 p-1 px-3 text-center ${darkMode ? "bg-black text-white": "bg-transparent"} rounded-xl `} onClick={()=>dispatch(setDarkMode())}>
            
                {
                    darkMode && <MdLightMode/> || !darkMode && <MdDarkMode/> 
                }

          
            
            </button>
        }
        


    </article>
    )
}