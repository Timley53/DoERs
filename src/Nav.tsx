import React, { useState } from 'react'
import { Link, Router, useNavigate } from 'react-router-dom'
import { MdPendingActions } from "react-icons/md";
import { CgOptions } from "react-icons/cg";

import { GoProject } from "react-icons/go";
import { GrProjects } from "react-icons/gr";
import { LuClipboardCheck, LuTarget } from "react-icons/lu";
import { SlOptions } from "react-icons/sl";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { RiExpandRightFill } from "react-icons/ri";

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
        link: "pending",
        text: "Pending",
        icon: (<MdPendingActions/>),
    }
    ,
    {
        link: "completed",
        text: "Completed",
        icon: (<LuClipboardCheck/>),
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
        link: "status",
    text: "Status",
    icon: (<CgOptions/>),
},
{
    link: "goals",
    text: "Goals",
    icon: (<LuTarget />),
}
,
{
    link: "option",
    text: "Option",
    icon: (<SlOptions/>),
}
]



function Nav() {

    const [light, setLight] = useState<boolean>(false)
    const [expand, setExpand] = useState<boolean>(false)
    const [path, setPath] = useState<string>("dashboard")

    const route = window.location.pathname.split("/").length - 1

    function currentPath(cur: string){

        if( window.location.pathname.split("/")[route] === cur){
             return "bg-slate-400 text-white" 
            } else{
                return ""
            }

           
            
    }
    

    

    console.log(window.location.pathname.split("/")[route])

  return (
    <nav className={`flex flex-col items-center  ${ expand ? " w-[170px]" : "w-[80px]  justify-center"} sticky transition-all duration-1000 h-[100vh] p-1 pt-4 bg-[aliceblue] z-10`}>
    <Link to={"./"} >
        Doers
    </Link>


    

    <ul className={`w-[100%] ${!expand ? "flex  flex-col items-center" : ""}   mt-3 list-none p-1   rounded-2xl  py-2`}>
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
                        <Link onClick={()=> setPath(li.link)} className={` p-2 mt-4 
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
</nav>  )
}

export default Nav