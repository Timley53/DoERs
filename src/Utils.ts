import {  createContext } from "react";
import { GlobalContextType } from "./Interface";


export const GlobalContext = createContext<GlobalContextType>({
    HomeProjectModal: false,
    setHomeProjectModal: ()=> {},
    modalDetails: null,
    setModalDetails: ()=> {},


})