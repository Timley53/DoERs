import { createSlice } from "@reduxjs/toolkit";
import { ProjectTypes, microTasks, userInitialStateTypes } from "../Interface";


const initialState: userInitialStateTypes = {
    allTasks: [],
    Projects: [],
    goals: [],
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
    }

})


export const {createNewProject, completedMicro, createNewTask} = userSlice.actions
export default userSlice.reducer
