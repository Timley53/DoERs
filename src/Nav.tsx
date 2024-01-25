import  { useState } from 'react'
import { Link } from 'react-router-dom'

import { GoProject } from "react-icons/go";
import { GrProjects, GrTask } from "react-icons/gr";
import { SlOptions } from "react-icons/sl";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { RiExpandRightFill } from "react-icons/ri";
import { NavLinkObjTypeS } from './Interface';

// const navStyles = {
//     link: ''
// }

const mainLinks: NavLinkObjTypeS[] = [
    
        { 
            link: "",
        text: "Dashboard",
        icon: (<GrProjects />),
    },
        { 
            link: "task",
        text: "Tasks",
        icon: (<GrTask />),
    }
    ,
    {
        link: "projects",
        text: "Projects",
        icon: (<GoProject/>),
    }
]

const otherLinks = [
{
    link: "option",
    text: "Option",
    icon: (<SlOptions/>),
}
]



function Nav() {

    const [light, setLight] = useState<boolean>(false)
    const [expand, setExpand] = useState<boolean>(false)
    const [, setPath] = useState<string>("dashboard")

    const route = window.location.pathname.split("/").length - 1

    // function currentPath(cur: string){

    //     if( window.location.pathname.split("/")[route] === cur){
    //          return "bg-slate-400 text-white" 
    //         } else{
    //             return ""
    //         }

           
            
    // }
    

    

    console.log(window.location.pathname.split("/")[route])

  return (

    <>

    <nav className='md:hidden sm:flex fixed bottom-0 w-full border-2'>
        <ul className='flex justify-between w-full px-2 list-none'>

        {
            [...mainLinks, ...otherLinks].map((li: NavLinkObjTypeS) => {
                
                return(
                    <li className="" key={li.link}>
                        <Link onClick={()=> setExpand(!expand)}  to={li.link} className={`flex text-center flex-col items-center p-1 px-2  $ ${window.location.pathname.split("/")[route] === li.link ? "bg-slate-400 text-white" : ''}`}>
                            <span className='text-2xl'>{li.icon}</span>
                            <span className='mt-1 text-xs'>{li.text}</span>
                        </Link>

                    </li>
                )
            })
        }
        </ul>
    </nav>

    <nav className={`flex sm:hidden md:flex flex-col items-center  ${ expand ? " w-[170px]" : "w-[80px]  "} sticky transition-all duration-1000 h-[100vh] p-1 pt-4 bg-[aliceblue] z-10`}>
    <Link to={"./"} >
        Doers
    </Link>


    

    <ul className={`w-[100%] ${!expand ? "flex  flex-col items-center" : ""}   mt-8 list-none p-1   rounded-2xl  py-2`}>
    <button className='mt-3 text-2xl mx-auto' onClick={()=> setExpand(!expand)}>
        <RiExpandRightFill/>
    </button>

        {
            mainLinks.map((li: NavLinkObjTypeS) => {

                return(
                    <li className='' key={li.link}>
                        <Link onClick={()=> setPath(li.link)} className={` p-2 mt-4 
                        text-[.9rem]
                        hover:bg-slate-400 hover:text-white
                        rounded-md transition-all flex items-center
                        ${ window.location.pathname.split("/")[route] === li.link ? "bg-slate-400 text-white" : '' }
                    `} 
                        
                        to={li.link}>

                        <span className='text-xl'>
                    {
                        (li.icon)
                    } 
                    </span>

                    <span className={`ml-3 ${expand ? "inlne" : "hidden"} transition-all`}>
                        {li.text}
                        </span>
                        </Link>
                        </li>
                )
            })
        }


    </ul>


    

 <ul className={`w-[93%] mt-6 list-none p-1   rounded-2xl bg-slate-300 ${!expand ? "flex  flex-col items-center " : ""} `}>

        {
            otherLinks.map((li: NavLinkObjTypeS) => {

                return(
                    <li className='' key={li.link}>
                        <Link onClick={()=> setPath(li.link)} className={` p-2  
                        text-[.9rem]
                        hover:bg-slate-400 hover:text-white
                        rounded-md transition-all  flex items-center $ ${ window.location.pathname.split("/")[route] === li.link ? "bg-slate-400 text-white" : '' }
                        `}
                        
                        to={li.link}>

                        <span className='text-xl'>
                    {
                        (li.icon)
                    } 
                    </span>

                    <span className={`ml-3 ${expand ? "inlne" : "hidden"} transition-all`}>
                        {li.text}
                        </span>

                        </Link>
                        </li>
                )
            })
        }
    </ul>

    <article className='w-[60%] p-1 bg-slate-300 mt-28  flex rounded-xl items-center'>
        <button className={`w-[50%] transition-all  duration-2000 p-2 px-3 text-center ${light ? "bg-black text-white": "bg-transparent"} rounded-xl `} onClick={()=>setLight(true)}><MdLightMode/></button>


        <button className={`w-[50%] transition-all duration-2000 p-2 px-3 text-center ${!light ? "bg-black text-white": "bg-transparent"} rounded-xl `} onClick={()=>setLight(false)}><MdDarkMode/>
        </button>
    </article>
</nav>

</>
  )
}

export default Nav