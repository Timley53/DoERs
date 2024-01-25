// /===Interface================>

interface HomeGoalsBtnProps {
    showGoalsStatus: boolean
    ,
     setShowGoalsStatus:  React.Dispatch<React.SetStateAction<boolean>>;
}




export const HomeGoalsBtn = ({setShowGoalsStatus } : HomeGoalsBtnProps) => {

    return(
        <button className="p-1 text-sm bg-slate-500 hover:bg-slate-200 text-white rounded-md transition-all" onClick={()=> setShowGoalsStatus(true)}>
            Goals/Status
        </button>
    )
}