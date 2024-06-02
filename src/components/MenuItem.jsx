import Link from 'next/link'
import React from 'react'

const MenuItem = ({ title, address, icon }) => {
  return (
    <Link href={address} className='hover:text-amber-300'>
        <span className='text-2xl sm:hidden'>{icon}</span>
        <p className='uppercase hidden sm:inline text-sm'>{title}</p>
    </Link>
  )
}

export default MenuItem