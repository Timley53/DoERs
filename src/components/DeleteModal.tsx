import { useContext, useState } from "react"
import { GlobalContext } from "../Utils"
import { useDispatch } from "react-redux"
import { deleteProject, deleteTask } from "../Store/userSlice"

function DeleteModal() {
    const { setShowDelete, deleteDetails, setDeleteDetails} = useContext(GlobalContext)

    const [deleted, setDeleted] = useState<boolean>(false)

    const dispatch = useDispatch()


    const deleteFxn = () => {

      if(deleteDetails?.type === "task"){
        dispatch(deleteTask(deleteDetails.id))
        setDeleteDetails(null)
        setDeleted(true)
      } 

      if(deleteDetails?.type === "project"){
        dispatch(deleteProject(deleteDetails.id))
        setDeleteDetails(null)
        setDeleted(true)
      }

    }

  return (
    <div className='fixed top-0 left-0 w-screen text-black h-screen bg-gray-600 bg-opacity-85 backdrop-blur-md z-50  flex items-center justify-center'>
{
 !deleted &&  <div className="md:w-[60%] max-w-[430px] flex flex-col justify-center text-center items-center sm:w-[80%] bg-white h-[300px] rounded-lg p-2">

        <h2 className="w-full text-center text-wrap break-words">Are you sure you want to delete <span className="text-red-600"> {deleteDetails?.title} </span> ?</h2>

        <div className="my-10 w-[80%] flex justify-around">
            <button onClick={()=> {
              setShowDelete(false)
              setDeleteDetails(null)

            }} className='p-3 px-6 rounded-lg bg-red-400'>No</button>
            <button onClick={()=> deleteFxn()} className='p-3 px-6 rounded-lg bg-emerald-400'>yes</button>
        </div>

    </div>  || deleted && <div className="md:w-[55%] max-w-[300px] flex flex-col justify-center items-center sm:w-[80%] bg-white h-[200px] rounded-lg">

    <span className="m-4 p-3 text-rose-600">Deleted</span>
    <button className="m-4 p-3 px-6 bg-emerald-300 rounded-lg" onClick={()=> {
      
      setDeleted(false)
      setShowDelete(false)
      }}>Done</button>   
    </div>
    
    }


</div>
  )
}

export default DeleteModal