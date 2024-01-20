import React from 'react'

interface Props  {
  title: string,
  setTitle: React.Dispatch<React.SetStateAction<string>>
}

function NewTaskTitleInput({title, setTitle}: Props) {
  return (
    <>
      <article className='text-left w-[90%] max-w-[300px] my-2 '>
           
           <input type="text"
           value={title}
           onChange={(e)=> setTitle(e.target.value)}
           className='rounded-md p-2  w-[100%]'  placeholder='Title' required/>
</article>


    </>
  )
}

export default NewTaskTitleInput