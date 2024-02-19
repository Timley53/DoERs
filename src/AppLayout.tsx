import  { useState } from 'react'
import {  Outlet } from 'react-router-dom'
import Nav from './Nav'
import { GlobalContext } from './Utils'
import { Provider,  } from 'react-redux'
import store, { Roostate } from './Store/GlobalStore'
import { CreateModalType, DeleteDetailsType, ProjectTypes } from './Interface'
import MainLayout from './MainLayout'



function AppLayout() {
  const [HomeProjectModal, setHomeProjectModal] = useState<boolean>(false)
  const [showModal, setShowModal] = useState<boolean>(false)
  // const [createModalDetails, setCreateModalDetails] = useState<CreateModalType>({message: ""})

  const [modalDetails, setModalDetails] = useState<CreateModalType | null>({message: ""})
  
  const [projectModalDetails, setProjectModalDetails] = useState<ProjectTypes | null>(null)

  const [projectModalId, setProjectModalId] = useState<string>("")
  const [showDelete, setShowDelete] = useState<boolean>(false)
  const [deleteDetails, setDeleteDetails] = useState<null | DeleteDetailsType>(null)




  return (

    <Provider store={store}>

    <GlobalContext.Provider  value={{HomeProjectModal, setHomeProjectModal, modalDetails, setModalDetails, showModal, setShowModal, projectModalDetails, setProjectModalDetails, projectModalId, setProjectModalId, showDelete, setShowDelete, deleteDetails, setDeleteDetails}}>
<MainLayout/>
   
    </GlobalContext.Provider>
    </Provider>
  )
}

export default AppLayout