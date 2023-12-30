'use client'

import React from 'react'
import Image from 'next/image'
const NavBar = () => {
  return (
    <div className='w-screen'>
        <nav className='flex justify-center items-center list-none md:text-3xl text-white bg-black w-full h-[100px] md:gap-[100px] text-center select-none mr-auto ml-auto text-xs gap-3'>
            <li>EXPERIENCE</li>
            <li>AWARDS</li>
            <Image src='/white_logo.png' className=''
            draggable='false'
            width={80}
            height={80}
            />
            <li>ABOUT</li>
            <li>CONTACT</li>
        </nav>

    </div>
  )
}

export default NavBar