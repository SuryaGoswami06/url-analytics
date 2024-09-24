import React from 'react'
import { Link } from 'react-router-dom'

function CustomLink({Icon,link,name}) {
  return (
    <Link to={link} className='flex items-center justify-start h-full w-full hover:bg-primaryHoverColor p-2'>
        <Icon />
        <span className='ml-2'>{name}</span>
    </Link>
  )
}

export default CustomLink