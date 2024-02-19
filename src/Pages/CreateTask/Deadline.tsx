import React from 'react'
import {  useSelector } from 'react-redux';
import { Roostate } from '../../Store/GlobalStore';
import { createTaskStyle } from '../../AllStyles';

interface Props {
    deadline: string,
    setDeadline:  React.Dispatch<React.SetStateAction<string>>;
}

function Deadline({deadline, setDeadline} : Props) {
  const darkMode = useSelector((state: Roostate) => state.user.darkMode)

  const {deadline:deadlineStyle } = createTaskStyle

  return (
    <article className='text-left flex flex-col w-[90%] max-w-[300px] my-1 mb-2'>
    <label htmlFor="">Deadline</label>
    <input type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} name="" id=""  className={deadlineStyle.general + (darkMode ?  deadlineStyle.dark : deadlineStyle.light)} required />
</article>
  )
}

export default Deadline