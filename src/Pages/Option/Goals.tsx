import React from 'react'
import GoalsArticle from './GoalsArticle'
import { useSelector } from 'react-redux'
import { RootState } from '@reduxjs/toolkit/query'
import { Roostate } from '../../Store/GlobalStore'
import { GoalsTypes } from '../../Interface'

function Goals() {
    const goals = useSelector((state: Roostate) => state.user.goals )


  return (
    <div className='w-full min-h-[200px] flex flex-wrap justify-center items-center'>


        {
          goals.length < 1 && "No Data" || goals.map((g: GoalsTypes) => {
                
            return ( <GoalsArticle key={g.goalId}  {...g}/>)
         })
        }
    

    </div>
  )
}

export default Goals