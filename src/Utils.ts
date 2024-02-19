import {  createContext } from "react";
import { GlobalContextType } from "./Interface";


export const GlobalContext = createContext<GlobalContextType>({
    HomeProjectModal: false,
    setHomeProjectModal: ()=> {},
    modalDetails: null,
    setModalDetails: ()=> {},
    showModal: false,
    setShowModal:  ()=> {},
    projectModalDetails: null,
    setProjectModalDetails: ()=> {},
    setProjectModalId: ()=> {},
    projectModalId: "",
    showDelete: false,
    setShowDelete: ()=>{},
    deleteDetails: null,
    
    setDeleteDetails: ()=> {}
    
})