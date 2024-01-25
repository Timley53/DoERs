import React, { useContext, useState } from 'react'
import { GoStar } from "react-icons/go";
import { MdDelete } from "react-icons/md";
import { microTasks } from '../Interface';
import { FaStar } from "react-icons/fa6";
import { GlobalContext } from '../Utils';

type Props = microTasks &  {

    taskList: microTasks[],
    setTaskList: React.Dispatch<React.SetStateAction<microTasks[]>>;
}

type starCheckType = (tasks: microTasks[]) => boolean;

function NewMicroTasks({microId, title, star, taskList, setTaskList} : Props) {
    const {setModalDetails,setShowModal } = useContext(GlobalContext)

        const checkIfStar: starCheckType = (tasks :  microTasks[]) => {
             const starCheckArr = tasks.filter(task => task.star === true).length

             return starCheckArr === 3
        }



        

  return (
    <div className='my-4 text-center rounded-md border-2'>

        <article  className='flex rounded-md'>
            <input type="text" placeholder='Tasks'  className='p-1 focus-within:outline-none  text-sm w-full' value={title}  
            onChange={(e)=>{

                setTaskList(taskList => taskList.map(task => {
                    if(task.microId === microId){
                        return {
                            ...task, 
                            title: e.target.value
                        }
                    } 

                    return task
                }))
            }} required
            />


            <span className={`${ star === true ? "text-yellow-500" : ""} text-base p-1 px-2 mx-1  transition-all rounded-sm cursor-pointer `} 
                onClick={()=> {


                    if(checkIfStar(taskList) && !star){
                        console.log("no")
                     }

                    if(checkIfStar(taskList) && star){
                        setTaskList(taskList => taskList.map((task) => {
                            if(task.microId === microId){
                                return {
                                    ...task,
                                     star: false
                                }
                            }
                            
                            return task
                        }))
                    } 
                    
                    if(!checkIfStar(taskList) && star){
                        setTaskList(taskList => taskList.map((task) => {
                            if(task.microId === microId){
                                return {
                                    ...task,
                                    star: false
                                }
                            }
                            
                            return task
                        }))
                    } 
                    
                    if(!checkIfStar(taskList) && !star){
                        setTaskList(taskList => taskList.map(task => {
                            if(task.microId === microId){
                                return {
                                    ...task, 
                                    star: true
                                }
                            } 
                            
                            return task
                        }))
                    }


                   

                    
                }}
            > 
            {
                star && <FaStar/>  || !star && <GoStar/>
            }
            </span>

            <span className='text-base p-1 px-2  transition-all rounded-sm cursor-pointer hover:text-red-500'  
            
            onClick={()=> {
                if(taskList.length === 2) {
                    setModalDetails({
                       message: "Need at least two(2) task for a project"
                    })
                    setShowModal(true)

                     return
                }
                setTaskList(taskList => taskList.filter(task => task.microId !== microId))
            }}
            ><MdDelete/></span>
        </article>
      

    </div>
  )
}

export default NewMicroTasks