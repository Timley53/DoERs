import './App.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Landing from './Landing'
import AppLayout from './AppLayout'
import Home from './Pages/Home/Home'
import Pending from './Pages/Pending/Pending'
import Layout from './Layout'
import Completed from './Pages/Completed/Completed'
import Project from './Pages/Projects/Project'
import Status from './Pages/Status/Status'
import Goals from './Pages/Goals/Goals'
import Option from './Pages/Option/Option'
import CreateTask from './Pages/CreateTask/CreateTask'
import Task from './Pages/Tasks/Task'


const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
    
      <Route index element={<Landing/>}/>

    <Route path='dashboard' element={<AppLayout/>}>

      <Route index element={<Home/>}/>

      <Route path='createtask' element={<CreateTask/>}/>
      <Route path='task' element={<Task/>}/>
      <Route path='pending' element={<Pending/>}/>
      <Route path='completed' element={<Completed/>}/>
      <Route path='projects' element={<Project/>}/>
      <Route path='status' element={<Status/>}/>
      <Route path='goals' element={<Goals/>}/>
      <Route path='option' element={<Option/>}/>

    </Route>

    
  </Route>
))

function App() {



  return (
    <RouterProvider router={router}/>
  )
}

export default App
