import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

function Applayout() {
  return (
    <div className='h-full w-full flex flex-col'>
        <Navbar />
        <Outlet />
    </div>
  )
}

export default Applayout