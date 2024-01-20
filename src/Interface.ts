
export interface GlobalContextType{
    HomeProjectModal: boolean;
    setHomeProjectModal:React.Dispatch<React.SetStateAction<boolean>> |( ()=> {}); 
    modalDetails: CreateModalType
    , setModalDetails:  React.Dispatch<React.SetStateAction<CreateModalType>> | ( ()=> {});
    showModal: boolean;
    setShowModal:  React.Dispatch<React.SetStateAction<boolean>>;
  

}


export interface NavLinkObjTypeS {
    link: string,
    text: string,
    icon: any,
}


export interface dateTypes {
    dateObj: Date,
    text: string
}

export interface projectTasks {
 

}

export interface microTasks{
    microId: string;
    title: string;
    star: boolean;
}

export interface ProjectTypes{
    projectId: string,
    createdAt: string,
    deadline: dateTypes,
    title: string;
    status: string,
    onhold: boolean,
    note: string;
    microTasks: microTasks[]
    // tasks: 
}

export interface TaskType{
    taskId: string,
    title: string,
    completed: boolean;
    notes: string;
    deadline: dateTypes;
    onhold: boolean; 
    createdAt: string;
}
export interface GoalsTypes {

}


export interface userInitialStateTypes{
    allTasks: TaskType[] | [];
    Projects: ProjectTypes[] | [];
    goals: []
}
export interface CreateModalType {
  message: string
}
