import React, { useState } from 'react'
import {  Outlet } from 'react-router-dom'
import Nav from './Nav'
import { GlobalContext } from './Utils'
import { Provider } from 'react-redux'
import store from './Store/GlobalStore'
import { CreateModalType, ProjectTypes } from './Interface'




function AppLayout() {
  const [HomeProjectModal, setHomeProjectModal] = useState<boolean>(false)
  const [showModal, setShowModal] = useState<boolean>(false)
  // const [createModalDetails, setCreateModalDetails] = useState<CreateModalType>({message: ""})

  const [modalDetails, setModalDetails] = useState<CreateModalType | null>({message: ""})
  const [projectModalDetails, setProjectModalDetails] = useState<ProjectTypes | null>(null)
  const [projectModalId, setProjectModalId] = useState<string>("")



  return (

    <Provider store={store}>

    <GlobalContext.Provider  value={{HomeProjectModal, setHomeProjectModal, modalDetails, setModalDetails, showModal, setShowModal, projectModalDetails, setProjectModalDetails, projectModalId, setProjectModalId}}>

    <div className='w-[100%] bg-[aliceblue] h-screen min-h-[100vh] flex border-2 relative overflow-hidden'>
        <Nav/>
        <main className='w-[100%] h-100% overflow-y-scroll'>
            <Outlet/>
        </main>
    </div>
    </GlobalContext.Provider>
    </Provider>
  )
}

export default AppLayout