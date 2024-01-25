import React from 'react'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <div className='w-full'>Landing <Link to={"/dashboard"}>Task</Link></div>
  )
}

export default Landing