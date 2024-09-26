import React from 'react'
import Navbar from '../components/Navbar'
import {useMediaQuery} from 'react-responsive'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'

function Applayout() {
  const isDesktop = useMediaQuery({minWidth:768})
  return (
    <div className='h-screen w-full flex flex-col'>
        <Navbar />
        <section className='h-full w-full flex '>
          {
            isDesktop && <Sidebar />
          }
          <Outlet />
        </section>
    </div>
  )
}

export default Applayout
