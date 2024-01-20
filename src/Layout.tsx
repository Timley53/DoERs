import React from 'react'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className='w-[100%] h-[100%]'>
        <Outlet/>
    </div>
  )
}

export default Layout