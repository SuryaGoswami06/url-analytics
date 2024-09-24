import React from 'react'
import GreetNTime from './GreetNTime'
import {useSelector} from 'react-redux'
import { IoMdAdd } from "react-icons/io";
import Button from './Button';
import Avatar from './Avatar';

function DesktopNav() {
  const isLoggedIn = useSelector(state=>state.user.isLoggedIn)
  console.log(isLoggedIn);
  return (
    <div className='flex justify-between items-center mr-10'>
        <GreetNTime />
        {
          isLoggedIn ? (
              //user profile dropdown menu
              <Avatar name='suryalant goswami' accountType='free account' />
          ):(
              // login and register button
              <>
                <Button 
                variant='primary'
                label='login'
                />
                <Button 
                variant='ghost'
                label='register'
                />
              </>
              
          )
        }
    </div>
  )
}

export default DesktopNav