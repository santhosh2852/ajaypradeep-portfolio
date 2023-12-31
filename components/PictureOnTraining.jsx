'use client'
import React, { Component } from 'react'
import Image from 'next/image'
// Default theme
import '@splidejs/splide/css';


// or other themes
import '@splidejs/splide/css/skyblue';
import '@splidejs/splide/css/sea-green';


// or only core styles
import '@splidejs/splide/css/core';
const PictureOnTraining = () => {
  return (
      <div className='pt-2'>
        <h1 className='bg-[url(https://www.apple.com/careers/images/fy21/apple_jobs_gradient_final_Apple_Jobs_Gradients_Full_Large/desktop@2x.png)] bg-cover bg-clip-text text-transparent text-4xl font-semibold text-center pt-10 '>Picture On Training</h1>

      </div>
    );
}
export default PictureOnTraining