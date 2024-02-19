import  { useContext, useState } from 'react'
import { DarkModeBtn, HomeGoalsBtn } from '../../components/Buttons'
import HomeGoalsStatus from './HomeGoalsStatus'
import PinnedTask from './PinnedTask'
import { GlobalContext } from '../../Utils'
import ProjectModal from './ProjectModal'
import CreateNewLink from '../../components/CreateNewLink'
import DeleteModal from '../../components/DeleteModal'
import { Roostate } from '../../Store/GlobalStore'
import { useSelector } from 'react-redux'
import { homeStyle } from '../../AllStyles'


const style = {
  general: 'w-full p-1 relative flex flex-col items-center',
  dark: "bg-black text-white",
  light: "bg-white "
}

function Home() {
  const { HomeProjectModal, showDelete} = useContext(GlobalContext)
  const darkMode = useSelector((state: Roostate) => state.user.darkMode)

const {HomeHeader} = homeStyle

  return (
    <div className={`${style.dark} ${darkMode ? style.dark : style.light}`}>

{showDelete && <DeleteModal />}
{
  HomeProjectModal && <ProjectModal/>
}

      <header className={HomeHeader.general + (darkMode ? HomeHeader.dark : HomeHeader.light)}>
        <span className='text-lg'>Welcome</span>


        <CreateNewLink dynaLink={"createtask"}/>
        <DarkModeBtn place='homeHeader'/>
      </header>


      <PinnedTask/>



    </div>
  )
}

export default Home