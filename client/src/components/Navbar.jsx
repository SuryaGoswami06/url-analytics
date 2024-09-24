import React from 'react'
import MobileNavbar from './MobileNav'
import DesktopNavbar from './DesktopNav'

function Navbar() {
  return (
    <header className='flex justify-between items-center bg-white p-1'>
        <div>
            <h1 className='text-2xl font-semibold uppercase'>url analytics</h1>
        </div>
         <div className='lg:hidden'>
              <MobileNavbar/>
         </div>
         <div className='hidden lg:block'>
              <DesktopNavbar />
         </div>
    </header>
  )
}

export default Navbar