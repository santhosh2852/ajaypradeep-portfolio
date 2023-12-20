'use client'
import React from 'react'
import ResumeButton from './ResumeButton'
import Image from 'next/image'
import PictureOnTraining from './PictureOnTraining'
import FollowMe from './FollowMe'
const HomePage = () => {
  return (
    <>
      <div className='bg-white text-center pt-[100px] select-none'>
        <span className='text-6xl text-black font-semibold'>Welcome to Ajay Pradeep Portfolio</span><br/><br/>
        <span className='text-2xl'>Hr Recruiter | Training & Placement |Branding | Man Power Supply<br/>| Rotaract Leader| Insta Host</span>
      </div>
      <ResumeButton/><br/><br/>
      <div className='select-none bg-smoke-white'>
        <Image className='flex mr-auto ml-auto pt-5' draggable='false'
        src='/CubeImage.png'
        width={70}
        height={70}
        /><br/>
        <span className='w-full h-auto text-black text-xl pt-0 flex text-center items-center justify-center'>Experienced Founder with a demonstrated history of working in the human resources industry. Skilled in HR Consulting, Microsoft Word, Customer Relationship Management (CRM), Team Building, and Technical Recruiting. Strong business development professional with a Bachelor’s Degree focused in Business Administration and Management, General from Alpha Arts And Science College.</span>
      </div>
      <PictureOnTraining/>
      <FollowMe/>
    </>
  )
}

export default HomePage