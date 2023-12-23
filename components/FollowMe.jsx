import React from 'react'
import Image from 'next/image'
const FollowMe = () => {
  return (
    <>
    <h1 className='text-3xl text-black font-semibold pl-5 select-none'>Follow Me</h1><br/>
    <div className='flex select-none'>
        <Image src='/Black_Logo.png' className='pl-5' draggable={false}
        width={150}
        height={50}
        />
        <ul className=' text-black text-sm gap-10 flex text-center justify-center items-center ml-auto mr-auto'>
          <li>Experience</li>
          <li>Awards</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className='list-none pr-10'>
          <Image src='/instagram.png'
            width={30}
            height={30}
          />
          <Image src='/instagram.png'
            width={30}
            height={30}
          />
          <Image src='/instagram.png'
            width={30}
            height={30}
          />
          <Image src='/instagram.png'
            width={30}
            height={30}
          />
        </div>
    </div>
    </>
  )
}

export default FollowMe