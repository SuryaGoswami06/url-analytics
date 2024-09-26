import React from 'react'
import { NavLink } from 'react-router-dom'

function CustomLink({Icon,link,name}) {
  return (
    <NavLink to={link} className={({isActive})=>`${isActive?'bg-primaryHoverColor text-primary':''} flex items-center justify-start h-full w-full hover:bg-primaryHoverColor p-2`}>
        <Icon />
        <span className='ml-2'>{name}</span>
    </NavLink>
  )
}

export default CustomLink