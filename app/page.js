'use client'

import Image from 'next/image'
import NavBar from '@/components/NavBar'
import HomePage from '@/components/HomePage'
import ExperiencePage from '@/components/ExperiencePage'
import ContactForm from '@/components/ContactForm'
import FollowMe from '@/components/FollowMe'
import AwardPage from '@/components/AwardPage'
import AboutUs from '@/components/AboutUs'
export default function Home() {
  return (
    <div className=''>
      <NavBar/>
      {/* <HomePage/> */}
      {/* <ExperiencePage/> */}
      {/* <ContactForm/> */}
      {/* <AwardPage/> */}
      <AboutUs/>
      {/* <FollowMe/> */}
    </div>
  )
}
