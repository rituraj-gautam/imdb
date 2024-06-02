import React from 'react'
import {AiFillHome} from "react-icons/ai"
import {BsFillInfoCircleFill} from "react-icons/bs"
import MenuItem from "@/components/MenuItem"
import Link from 'next/link'
import DarkModeSwitch from './DarkModeSwitch'

const Header = () => {
  return (
    <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <div className='flex gap-4'>
            <MenuItem title="Home" address="/" icon = {<AiFillHome/>} />
            <MenuItem title="About" address="/about" icon = {<BsFillInfoCircleFill/>} />
        </div>

        <div className='flex gap-4 items-center'>
          
        <DarkModeSwitch /> 
        <Link href={'/'} className='flex gap-2 items-center'>
            <span className='text-2xl font-bold bg-amber-500 px-2 py-1 rounded-lg'>IMDb</span>
            <span className='text-xl hidden sm:inline'>Clone</span>
        </Link>
        </div>
    </div>
  )
}

export default Header