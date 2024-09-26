import React from 'react'
import { RxDashboard } from "react-icons/rx";
import { IoLinkSharp } from "react-icons/io5";
import { BsQrCode } from "react-icons/bs";
import { MdOutlineShowChart } from "react-icons/md";
import CustomLink from './CustomLink';
import { IoSettingsOutline } from "react-icons/io5";

const Sidebar=()=> {
    const sidebarItems = [
    {
        name:'Dashboard',
        icon:RxDashboard,
        link:'dashboard'
    },
    {
        name:'Links',
        icon:IoLinkSharp,
        link:'links'
    },
    {
        name:'QR Codes',
        icon:BsQrCode,
        link:'qr-codes'
    },
    {
        name:'Analytics',
        icon:MdOutlineShowChart,
        link:'analytics'
    },
    {
        name:'Settings',
        icon:IoSettingsOutline,
        link:'settings'
    }
    ]
  return (
    <>
    <aside className='w-72 h-full bg-white'>
        <div className='p-5'>
            {
                sidebarItems.map((item,index)=>{
                    return <CustomLink key={index} link={item.link} name={item.name} Icon={item.icon} />
                })
            }
        </div>
    </aside>
    </>
  )
}

export default Sidebar