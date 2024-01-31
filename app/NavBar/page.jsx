'use client'
import React from 'react'
import HomePage from '@/app/HomePage/page';
import ExperiencePage from '@/app/ExperiencePage/page';
import ContactForm from '@/app/ContactForm/page';
import AwardPage from '@/app/AwardPage/page';
import AboutUs from '@/app/AboutUs/page';
import Link from 'next/link'
import Image from 'next/image'
const NavBar = () => {
  return (
    <div className='w-full'>
        <nav className='z-10 fixed flex justify-center items-center text-white bg-black w-screen h-[100px] md:text-2xl md:gap-10 text-center select-none mx-auto text-xs gap-3 px-10'>
            <p><Link href="/ExperiencePage">EXPERIENCE</Link></p>
            <p><Link href="/AwardPage">AWARDS</Link></p>
            <p><Link href="/">
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