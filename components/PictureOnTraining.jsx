'use client'
import React, { useRef, useState } from 'react'
import Image from 'next/image'
// Default theme
// import '@splidejs/splide/css';


// or other themes
// import '@splidejs/splide/css/skyblue';
// import '@splidejs/splide/css/sea-green';


// or only core styles
// import '@splidejs/splide/css/core';
// import { Splide, SplideSlide } from '@splidejs/react-splide';
// import '@splidejs/splide/dist/css/splide.min.css';
// import '@splidejs/splide/dist/css/themes/splide-default.min.css';
// Default theme
// import '@splidejs/splide/css';


// // or other themes
// import '@splidejs/splide/css/skyblue';
// import '@splidejs/splide/css/sea-green';


// // or only core styles
// import '@splidejs/splide/css/core';
// import { Splide,SplideTrack, SplideSlide } from '@splidejs/react-splide';
// // Default theme
// import '@splidejs/react-splide/css';


// // or other themes
// import '@splidejs/react-splide/css/skyblue';
// import '@splidejs/react-splide/css/sea-green';


// or only core styles
// import '@splidejs/react-splide/css/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';
import { Pagination, Navigation } from 'swiper/modules';
const PictureOnTraining = () => {
  return (
      <div className='pt-2 bg-white'>
        <h1 className='bg-[url(https://www.apple.com/careers/images/fy21/apple_jobs_gradient_final_Apple_Jobs_Gradients_Full_Large/desktop@2x.png)] bg-cover bg-clip-text text-transparent text-4xl font-semibold text-center pt-10 pb-10'>Picture On Training</h1>
        {/* <Splide options={splideOptions} className="absolute" > */}
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
        <SwiperSlide>
        <Image src="pic1.jpg" alt="Slide 1" 
        width={60}
        height={60}
        />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="pic2.jpg" alt="Slide 2"
          width={60}
          height={60}
          />
        </SwiperSlide>
        <SwiperSlide>
        <Image src="pic3.jfif" alt="Slide 2"
        width={60}
        height={60}
        />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="pic4.jfif" alt="Slide 2"
          width={60}
          height={60}
          />
        </SwiperSlide>
      </Swiper>
      </div>
    );
}
export default PictureOnTraining