import { IoAddOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'

interface Props{
    dynaLink: string
}

function CreateNewLink({dynaLink}:Props) {
  return (

    <Link to={dynaLink} className='flex items-center p-2 hover:text-blue-950 transition-all duration-500 sm:bg-slate-200 sm:rounded-full '>
    <IoAddOutline className="mr-1 md:text-xl sm:text-2xl"/>
     <span className='sm:hidden md:flex'>  
       Create task
      </span>
     <span className='sm:flex md:hidden'>  
       Add
      </span>
      </Link>  )
}

export default CreateNewLink