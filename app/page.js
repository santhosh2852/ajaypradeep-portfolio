'use client'

import Image from 'next/image'
// import NavBar from '/NavBar'
import NavBar from './NavBar/page'
import HomePage from '@/app/HomePage/page'
import ExperiencePage from '@/app/ExperiencePage/page'
import ContactForm from '@/app/ContactForm/page'
import FollowMe from '@/components/FollowMe'
import AwardPage from '@/app/AwardPage/page'
import AboutUs from '@/app/AboutUs/page'
export default function Home() {
  return (
    <div className=''>
      {/* <NavBar/> */}
      <HomePage/>
      {/* <ExperiencePage/> */}
      {/* <ContactForm/> */}
      {/* <AwardPage/> */}
      {/* <AboutUs/> */}
      {/* <FollowMe/> */}
    </div>
  )
}
