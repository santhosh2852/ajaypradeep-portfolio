'use client'
import React from 'react'
import { motion } from "framer-motion"
import NavBar from '../NavBar/page'
const AwardPage = () => {
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
      <div className='w-screen bg-white bg-cover h-[100vh]'>
          <div className='md:block hidden text-center justify-center items-center bg-white mx-auto'><br/><br/><br/><br/><br/><br/>
          <div className="flex gap-28 items-center justify-center text-center bg-white">
            <p className='w-52 border-black p-5 border-2 shadow-2xl bg-white shadow-black'>Got First Prize in Science Project in Madras Christian College School</p>
            <p className='w-52 border-black p-5 border-2 shadow-2xl bg-white shadow-black'>Started my own Stationery Shop in college 2011-12</p>
            <p className='w-52 border-black p-5 border-2 shadow-2xl bg-white shadow-black'>Swami Vivekananda Award From Vizhiththezhu NGO</p>
          </div><br/><br/>
          <div className="flex gap-28 items-center justify-center text-center bg-white">
            <p className='w-52 border-black p-5 border-2 shadow-2xl bg-white shadow-black'>Got First Prize in Corporate Show, Mime, Business Quiz and Ad Zap Events</p>
            <p className='w-52 border-black p-5 border-2 shadow-2xl bg-white shadow-black'>President for Entrepreneur Development Cell in Alpha Arts and Science College 2010-11</p>
            <p className='w-52 border-black p-5 border-2 shadow-2xl bg-white shadow-black'>House Captain in Alpha Arts and Science College 2011-12</p>
          </div><br/><br/>
          <div className="flex gap-28 items-center justify-center text-center bg-white">
            <p className='w-52 border-black p-5 border-2 shadow-2xl bg-white shadow-black'>Participated in Various Management Events 2009-14</p>
            <p className='w-52 border-black p-5 border-2 shadow-2xl bg-white shadow-black'>Active Member NCCand School Band inMadras Christian College School 2003-09</p>
            <p className='w-52 border-black p-5 border-2 shadow-2xl bg-white shadow-black'>Started My Won Stationery Shop inAlpha Arts and Science College 2011-12</p>
          </div><br/><br/>
          <div className="flex gap-28 items-center justify-center text-center bg-white">
            <p className='w-52 border-black p-5 border-2 shadow-2xl bg-white shadow-black'>Active Member in Rotaract Club inGreen Galaxy 2015-18</p>
            <p className='w-52 border-black p-5 border-2 shadow-2xl bg-white shadow-black'>Got First Prize in Science Project in Madras Christian College School</p>
            <p className='w-52 border-black p-5 border-2 shadow-2xl bg-white shadow-black'>Rotaract Awards Out Standing Community Project 2017 (Dreams) Has Chair Man</p>
          </div><br/><br/>
          <div className="flex gap-28 items-center justify-center text-center bg-white">
            <p className='w-52 border-black p-5 border-2 shadow-2xl bg-white shadow-black'>Rotaract Awards Out Standing Professional Project 2018 (Get Aware Job Fair) Has Chair Man</p>
            <p className='w-52 border-black p-5 border-2 shadow-2xl bg-white shadow-black'>Rotaract Awards Out Standing Community Project 2019 (No Food Waste) Has Chair Man</p>
            <p className='w-52 border-black p-5 border-2 shadow-2xl bg-white shadow-black'>Active Member inRotaract Club inMadras Mount 2018-19</p>
          </div><br/><br/>
          <div className="flex gap-28 items-center justify-center text-center bg-white">
              <p className='w-52 border-black p-5 border-2 shadow-2xl bg-white shadow-black'>Associate International Service Director 2019-20 RID 3232</p>
              <p className='w-52 border-black p-5 border-2 shadow-2xl bg-white shadow-black'>Professional Service DirectorRotaract Club in Madras Mount 2019-20</p>
              <p className='w-52 border-black p-5 border-2 shadow-2xl bg-white shadow-black'>Star of Rotaract for the year 19-20, RID 3232.</p>
            </div><br/><br/>
          </div>
          <div className='md:hidden bg-white block text-center w-60 justify-center items-center mx-auto select-none'><br/><br/><br/><br/><br/><br/>
              <p className='border-2 border-black bg-white shadow-2xl p-5'>Got First Prize in Science Project in Madras Christian College School</p><br/><br/>
              <p className='border-2 border-black bg-white shadow-2xl p-5'>Started my own Stationery Shop in<br/>college 2011-12</p><br/><br/>
              <p className='border-2 border-black bg-white shadow-2xl p-5'>Swami Vivekananda Award <br/>From Vizhiththezhu NGO</p><br/><br/>
              <p className='border-2 border-black bg-white shadow-2xl p-5'>Got First Prize in Corporate Show, Mime, Business Quiz and Ad Zap Events</p><br/><br/>
              <p className='border-2 border-black bg-white shadow-2xl p-5'>President forEntrepreneur Development Cell in Alpha Arts and Science College 2010-11</p><br/><br/>
              <p className='border-2 border-black bg-white shadow-2xl p-5'>House Captain in Alpha Arts and Science College 2011-12</p><br/><br/>
              <p className='border-2 border-black bg-white shadow-2xl p-5'>Participated in Various Management Events 2009-14</p><br/><br/>
              <p className='border-2 border-black bg-white shadow-2xl p-5'>Started My Won Stationery Shop inAlpha Arts and Science College 2011-12</p><br/><br/>
              <p className='border-2 border-black bg-white shadow-2xl p-5'>Active Member NCCand School Band inMadras Christian College School 2003-09</p><br/><br/>
              <p className='border-2 border-black bg-white shadow-2xl p-5'>Active Member in Rotaract Club inGreen Galaxy 2015-18</p><br/><br/>
              <p className='border-2 border-black bg-white shadow-2xl p-5'>Rotaract Awards Out Standing Community Project 2017 (Dreams) Has Chair Man</p><br/><br/>
              <p className='border-2 border-black bg-white shadow-2xl p-5'>Rotaract Awards Out Standing Professional Project 2018 (Get Aware Job Fair) Has Chair Man</p><br/><br/>
              <p className='border-2 border-black bg-white shadow-2xl p-5'>Rotaract Awards Out Standing Community Project 2019 (No Food Waste) Has Chair Man</p><br/><br/>
              <p className='border-2 border-black bg-white shadow-2xl p-5'>Active Member inRotaract Club inMadras Mount 2018-19</p><br/><br/>
              <p className='border-2 border-black bg-white shadow-2xl p-5'>Associate International Service Director 2019-20 RID 3232</p><br/><br/>
              <p className='border-2 border-black bg-white shadow-2xl p-5'>Professional Service DirectorRotaract Club<br/>in Madras Mount 2019-20</p><br/><br/>
              <p className='border-2 border-black bg-white shadow-2xl p-5'>Star of Rotaract for the<br/>year 19-20, RID 3232.</p><br/><br/>
          </div>
      </div>
    </motion.div>
    </div>
  )
}

export default AwardPage