'use client'
import React, { useRef, useState } from 'react';
import NavBar from '../NavBar/page';
import { motion } from "framer-motion"
const ExperiencePage = () => {
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
      <div className="bg-gray-100 p-4 relative top-28">
      <div className="max-w-2xl mx-auto">
        <div className="relative wrap overflow-hidden p-10 h-full">
          <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border" style={{ left: '50%' }}></div>
          <div className="mb-8 flex justify-between items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="order-1 w-5/12 px-4 py-2 bg-gray-800 text-white rounded-lg shadow-xl">
            The event done for the Employees of Bharath Swift Logistics Pvt Ltd Topic on Drug Abuse and prevention
            </div>
          </div>
          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="order-1 w-5/12 px-4 py-2 bg-gray-800 text-white rounded-lg shadow-xl">
            Geriatric Care For Functionaries Of Old Age Homesorganised By Heritage Fountation of Regional Resource And Training Centre- Hyderabad And Madras School Of Social Work. Sponsored By Nisd Topic Active listening Verbal/ Non Vaebal Communication
            </div>
          </div>
          <div className="mb-8 flex justify-between items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="order-1 w-5/12 px-4 py-2 bg-gray-800 text-white rounded-lg shadow-xl">
            The event organized for Alpha Arts And Science College over 300 Students were participated 
            </div>
          </div>
          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="order-1 w-5/12 px-4 py-2 bg-gray-800 text-white rounded-lg shadow-xl">
            Event Organized By RotaractClub Of TSN College, For 50 Students
            </div>
          </div>
          <div className="mb-8 flex justify-between items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="order-1 w-5/12 px-4 py-2 bg-gray-800 text-white rounded-lg shadow-xl">
            Self-Motivational Training For The Families Of Fishermen 
            </div>
          </div>
          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="order-1 w-5/12 px-4 py-2 bg-gray-800 text-white rounded-lg shadow-xl">
            Event organized for the mba students at sastha college for 50 Students
            </div>
          </div>
          <div className="mb-8 flex justify-between items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="order-1 w-5/12 px-4 py-2 bg-gray-800 text-white rounded-lg shadow-xl">
            Motivational Training For Cobblers Students class from  7th To 9th 
            </div>
          </div>
          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="order-1 w-5/12 px-4 py-2 bg-gray-800 text-white rounded-lg shadow-xl">
            Self-Motivational Training For The Families Of Fishermen Students classes from 7th To 9th
            </div>
          </div>
          <div className="mb-8 flex justify-between items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="order-1 w-5/12 px-4 py-2 bg-gray-800 text-white rounded-lg shadow-xl">
            Organized By Vizhiththezhu,For Slum Students Of classes 7th To 9th
            </div>
          </div>
          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="order-1 w-5/12 px-4 py-2 bg-gray-800 text-white rounded-lg shadow-xl">
            Motivational Training for Drug Addicts by Turning Point Foundation
            </div>
          </div>
          <div className="mb-8 flex justify-between items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="order-1 w-5/12 px-4 py-2 bg-gray-800 text-white rounded-lg shadow-xl">
            PD Development Classes at Corporation Government Higher School for Classes 6th To 9th
            </div>
          </div>
          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="order-1 w-5/12 px-4 py-2 bg-gray-800 text-white rounded-lg shadow-xl">
            Self-Empowering Classes for Cobbler Kids of Classes from 7thTo 9th.
            </div>
          </div>
          <div className="mb-8 flex justify-between items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="order-1 w-5/12 px-4 py-2 bg-gray-800 text-white rounded-lg shadow-xl">
            Awareness Campaigns On Regular Basis in Various Places about the Current Issues in And Around Chennai.
            </div>
          </div>
          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="order-1 w-5/12 px-4 py-2 bg-gray-800 text-white rounded-lg shadow-xl">
            Event organized for Sri Lakshmi college of Arts and Science,Kallakurichi for 150 BBA students 
            </div>
          </div>
          <div className="mb-8 flex justify-between items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="order-1 w-5/12 px-4 py-2 bg-gray-800 text-white rounded-lg shadow-xl">
            Summer camp held in the year 2016 for the class 6th to 12th at corporation government higher secondary school.
            </div>
          </div>
          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="order-1 w-5/12 px-4 py-2 bg-gray-800 text-white rounded-lg shadow-xl">
            Tranning for Rajeswari vedachalam government college topic on interview skill session 
            </div>
          </div>
          <div className="mb-8 flex justify-between items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="order-1 w-5/12 px-4 py-2 bg-gray-800 text-white rounded-lg shadow-xl">
            Traning for AVIT college topic based on  placement training 
            </div>
          </div>
          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="order-1 w-5/12 px-4 py-2 bg-gray-800 text-white rounded-lg shadow-xl">
            CM Annamalai arts and science college topic on interview skills
            </div>
          </div>
          <div className="mb-8 flex justify-between items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="order-1 w-5/12 px-4 py-2 bg-gray-800 text-white rounded-lg shadow-xl">
            ES subramaniam memorial arts and science college podhattorpet, thiruvalluvar (interview skills)
            </div>
          </div>
          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="order-1 w-5/12 px-4 py-2 bg-gray-800 text-white rounded-lg shadow-xl">
            L.N Government college ponneri (topic-Banking)
            </div>
          </div>
          <div className="mb-8 flex justify-between items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="order-1 w-5/12 px-4 py-2 bg-gray-800 text-white rounded-lg shadow-xl">
            Sree sastha arts and science college (topic -Banking)
            </div>
          </div>
          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="order-1 w-5/12 px-4 py-2 bg-gray-800 text-white rounded-lg shadow-xl">
            Sri malolan college of arts and science (Topic-Banking)
            </div>
          </div>
          <div className="mb-8 flex justify-between items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="order-1 w-5/12 px-4 py-2 bg-gray-800 text-white rounded-lg shadow-xl">
            Sri muthukukumaran arts and science college (topic-Banking)
            </div>
          </div>
          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="order-1 w-5/12 px-4 py-2 bg-gray-800 text-white rounded-lg shadow-xl">
            Panchayat union primary school,vazhuthalambedu(ice breaking)
            </div>
          </div>
          <div className="mb-8 flex justify-between items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="order-1 w-5/12 px-4 py-2 bg-gray-800 text-white rounded-lg shadow-xl">
            Sridevi arts and science college (Topic-Banking)
            </div>
          </div>
          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="order-1 w-5/12 px-4 py-2 bg-gray-800 text-white rounded-lg shadow-xl">
            Rungta college of science and technology, chattisgarh (topic -placement training)
            </div>
          </div>
          <div className="mb-8 flex justify-between items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="order-1 w-5/12 px-4 py-2 bg-gray-800 text-white rounded-lg shadow-xl">
            Career guidance program for srilanka refugess students
            </div>
          </div>
          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="order-1 w-5/12 px-4 py-2 bg-gray-800 text-white rounded-lg shadow-xl">
            St. Joseph college Chennai (topic - placement training)
            </div>
          </div>
          <div className="mb-8 flex justify-between items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="order-1 w-5/12 px-4 py-2 bg-gray-800 text-white rounded-lg shadow-xl">
            Presidency college (Autonomous),Chennaitopic on soft skill based training.
            </div>
          </div>
          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="order-1 w-5/12 px-4 py-2 bg-gray-800 text-white rounded-lg shadow-xl">
            Anna University Chennai event done with the topic team management
            </div>
          </div>
          <div className="mb-8 flex justify-between items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="order-1 w-5/12 px-4 py-2 bg-gray-800 text-white rounded-lg shadow-xl">
            Event for SRM University topic on HR mock interview
            </div>
          </div>
          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="order-1 w-5/12 px-4 py-2 bg-gray-800 text-white rounded-lg shadow-xl">
            Training given to Jaya college topic deal with work place ethics and dressing etiquettes
            </div>
          </div>
          <div className="mb-8 flex justify-between items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="order-1 w-5/12 px-4 py-2 bg-gray-800 text-white rounded-lg shadow-xl">
            Importance of garbage segregation taught to St John&apos;s matric higher secondary school,Alwarthirunagar.
            </div>
          </div>
          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="order-1 w-5/12 px-4 py-2 bg-gray-800 text-white rounded-lg shadow-xl">
            Training given to Hindustan college on resume building
            </div>
          </div>
          <div className="mb-8 flex justify-between items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="order-1 w-5/12 px-4 py-2 bg-gray-800 text-white rounded-lg shadow-xl">
            Training given to Bharathi institute,Thiruvannamalai on soft skills 
            </div>
          </div>
          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="order-1 w-5/12 px-4 py-2 bg-gray-800 text-white rounded-lg shadow-xl">
            Soft skill training given to GITAM University Hyderabad.
            </div>
          </div>
          <div className="mb-8 flex justify-between items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="order-1 w-5/12 px-4 py-2 bg-gray-800 text-white rounded-lg shadow-xl">
            Soft skill training given to Andhra Loyola College, Vijayawada
            </div>
          </div>
          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="order-1 w-5/12 px-4 py-2 bg-gray-800 text-white rounded-lg shadow-xl">
            Activity based coaching given to proto D Employees.
            </div>
          </div>

        </div>
      </div>
    </div>
    </motion.div>
    </div>
  )
}

export default ExperiencePage