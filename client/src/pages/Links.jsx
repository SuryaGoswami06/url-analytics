import React, { useEffect, useState } from 'react'
import { IoMdLink } from "react-icons/io";
import dudu from '/dudu-bubu.webp'
import { RiFileCopyLine } from "react-icons/ri";
import Tostify from '../utils/toast';

function Links() {
  const [copyUrl,setCopyUrl] = useState('snfjhsdhshgh rgirgihd hjh dr gdhnk sjh hjh jh jfshfj')
  const [isDuduDancing,setIsDuduDancing] = useState(false)
  const [timeOutId,setTimeOutId]= useState(null)

  const handleShorteningProcess = ()=>{
      setIsDuduDancing(true)
      const timeoutId = setTimeout(()=>{
          setIsDuduDancing(false)
      },2000)
      setTimeOutId(timeOutId)
  }

  useEffect(()=>{
    if(timeOutId){
      clearTimeout(timeOutId)
    }
  },[timeOutId])

  const handleCopyUrl = ()=>{
    navigator.clipboard.writeText(copyUrl)
    Tostify('success','Linked copied to clipboard')
  }


  return (
    <div className='flex flex-col w-full p-3'>
        <div className='flex flex-col justify-center items-center mt-10'>
            <h1 className='text-5xl capitalize font-semibold'>shorten you looong links :)</h1>
            <p>url analytics is efficient and easy to use URL shortening service that provide all information about shorten url</p>
            <div className='w-[80%] relative mt-8 border shadow-md'>
              <input className='w-full h-full p-4 pl-10' type="text"/>
              <IoMdLink className='absolute top-4 left-2 text-2xl' />
               <button onClick={handleShorteningProcess} className='absolute right-0 bg-primary h-full px-2 text-white capitalize text-center'>shorten now!</button>
            </div>
            {
              isDuduDancing?<img className='h-48 w-44'  src='https://media.tenor.com/iIBIiiS0fskAAAAi/mimibubu.gif'/>:<img src={dudu} alt="dudu-bubu-image" className='h-48 w-44 mt-2' />
            }
            {
              copyUrl.trim()!=='' && (
              <div className='mt-4 w-[80%] rounded-full border p-3 shadow-lg text-wrap relative'>
                  <span className='p-3'>{copyUrl}</span>
                  <RiFileCopyLine onClick={handleCopyUrl} className='absolute text-3xl right-4 bottom-2 cursor-pointer' />
              </div>)
            }
        </div>
        <div>

        </div>
    </div>
  )
}

export default Links