'use client'
import React from 'react'
import ResumeButton from '../ResumeButton/page'
import Image from 'next/image'
import PictureOnTraining from '../../components/PictureOnTraining'
import { motion } from "framer-motion"
import NavBar from '../NavBar/page'
const HomePage = () => {
  const verticalVariants = {
    hidden: { opacity: 0, y: -50 }, // Initial state: hidden, moved up 50px
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }, // Visible state: fully visible, at the original y position
  };
  return (
    <div>
      <NavBar/>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={verticalVariants}
        style={{ width: '100%', height: '100vh', backgroundColor: '#f0f0f0' }}
      >
      <div className='bg-white w-screen bg-cover'>
        <Image className='ml-auto mr-auto flex pt-[150px] md:ml-auto md:mr-auto' draggable='false' src='/Black_Logo.png'
        width={150}
        height={150}
        />
        <div className='bg-white text-center pt-[80px] select-none'>
          <span className='md:text-6xl text-black font-semibold text-3xl text'>Welcome to Ajay Pradeep Portfolio</span><br/><br/>
          <span className='md:text-2xl text-xl'>Hr Recruiter | Training & Placement |Branding | Man Power Supply<br/>| Rotaract Leader| Insta Host</span>
        </div>
        <ResumeButton/><br/><br/>
        <div className='select-none bg-smoke-white'>
          <Image className='flex mr-auto ml-auto pt-5' draggable='false'
          src='/CubeImage.png'
          width={70}
          height={70}
          /><br/>
          <span className='w-full h-auto text-black md:text-xl pt-0 flex text-center items-center justify-center '>Experienced Founder with a demonstrated history of working in the human resources industry. Skilled in HR Consulting, Microsoft Word, Customer Relationship Management (CRM), Team Building, and Technical Recruiting. Strong business development professional with a Bachelor’s Degree focused in Business Administration and Management, General from Alpha Arts And Science College.</span>
        </div>
        <PictureOnTraining/><br/>
      </div>
      </motion.div>
    </div>
  )
}

export default HomePage