import { createSlice } from "@reduxjs/toolkit";
import { ProjectTypes, TaskType, microTasks, userInitialStateTypes } from "../Interface";


const initialState: userInitialStateTypes = {
    allTasks: [],
    Projects: [],
    goals: [],
    darkMode: false,
}


 const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        createNewProject: (state, action) => {
            state.Projects = [...state.Projects, action.payload]
        },
        createNewTask: (state, action) => {
            state.allTasks = [...state.allTasks, {
                ...action.payload
            }]
        },
        deleteProject: (state, action) => {
            state.Projects = state.Projects.filter((pj: ProjectTypes) => pj.projectId !== action.payload)
        },
        deleteTask: (state, action) => {
                state.allTasks = state.allTasks.filter((task: TaskType) => task.taskId !== action.payload)
        },
        completedMicro: (state, action) => {
            state.Projects = state.Projects.map((pj: ProjectTypes) => {
                if(pj.projectId === action.payload.projectId  ){
                    return {
                        ...pj,
                        microTasks: pj.microTasks.map((micro: microTasks) => {
                            if(micro.microId === action.payload.microId){
                                return {
                                    ...micro,
                                    completed: !micro.completed
                                }
                            }

                            return micro
                        })
                    }
                }
                return pj
            })
            console.log(action.payload)
        },

        edditNotes: (state, action) => {
            state.Projects = state.Projects.map((pj) => {
                if(pj.projectId === action.payload.id){
                   return {
                    ...pj, 
                    note: action.payload.notes
                   }
                }else{
                return pj
                }
            })
        },

        pinProject: (state, action) => {
            state.Projects = state.Projects.map((pj) => {
                if(pj.projectId === action.payload){
                    return {
                        ...pj,
                        pinned: !pj.pinned
                    }
                }

                return pj
            })
        },


        pinTask: (state, action) => {
            state.allTasks = state.allTasks.map((task) => {
                if(task.taskId === action.payload){
                    return {
                        ...task,
                        pinned: !task.pinned
                    }
                }

                return task
            })
        },

        delGoal: (state, action) => {

            state.goals = state.goals.filter((goal) => goal.goalId !== action.payload)

        },

        addGoal:(state, action) => {
            state.goals = [...state.goals, {
                ...action.payload
            }
        ]
        },
        setDarkMode: (state) => {
            state.darkMode = !state.darkMode
        }


    }

})


export const {createNewProject, completedMicro, createNewTask, deleteTask, deleteProject, edditNotes, pinProject, pinTask, delGoal, addGoal, setDarkMode
} = userSlice.actions
export default userSlice.reducer
