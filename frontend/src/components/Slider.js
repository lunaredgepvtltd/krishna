import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { HiMiniArrowLongLeft } from "react-icons/hi2";
import { HiMiniArrowLongRight } from "react-icons/hi2";
import fourth from '../assets/fourth.png'
import fifth from '../assets/fifth.png'
import '../App.css'
import { Link } from 'react-router-dom';
import krishna from '../assets/krishna.png'
import { useMediaQuery } from 'react-responsive';


const ImageSlider = () => {


  // left-arrow-function 
  const CustomPrevArrow = ({ onClick }) => {
    return (
      <div className="absolute left-96 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer group">
        <div className='border-2 border- border-white transition-all duration-300 rounded-full  group-hover:border-slate-400'>
          <button onClick={onClick} className="text-3xl m-3 text-white group-hover:text-gray-400 transition-all duration-300">
            <HiMiniArrowLongLeft />
          </button>
        </div>
      </div>
    );
  };

  // right-arrow-function 
  const CustomNextArrow = ({ onClick }) => {
    return (
      <div className="absolute right-96 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer group">
        <div className='border-2 border-white group-hover:border-slate-400 transition-all duration-300 rounded-full'>
          <button onClick={onClick} className="text-3xl m-3 text-white group-hover:text-slate-400 transition-all duration-300">
            <HiMiniArrowLongRight />
          </button>
        </div>
      </div>

    );
  };

  // slider-properties 
  const sliderSetting = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 100,
    fade: true, 
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    
  }

  const isSmallDevice = useMediaQuery({ query: '(max-width: 780px)' });

  return (
    <>
    {
      isSmallDevice ? 
      
      // this code will run for mobile-device 
      <div className='relative w-full bg-black h-[570px]'>
      <img src={fifth}  className=' w-full h-full' style={{ backgroundRepeat: 'no-repeat', backgroundSize: "contain" }} />
      <div className="absolute inset-0 flex  justify-center items-end  bg-black bg-opacity-50"></div>
      <div className='absolute top-[15%] left-5 flex flex-col justify-center items-center gap-10'>
      <img src={krishna} className='h-[180px] w-[320px]' style={{ backgroundRepeat: "no-repeat", backgroundSize: "cover" }} />
      <div className='bg-[#63bb63] w-[140px]  py-3 px-4 font-medium text-white cursor-pointer hover:bg-white hover:text-green-700 transition-all duration-300'><Link to={"/shop"}>Order Now</Link></div>
      </div>
      </div> 
      
      :
      
      // this code will run for small device 
      <div className='relative'>
      {/* slider  */}
      <Slider {...sliderSetting}  >
 
        {/* ****FIRST-IMAGE****  */}
        <div className=' overflow-hidden'>
          <img src={fourth} className=' slider-image w-full h-[600px] md:h-[770px]' style={{ backgroundRepeat: 'no-repeat', backgroundSize: "cover" }} />
        </div>

        {/* ****SECOND-IMAGE**** */}
        <div className=' overflow-hidden'>
          <img src={fifth} className='slider-image w-full h-[600px] md:h-[770px]' style={{ backgroundRepeat: 'no-repeat', backgroundSize: "cover" }} />
        </div>

      </Slider>
 
      {/* **black-cover over image** */}
      <div className="absolute inset-0 flex  justify-center items-end  bg-black bg-opacity-50"></div>

      {/* ***CONTENT-OVER-IMAGE***  */}
      <div className='absolute top-1/3 md:top-24 left-5 md:left-[20%] bottom-0 right-0 w-[70%] h-[40%] bg-orange-500 flex flex-col gap-20 justify-center items-center'>
       {/* **NAME-LOGO** */}
      <img src={krishna} className=' md:h-[420px] md:w-[750px] h-[180px] w-[320px]' style={{ backgroundRepeat: "no-repeat", backgroundSize: "cover" }} />
      {/* shop-now button  */}
      <div className='bg-[#63bb63] w-[140px] md:w-[180px] py md:py-5 px-4 md:px-8 font-medium text-white cursor-pointer hover:bg-white hover:text-green-700 transition-all duration-300'><Link to={"/shop"}>Order Now</Link></div>
      </div>
      
    </div>
    }
    </>
  )
}

export default ImageSlider