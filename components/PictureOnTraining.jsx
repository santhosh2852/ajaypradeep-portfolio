'use client'
import React, { Component } from 'react'
import Image from 'next/image'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// const PictureOnTraining = () => {
//   return (
//     <div className="slide-container">
//       <div className='select-none'>
//         <h1 className='bg-[url(https://www.apple.com/careers/images/fy21/apple_jobs_gradient_final_Apple_Jobs_Gradients_Full_Large/desktop@2x.png)] bg-clip-text text-transparent text-4xl font-semibold text-center pt-10 '>Picture On Training</h1>
//       </div>
//     </div>
//   )
// }

// export default PictureOnTraining
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}
export default class CustomArrows extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div className='pt-2'>
        <h1 className='bg-[url(https://www.apple.com/careers/images/fy21/apple_jobs_gradient_final_Apple_Jobs_Gradients_Full_Large/desktop@2x.png)] bg-clip-text text-transparent text-4xl font-semibold text-center pt-10 '>Picture On Training</h1>
        <Slider {...settings} className='pt-10'>
          <div>
            <Image src='/pic1.jpg' className='mr-auto ml-auto flex'
              height={500}
              width={500}
            />
          </div>
          <div>
            <Image src='/pic2.jpg' className='mr-auto ml-auto flex'
              height={500}
              width={500}
            />
          </div>
          <div>
            <Image src='/pic3.jfif' className='mr-auto ml-auto flex'
              height={500}
              width={500}
            />
          </div>
          <div>
            <Image src='/pic4.jfif' className='mr-auto ml-auto flex'
              height={500}
              width={500}
            />
          </div>
        </Slider>
      </div>
    );
  }
}