import React, {  useContext, useState } from 'react'
import NewTaskTitleInput from '../../components/NewTaskTitleInput'
import generateUniqueId from 'generate-unique-id'
import { ProjectTypes, microTasks } from '../../Interface'
import NewMicroTasks from '../../components/NewMicroTasks'
import { GrAdd } from 'react-icons/gr'
import NewNotes from '../../components/NewNotes'
import { GlobalContext } from '../../Utils'
import { useDispatch, useSelector } from 'react-redux'
import { AppsDispatch, Roostate } from '../../Store/GlobalStore'
import { createNewProject } from '../../Store/userSlice'
import Deadline from './Deadline'
import { createTaskStyle } from '../../AllStyles'


function NewProject() {
    const {setShowModal, setModalDetails} = useContext(GlobalContext)
    const dispatch = useDispatch()

    const darkMode = useSelector((state: Roostate) => state.user.darkMode)


    const defaultMicroTask = [
        {
            microId: `micro/${generateUniqueId({
                length: 8,
                useLetters: true,
                useNumbers: true,
            })}`,
            title: "",
            star: false,
            completed: false,
        }, 
        {
            microId: `micro/${generateUniqueId({
                length: 8,
                useLetters: true,
                useNumbers: true,
            })}`,
            title: "",
            star: false,
            completed: false,
        },   
    ]
    

    const [taskList, setTaskList] = useState<microTasks[]>(defaultMicroTask)

    const [notes, setNotes] = useState<string>("")
    const [showNotes, setShowNotes] = useState<boolean>(false)
    const [deadline, setDeadline] = useState<string >("")
    const [title, setTitle] = useState<string >("")


    // console.log(deadline);
    // console.log(new Date(deadline));
    
    const clearForm = () => {
        setNotes("")
        setShowNotes(false)
        setDeadline("")
        setTitle("")
        setTaskList(defaultMicroTask)

    }


    const newProjectSubmit = (e : React.FormEvent)  => {
        e.preventDefault()
        

        const newPjDetails: ProjectTypes = { 
            projectId: `project/${generateUniqueId({
            length: 5,
            useLetters: true,
            useNumbers: true,
        })}`,
        createdAt:new Date().toDateString(),
        deadline: deadline,
        title: title,
        status: "active",
        onhold: false,
        note: notes,
        microTasks: [...taskList],
        pinned: false,
        type: "Project"
    }

        dispatch<AppsDispatch | any>(createNewProject({...newPjDetails}))
        setModalDetails({
            message: "Project Created"
         })
         setShowModal(true)

         clearForm()
    }

    const {newProject} = createTaskStyle

  return (
    <form onSubmit={newProjectSubmit} className={newProject.general + (darkMode ? newProject.dark : newProject.light)}>
       
        
        <h2 className='text-center mb-4'>New project</h2>
        <NewTaskTitleInput title={title} setTitle={setTitle}/>


        <div className="w-[80%] max-w-[300px]  h-full text-left" >
            <h2 className='mb-6 mt-2'>Project Tasks</h2>
            {
               taskList.length > 0 && taskList.map((micro: microTasks) => {

                    const {microId, title, star, completed } = micro

                    return (
                        <NewMicroTasks completed={completed} key={micro.microId}   
                        microId={microId} title={title} star={star} taskList={taskList}  setTaskList={setTaskList}
                        />
                    )
                }) || taskList.length < 1 && (
                    <div className="w-full p-2 text-center my-6">
                        Please Add new task
                    </div>
                )

            }
        </div>

<Deadline setDeadline={setDeadline} deadline={deadline}/>


        <div className="flex justify-between p-1 m-2 w-[80%] max-w-[300px] items-center">
            <span className="text-[14px] cursor-pointer" onClick={()=> setShowNotes(true)}>
                Add notes
            </span>

            <span className='flex text-[.9rem] self-end hover:text-white transition-all cursor-pointer' 
        onClick={()=> setTaskList([
            ...taskList,
            {
                microId: `micro/${generateUniqueId({
                    length: 8,
                    useLetters: true,
                    useNumbers: true,
                })}`,
                title: "",
                star: false,
                completed: false
            },   
        ])}>
           <GrAdd className="mr-3"/>  Add new
        </span>
        </div>


      


       {
        showNotes && <NewNotes notes={notes} setNotes={setNotes} />
       }

      

        <button className='rounded-md my-2 p-2 bg-emerald-400 w-[80%] max-w-[300px] hover:bg-emerald-500' >
            Submit
        </button>
    </form>
  )
}

export default NewProject