import { combineReducers, configureStore } from "@reduxjs/toolkit";

import userSlice  from "./userSlice"



const rootReducer = combineReducers({
   user: userSlice
})


const store = configureStore({
    reducer: rootReducer
})

export type Roostate = ReturnType<typeof store.getState>
export type AppsDispatch = typeof store.dispatch

export default store
