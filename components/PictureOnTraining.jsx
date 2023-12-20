'use client'
import React, { Component } from 'react'
import Slider from "react-slick";
import Image from 'next/image'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
export default class SimpleSlider extends Component{
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
  return (
    <>
    <div className='select-none'>
        <h1 className='bg-apple-jobs text-4xl font-semibold text-center pt-10 '>Picture On Training</h1>
    </div>
    <div className='pt-10'>
        <Slider {...settings}>
          <div>
            <Image className='ml-auto mr-auto flex overflow-y-hidden'
            src="/pic1.jpg"
            width={500}
            height={500}
            />
          </div>
          <div>
            <Image className='ml-auto mr-auto flex overflow-y-hidden'
            src="/pic2.jpg"
            width={500}
            height={500}
            />
          </div>
          <div>
            <Image className='ml-auto mr-auto flex overflow-y-hidden'
            src="/pic3.jfif"
            width={500}
            height={500}
            />
          </div>
          <div>
            <Image className='ml-auto mr-auto flex overflow-y-hidden'
            src="/pic4.jfif"
            width={500}
            height={500}
            />
          </div>
        </Slider>
      </div>
    </>
    );
  }
}

