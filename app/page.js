'use client'

import Image from 'next/image'
import NavBar from '@/components/NavBar'
import HomePage from '@/components/HomePage'
import ExperiencePage from '@/components/ExperiencePage'
export default function Home() {
  return (
    <div className=''>
      <NavBar/>
      <HomePage/>
      {/* <ExperiencePage/> */}
    </div>
  )
}
