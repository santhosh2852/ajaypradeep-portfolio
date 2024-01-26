'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { motion } from 'framer-motion';
import './styles.css';
import { Pagination, Navigation } from 'swiper/modules';
import CountUp from 'react-countup';
const AboutUs = () => {
    const verticalVariants = {
        hidden: { opacity: 0, y: -50 }, // Initial state: hidden, moved up 50px
        visible: { opacity: 1, y: 0, transition: { duration: 1 } }, // Visible state: fully visible, at the original y position
      };
  return (
    <div className='bg-white select-none bg-cover w-screen'>
        <div className='pt-10 mx-auto'><br/><br/><br/><br/><br/><br/>
            <p className='text-center text-black font-black md:text-9xl text-7xl leading-10'>11 Years</p><br/><br/>
            <p className='text-center font-medium md:text-3xl text-xl'>Placement Trainer</p><br/>
            <div className='left-3 relative leading-4 mx-auto'>
                <p className=' text-3xl font-bold'>Education</p><br/>
                <div className='border-2 p-5 border-black shadow-2xl w-max mx-auto'>
                <li className=''>MBA Sree Sastha Institute Of<br className='md:hidden'/>Engineering And Technology 2014 Past Out</li><br/><br/>
                <li className=''>BBA From Alpha Arts And Science College<br className='md:hidden'/>2012 Past Out</li><br/><br/>
                <li className=''>Madras Christian College School<br className='md:hidden'/>2009 Past Out</li>
                </div>
            </div><br/>
            <motion.div
      initial={{ x: '100vw' }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 120 }}
    >
            <div>
                <p className='relative text-3xl left-5 font-bold'>Additional Qualifications</p><br/>
                <Swiper
                loop={true}
                navigation={true}
                modules={[Pagination, Navigation]}
                autoplay={{
                delay: 3000, // Set the delay between slides (in milliseconds)
                disableOnInteraction: false, // Continue autoplay even when the user interacts with slides
                }}
                className="mySwiper"
            >
                <SwiperSlide><p className='md:font-semibold md:text-2xl'>Diploma In NLP Training And Counseling</p></SwiperSlide>
                <SwiperSlide><p className='md:font-semibold md:text-2xl'>REBR & CBT</p></SwiperSlide>
                <SwiperSlide><p className='md:font-semibold md:text-2xl'>Diploma Counseling and Guideless</p></SwiperSlide>
                <SwiperSlide><p className='md:font-semibold md:text-2xl'>ABC Trainer</p></SwiperSlide>
            </Swiper>
            </div><br/><br/>
            </motion.div>
        </div>
        <motion.div
            initial="hidden"
            animate="visible"
            variants={verticalVariants}
            style={{ width: '100%', height: '100vh', backgroundColor: '#ffffff' }}
        >
            <div className='mx-auto justify-center items-center md:h-60 md:w-[50%] md:items-start md:justify-start md:mx-0 text-center border-2 p-5 shadow-2xl shadow-black w-60 bg-white'>
                <p className='font-bold md:text-3xl'>Total Program till now</p><br/>
                <CountUp start={0} end={49} duration={2} delay={2} className='font-bold md:text-3xl'/>
            </div><br className='md:hidden'/>
            <div className='mx-auto justify-center items-center md:h-60 md:w-[50%] md:items-end md:justify-end md:mx-0 text-center border-2 p-5 shadow-2xl shadow-black w-60 bg-white'>
                <p className='font-bold md:text-3xl'>Total Attended</p><br/>
                <CountUp start={0} end={1690} duration={2} delay={2} className='font-bold md:text-3xl'/>
            </div><br className='md:hidden'/>
            <div className='mx-auto justify-center items-center md:h-60 md:w-[50%] md:items-end md:justify-end md:mx-0 text-center border-2 p-5 shadow-2xl shadow-black w-60 bg-white'>
                <p className='font-bold md:text-3xl'>Total Number of Placement</p><br/>
                <CountUp start={0} end={2552} duration={2} delay={2} className='font-bold md:text-3xl'/>
            </div><br className='md:hidden'/>
            <div className='mx-auto justify-center items-center md:h-60 md:w-[50%] md:items-end md:justify-end md:mx-0 text-center border-2 p-5 shadow-2xl shadow-black w-60 bg-white'>
                <p className='font-bold md:text-3xl'>Total Number of Career Counselling</p><br/>
                <CountUp start={0} end={652} duration={2} delay={2} className='font-bold md:text-3xl'/>
            </div>
            <br/>
            <p className='font-black text-xl bg-white text-center'>Professional Snapshot</p>
            <Swiper loop={true} pagination={true} modules={[Pagination]} className="mySwiper text-black mx-auto flex">
                <SwiperSlide><p className='w-[400] h-[400] p-10 bg-white shadow-2xl border-black'>Founder of Get Aware Ngo & AJ Unlimited</p></SwiperSlide>
                <SwiperSlide><p className='w-[400] h-[400] p-10 bg-white shadow-2xl border-black'>Human Resources Generalist at shyams<br/>Hospitality  Form Jan 2020</p></SwiperSlide>
                <SwiperSlide><p className='w-[400] h-[400] p-10 bg-white shadow-2xl border-black'>Human Resource Executivein O2 Health<br/>Studio Form Jan 2019- Jan 2020</p></SwiperSlide>
                <SwiperSlide><p className='w-[400] h-[400] p-10 bg-white shadow-2xl border-black'>Assistant Manager Human Resource and Operation<br/>The Midas Touch From July 2017 To November 2018</p></SwiperSlide>
                <SwiperSlide><p className='w-[400] h-[400] p-10 bg-white shadow-2xl border-black'>Assistant Manager Human Resource and Operation<br/>Idec from April 2016 To June 2017</p></SwiperSlide>
                <SwiperSlide><p className='w-[400] h-[400] p-10 bg-white shadow-2xl border-black'>JUNE 2017 Junior Manager Human Resource &<br/>Admin atHi Volt Engineering Pvt September 2015 To March 2016</p></SwiperSlide>
                <SwiperSlide><p className='w-[400] h-[400] p-10 bg-white shadow-2xl border-black'>Human Resource Executive Optimize<br/>India Business Consultancy 2013 June to Apr 2015</p></SwiperSlide>
            </Swiper>
            </motion.div>
    </div>
  )
}

export default AboutUs