
export interface GlobalContextType{
    HomeProjectModal: boolean;
    setHomeProjectModal:React.Dispatch<React.SetStateAction<boolean>> |( ()=> {}); 
    modalDetails: CreateModalType  | null
    , setModalDetails:  React.Dispatch<React.SetStateAction<CreateModalType | null>> | ( ()=> {});
    showModal: boolean;
    setShowModal:  React.Dispatch<React.SetStateAction<boolean>>;
    projectModalDetails: ProjectTypes | null,
     setProjectModalDetails: React.Dispatch<React.SetStateAction<ProjectTypes | null>>;
     projectModalId: string, 
     setProjectModalId:  React.Dispatch<React.SetStateAction<string>>;
    showDelete: boolean,
    setShowDelete: React.Dispatch<React.SetStateAction<boolean>>;
    deleteDetails: null | DeleteDetailsType
    
    , setDeleteDetails: React.Dispatch<React.SetStateAction<DeleteDetailsType | null>>;
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
    completed: boolean;
}

export interface ProjectTypes{
    projectId: string,
    createdAt: string,
    deadline: string,
    title: string;
    status: string,
    onhold: boolean,
    note: string;
    microTasks: microTasks[];
    pinned: boolean;
    type: string,
}

export interface TaskType{
    taskId: string,
    title: string,
    completed: boolean;
    deadline: string;
    createdAt: string;
    type: string
    pinned: boolean
}


export interface userInitialStateTypes{
    allTasks: TaskType[] | [];
    Projects: ProjectTypes[] | [];
    goals: GoalsTypes[],
    darkMode: boolean;
}
export interface CreateModalType {
  message: string

}

export interface DeleteDetailsType {
    type: "task" | "project",
    id: string,
    title: string
}

export interface GoalsTypes {
    text: string,
    date: string;
    completed: boolean;
    goalId: string;
}

