import React, { useContext, useState } from 'react'
import Search from './Search'
import { HomeGoalsBtn } from '../../components/Buttons'
import HomeGoalsStatus from './HomeGoalsStatus'
import PinnedTask from './PinnedTask'
import { GlobalContext } from '../../Utils'
import ProjectModal from './ProjectModal'

function Home() {
  const [searchValue, setSearchValue] = useState<string>("")
  const [showGoalsStatus, setShowGoalsStatus] = useState<boolean>(false)
  const { HomeProjectModal} = useContext(GlobalContext)

  return (
    <div className='w-full p-1 relative flex flex-col items-center'>


{
  HomeProjectModal && <ProjectModal/>
}

      <header className='w-full flex p-2 items-center justify-between'>
        <span className='text-lg'>Welcome</span>
        <Search searchValue={searchValue} setSearchValue={setSearchValue}/>
        <HomeGoalsBtn  showGoalsStatus={showGoalsStatus} setShowGoalsStatus={setShowGoalsStatus}/>
      </header>

      {showGoalsStatus && <HomeGoalsStatus showGoalsStatus={showGoalsStatus} setShowGoalsStatus={setShowGoalsStatus}/>}

      <PinnedTask/>



    </div>
  )
}

export default Home