'use client'
import React from 'react'
import HomePage from './HomePage';
import ExperiencePage from './ExperiencePage';
import ContactForm from './ContactForm';
import AwardPage from './AwardPage';
import AboutUs from './AboutUs';
import Link from 'next/link'
import Image from 'next/image'
const NavBar = () => {
  return (
    <div className='w-full'>
        <nav className='z-10 fixed flex justify-center items-center text-white bg-black w-screen h-[100px] md:text-2xl md:gap-10 text-center select-none mx-auto text-xs gap-3 px-10'>
            <p><Link href="/ExperiencePage">EXPERIENCE</Link></p>
            <p><Link href="/AwardPage">AWARDS</Link></p>
            <p><Link href="/HomePage">
            <Image src='/white_logo.png' className=''
            draggable='false'
            width={80}
            height={80}
            alt=''
            /></Link></p>
            <p><Link href="/AboutUs">ABOUT</Link></p>
            <p><Link href="/ContactForm">CONTACT</Link></p>
        </nav>

    </div>
  )
}

export default NavBar