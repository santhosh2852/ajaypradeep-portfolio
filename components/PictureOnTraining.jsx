'use client'
import React, { Component } from 'react'
import Image from 'next/image'
// Default theme
// import '@splidejs/splide/css';


// or other themes
// import '@splidejs/splide/css/skyblue';
// import '@splidejs/splide/css/sea-green';


// or only core styles
// import '@splidejs/splide/css/core';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
const PictureOnTraining = () => {
  const splideOptions = {
    type: 'slide', // Choose between 'slide' or 'loop' or other options
    perPage: 1, // Number of slides per view
    pagination: false, // Show pagination or not
    // Add more options as needed based on Splide.js documentation
    loop: true, // Enables continuous loop
    autoplay: true, // Enable autoplay
    interval: 5000, // Set interval in milliseconds (5 seconds in this case)
    arrows: false, // Enable arrows
  };
  // useEffect(() => {
  //   const splide = new Splide('.splide', splideOptions);

  //   splide.on('moved', () => {
  //     const { index, length } = splide.Components.Elements;
  //     if (index === length - 1) {
  //       // Reached the last slide, move to the first slide to create a loop
  //       splide.go(0);
  //     }
  //   });

  //   splide.mount();

  //   return () => {
  //     splide.destroy(); // Cleanup when component unmounts
  //   };
  // }, []);
  return (
      <div className='pt-2'>
        {/* <h1 className='bg-[url(https://www.apple.com/careers/images/fy21/apple_jobs_gradient_final_Apple_Jobs_Gradients_Full_Large/desktop@2x.png)] bg-cover bg-clip-text text-transparent text-4xl font-semibold text-center pt-10 '>Picture On Training</h1> */}
        <Splide options={splideOptions} className="absolute" >
          <SplideSlide>
            <img src="pic1.jpg" alt="Slide 1" />
          </SplideSlide>
          <SplideSlide>
            <img src="pic2.jpg" alt="Slide 2" />
          </SplideSlide>
          <SplideSlide>
            <img src="pic3.jfif" alt="Slide 2" />
          </SplideSlide>
          <SplideSlide>
            <img src="pic4.jfif" alt="Slide 2" />
          </SplideSlide>
          {/* Add more SplideSlides for additional slides */}
        </Splide>
      </div>
    );
}
export default PictureOnTraining