import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HiMiniArrowLongLeft } from "react-icons/hi2";
import { HiMiniArrowLongRight } from "react-icons/hi2";
import fourth from "../assets/fourth.png";
import fifth from "../assets/fifth.png";
import "../App.css";
import { Link } from "react-router-dom";
import krishna from "../assets/krishna.png";


const ImageSlider = () => {

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
  };

  return (
    <>
      {
        // this code will run for small device
        <div className="relative">
          {/* slider  */}
          <Slider {...sliderSetting}>
            {/* ****FIRST-IMAGE****  */}
            <div className=" overflow-hidden">
              <img
                src={fourth}
                className=" slider-image w-full h-[600px] md:h-[770px]"
                style={{
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              />
            </div>

            {/* ****SECOND-IMAGE**** */}
            <div className=" overflow-hidden">
              <img
                src={fifth}
                className="slider-image w-full h-[600px] md:h-[770px]"
                style={{
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              />
            </div>
          </Slider>

          {/* **black-cover over image** */}
          <div className="absolute inset-0 w-full h-full flex  justify-center items-center bg-black bg-opacity-50">
            {/* ***CONTENT-OVER-IMAGE***  */}
            <div className=" w-[90%] lg:w-[70%] h-[50%] flex flex-col gap-20 justify-center items-center">
              {/* **NAME-LOGO** */}
              <img
                src={krishna}
                className=" w-[85%] lg:w-[80%] h-[70%] lg:h-[75%]"
                style={{
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              />
              {/* shop-now button  */}
              <div className="bg-[#63bb63] w-[140px] md:w-[180px] py-3 md:py-5 px-4 md:px-8 font-medium text-white cursor-pointer hover:bg-white hover:text-green-700 transition-all duration-300">
                <Link to={"/shop"}>Order Now</Link>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default ImageSlider;
