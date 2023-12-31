'use client'

import React from 'react'
import Image from 'next/image'
const NavBar = () => {
  return (
    <div className='w-full'>
        <nav className='fixed flex justify-center items-center text-white bg-black w-screen h-[100px] md:text-2xl md:gap-10 text-center select-none mx-auto text-xs gap-5 px-10'>
            <p>EXPERIENCE</p>
            <p>AWARDS</p>
            <Image src='/white_logo.png' className=''
            draggable='false'
            width={80}
            height={80}
            alt=''
            />
            <p>ABOUT</p>
            <p>CONTACT</p>
        </nav>

    </div>
  )
}

export default NavBar