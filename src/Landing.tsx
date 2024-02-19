import { Link } from 'react-router-dom'

import image from "./assets/landingImg.jpg"

function Landing() {
  return (
    <div className='w-full flex bg-[#FFE5C4] h-screen'>
      <div className="md:w-[50%] sm:w-[100%] h-screen flex flex-col p-2 items-center justify-center text-left">

        <h1 className='text-[3rem] mx-4 w-[70%]'>Hi, welcome</h1>

        <p className='text-2xl mx-4 w-[70%]'>
          Keep up with your daily tasks or projects and keep them organize. 1000X your efficeincy and keep your mind unclustered.
        </p>



     <article className='w-[70%] my-4 mt-16'>
     <Link to={"/dashboard"} className=' p-3 bg-purple-200 px-5 rounded-full self-start hover:text-white transition-all'>Goto Dashboard</Link>
     </article>
      </div>
      <img src={image} className='w-[50%] sm:hidden md:flex h-screen object-contain' alt="" />
      
       {/* <Link to={"/dashboard"}>Task</Link> */}
       
       </div>
  )
}

export default Landing