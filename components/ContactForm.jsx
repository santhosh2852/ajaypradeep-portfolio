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
    <div className='bg-white'>
      <div className='w-[450px] h-[800px] bg-white shadow-background-box mx-auto'>{/*This is for box shadow*/}
        <Image src='/Black_Logo.png' className='pt-[150px] mx-auto items-center justify-center flex'
        width={100}
        height={100}
        alt='Logo'
        /><br/><br/>
        <div className='mx-auto items-center justify-center text-center'>
        <input required type='text' ref={input1Ref} placeholder='Enter Your Name' className='border-[#86868b] border-2 w-[400px] h-10 rounded text-center' onKeyDown={(e) => handleKeyPress(e, input2Ref)}/><br/><br/>
        <input required type='email' ref={input2Ref} placeholder='Enter Your Email Address' className='border-[#86868b] border-2 w-[400px] rounded text-black h-10 text-center' onKeyDown={(e) => handleKeyPress(e, input3Ref)}/><br/><br/>
        <textarea required type='text' ref={input3Ref} className='border-[#86868b] border-2 resize-none w-[400px] h-[15rem] text-center text-black rounded' placeholder='Message' onKeyDown={(e) => handleKeyPress(e, submitbutton)}></textarea><br/><br/>
        <button type='submit' ref={submitbutton} className='bg-black text-white w-[150px] rounded h-10'>Submit</button>
      </div></div><br/><br/>
      <FollowMe/>
    </div>
  )
}

export default ContactForm