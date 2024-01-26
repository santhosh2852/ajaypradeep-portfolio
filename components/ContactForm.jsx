'use client'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import FollowMe from './FollowMe'
const ContactForm = () => {
  const input1Ref = useRef(null);
  const input2Ref = useRef(null);
  const input3Ref = useRef(null);
  const submitbutton = useRef(null);
  useEffect(() => {
    input1Ref.current.focus();
  }, []);
  const handleKeyPress = (e, nextRef) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevents the default behavior of the Enter key (form submission)
      nextRef.current.focus(); // Set focus on the next input field
    }
  };
  return (
    <div className='bg-white overflow-x-hidden w-screen bg-cover h-[100vh] mx-auto my-auto'><br/><br/><br/><br/><br/>
      <div className='md:shadow-2xl md:shadow-black md:border-black bg-white md:w-[50%] mx-auto my-auto rounded-xl p-5'>{/*This is for box shadow*/}
        <Image src='/Black_Logo.png' className='ml-auto mr-auto flex pt-[150px]'
        width={100}
        height={100}
        alt='Logo'
        /><br/><br/>
        <div className='mx-auto my-auto items-center justify-center text-center'>
        <input required type='text' ref={input1Ref} placeholder='Enter Your Name' className='border-[#1b1b1b] border-2 md:w-[300px] w-[300px] h-10 rounded text-center' onKeyDown={(e) => handleKeyPress(e, input2Ref)}/><br/><br/>
        <input required type='email' ref={input2Ref} placeholder='Enter Your Email Address' className='border-[#86868b] border-2 md:w-[300px] w-[300px] rounded text-black h-10 text-center' onKeyDown={(e) => handleKeyPress(e, input3Ref)}/><br/><br/>
        <textarea required type='text' ref={input3Ref} className='border-[#86868b] border-2 resize-none md:w-[300px] w-[300px] h-[15rem] text-center text-black rounded' placeholder='Message' onKeyDown={(e) => handleKeyPress(e, submitbutton)}></textarea><br/><br/>
        <button type='submit' ref={submitbutton} className='bg-black text-white w-[150px] rounded h-10'>Submit</button><br/>
      </div></div><br/><br/>    
      </div>
  )
}

export default ContactForm