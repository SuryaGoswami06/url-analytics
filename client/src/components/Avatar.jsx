import React, { useEffect, useMemo, useState ,useRef} from 'react'
import { FaRegUser } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import { MdOutlineSettings } from "react-icons/md";
import { CiLogin } from "react-icons/ci";
import CustomLink from './CustomLink';

function Avatar({name,accountType}) {
    const [isOpen,setIsOpen] = useState(true)
    const navProfileContainerRef = useRef(null)

    const profileDropDownItems = [
        {
            name:'my account',
            icon:FaRegUser,
            link:'my-account'
        },
        {
            name:'billing & plan',
            icon:MdOutlinePayment,
            link:'billing-and-plan'
        },
        {
            name:'settings',
            icon:MdOutlineSettings,
            link:'settings'
        },
        {
            name:'sign out',
            link:'sign-out',
            icon:CiLogin
        }
    ]

    if(name.trim()==''){
        return <div>internal probelm😭😭😭</div>
    }

   
    const shortUserName = useMemo(()=>{
        let sn = ''
        const nameFormatOfArray = name.split(' ')
        nameFormatOfArray.forEach(elem=>{
            sn+=elem[0]
        })
        return sn
    },[])

    const handleProfileToggle = ()=>{
        setIsOpen(!isOpen)
    }

    useEffect(()=>{
        const handlePofileToggleOutsideContainer = (event)=>{
            if(navProfileContainerRef.current && !navProfileContainerRef.current.contains(event.target)){
                setIsOpen(false)
            }
        }
        
        document.addEventListener('mousedown',handlePofileToggleOutsideContainer)
        return ()=>{
            document.removeEventListener('mousedown',handlePofileToggleOutsideContainer)
        }
    },[])
    

  return (
    <div className='relative ml-4' ref={navProfileContainerRef}>
        <div onClick={handleProfileToggle} className='grid place-items-center uppercase cursor-pointer h-10 w-10 rounded-full bg-chocolateColor text-darkChocolateColor'>
            <span>{shortUserName}</span>
        </div>
        {
        isOpen && (
            <div className='absolute right-5 top-14 w-60 bg-white'>
                <div className='p-3 flex flex-col'>
                    <div className='border-b flex '>
                        <div onClick={handleProfileToggle} className=' mr-2 grid place-items-center uppercase cursor-pointer h-10 w-10 rounded-full bg-chocolateColor text-darkChocolateColor ' >
                            <span>{shortUserName}</span>
                        </div>
                        <div className='flex flex-col'>
                            <span>{name}</span>
                            <span className='text-greenColor font-semibold capitalize'>{accountType}</span>
                        </div>
                    </div>
                    <div>
                        {
                            profileDropDownItems?.map((item)=>{
                                return <CustomLink link={item.link} Icon={item.icon} name={item.name} />
                            })
                        }
                    </div>
                </div>
            </div>
         )
        }
    </div>
  )
}

export default Avatar