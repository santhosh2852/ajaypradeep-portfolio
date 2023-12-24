import React from 'react'
import Image from 'next/image'
const FollowMe = () => {
  return (
    <>
    <h1 className='text-3xl text-black font-semibold pl-5 select-none'>Follow Me</h1><br/>
    <div className='flex select-none'>
        <Image src='/Black_Logo.png' className='pl-5' draggable={false}
        width={170}
        height={50}
        />
        <ul className=' text-black text-sm gap-10 flex text-center justify-center items-center ml-auto mr-auto cursor-pointer'>
          <li>Experience</li>
          <li>Awards</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className='list-none pr-10 cursor-pointer'>
          <a href='https://instagram.com/rtrajaypradeepaj?igshid=znhp2yq09ede' target='_blank'><Image draggable={false} src='/instagram.png'
            width={30}
            height={30}
          /></a><br/>
          <a href='https://www.linkedin.com/in/ajaypradeep-kk-49552b27' target='_blank'><Image draggable={false} src='/linkedin.png'
            width={30}
            height={30}
          /></a><br/>
          <a href='https://www.facebook.com/ajaypradeep.kk' target='_blank'><Image draggable={false} src='/facebook.png'
            width={32}
            height={32}
          /></a>
        </div>
    </div>
    </>
  )
}

export default FollowMe