'use client'

import Image from 'next/image'
import NavBar from '@/components/NavBar'
import HomePage from '@/components/HomePage'
import ExperiencePage from '@/components/ExperiencePage'
import ContactForm from '@/components/ContactForm'
export default function Home() {
  return (
    <div className=''>
      <NavBar/>
      <HomePage/>
      {/* <ExperiencePage/> */}
      {/* <ContactForm/> */}
    </div>
  )
}
