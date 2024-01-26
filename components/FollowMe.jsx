'use client'
import React from 'react'
import Image from 'next/image'
const FollowMe = () => {
  return (
    <div className='bg-white w-screen bg-cover'>
    <h1 className='md:text-3xl text-black font-semibold pl-5 select-none text-2xl'>Follow Me</h1><br/>
    <Image src='/Black_Logo.png' className='block md:hidden pl-5 ml-auto mr-auto' draggable='false'
          width={60}
          height={50}
      /><br/>
    <div className='flex select-none'>
        <Image src='/Black_Logo.png' className='hidden md:block pl-5 ' draggable='false'
          width={160}
          height={10}
        />
        <ul className=' text-black text-sm gap-10 flex text-center justify-center items-center ml-auto mr-auto cursor-pointer'>
          <li>Experience</li>
          <li>Awards</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className='hidden md:block list-none pr-10 cursor-pointer'>
          <a href='https://instagram.com/rtrajaypradeepaj?igshid=znhp2yq09ede' target='_blank'><Image draggable='false' src='/instagram.png'
            width={30}
            height={30}
          /></a><br/>
          <a href='https://www.linkedin.com/in/ajaypradeep-kk-49552b27' target='_blank'><Image draggable='false' src='/linkedin.png'
            width={30}
            height={30}
          /></a><br/>
          <a href='https://www.facebook.com/ajaypradeep.kk' target='_blank'><Image draggable='false' src='/facebook.png'
            width={32}
            height={32}
          /></a>
        </div>
    </div>
    <br/><div className='flex gap-5 md:hidden list-none pr-10 cursor-pointer ml-auto mr-auto justify-center items-center'>
          <a href='https://instagram.com/rtrajaypradeepaj?igshid=znhp2yq09ede' target='_blank'><Image draggable='false' src='/instagram.png'
            width={30}
            height={30}
          /></a><br/>
          <a href='https://www.linkedin.com/in/ajaypradeep-kk-49552b27' target='_blank'><Image draggable='false' src='/linkedin.png'
            width={30}
            height={30}
          /></a><br/>
          <a href='https://www.facebook.com/ajaypradeep.kk' target='_blank'><Image draggable='false' src='/facebook.png'
            width={32}
            height={32}
          /></a><br/><br/>
        </div>
    </div>
  )
}

export default FollowMe