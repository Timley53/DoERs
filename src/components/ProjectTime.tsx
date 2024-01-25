import { format } from 'date-fns/format';


interface Props {
  deadline: string,
  createdAt: string;
}

function ProjectTime({deadline, createdAt} : Props) {
  console.log(createdAt)
  return (
    <div className='w-[95%] my-1 text-xs'>
        <article className='w-full flex justify-between  my-1'>
            <span className='p-1 px-2 bg-rose-500 rounded-full text-white'>Deadline</span>
            <span>{format(deadline, "dd-MM-yyyy")}</span>
        </article> 
        
        <article className='w-full flex  justify-between my-1'>
            <span  className='p-1 px-2 rounded-full'>Created</span>
            <span>{format(createdAt, "dd-MM-yyyy")}</span>
        </article>
        
    </div>
  )
}

export default ProjectTime