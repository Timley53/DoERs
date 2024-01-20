import React from 'react'

interface Props {
    deadline: string,
    setDeadline:  React.Dispatch<React.SetStateAction<string>>;
}

function Deadline({deadline, setDeadline} : Props) {
  return (
    <article className='text-left flex flex-col w-[90%] max-w-[300px] my-1 mb-2'>
    <label htmlFor="">Deadline</label>
    <input type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} name="" id=""  className='my-1 w-[100%] p-1 rounded-sm text-sm' required />
</article>
  )
}

export default Deadline