import { MdDelete } from 'react-icons/md'
import { GoalsTypes } from '../../Interface'
import { useDispatch, useSelector } from 'react-redux'
import { delGoal } from '../../Store/userSlice'
import { Roostate } from '../../Store/GlobalStore'

const style = {
  general: "max-w-[300px] min-w-[250px] min-h-[150px] m-2 p-2 max-h-[350px] rounded-md text-sm flex flex-col",
  dark: "bg-transparent text-white border-2 border-dashed border-emerald-500",
  light: "bg-slate-300 text-black"
}

function GoalsArticle({goalId,text,}: GoalsTypes) {
  const dispatch = useDispatch()
  const darkMode = useSelector((state: Roostate) => state.user.darkMode)


  return (
    <div key={goalId} className={`${style.general} ${darkMode ? style.dark : style.light}`}>

            <div className="goalHead justify-between w-full flex p-1 border-b-2 border-slate-400 border-dashed mb-2">
                <span>Goals</span> <button className='text-lg hover:text-rose-500' onClick={()=> dispatch(delGoal(goalId))}><MdDelete/></button>
            </div>

<p>

           {text}

</p>


        
    </div>
  )
}

export default GoalsArticle