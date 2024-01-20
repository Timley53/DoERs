import { createSlice } from "@reduxjs/toolkit";
import { userInitialStateTypes } from "../Interface";


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
        }
    }

})


export const {createNewProject} = userSlice.actions
export default userSlice.reducer
