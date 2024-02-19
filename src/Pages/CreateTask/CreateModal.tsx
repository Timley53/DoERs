import  { useContext } from 'react'
import { GlobalContext } from '../../Utils'

function CreateModal() {
    const { setShowModal, modalDetails, setModalDetails} = useContext(GlobalContext)
  return (
    <div className='w-screen h-screen bg-black fixed bg-opacity-60 top-0 left-0 backdrop-blur-md flex items-center justify-center transition-all duration-300 z-50'>
        
            <div className="w-[350px] h-[200px] text-center text-black bg-white flex flex-col items-center justify-center rounded-md">
                <span className='text-sm'>{modalDetails?.message}</span>
                <button onClick={()=>{
                   setShowModal(false)
                   setModalDetails({message: ""})
                }} className='my-6 p-2 px-3 bg-rose-600 rounded-md'>
                    Close
                </button>
            </div>

    </div>
  )
}

export default CreateModal