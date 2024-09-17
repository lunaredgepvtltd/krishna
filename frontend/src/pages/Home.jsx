import React, { useState } from "react";
import ImageSlider from "../components/Slider.js";
import PartSecond from "../components/PartSecond.jsx";
import { motion } from 'framer-motion'; 
import ProductBox from "../components/ProductBox.jsx";



const Home = () => {
  return (
    <>
    <motion.div 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }}   
    exit={{ opacity: 0 }}    
    transition={{ duration: 0.5 }}  >
      <div className="w-full h-auto bg-gray-100 shadow-inner  overflow-hidden">
        

        {/*******Slider****** */}
        <div>
          <ImageSlider />
        </div>
      </div>
      {/* **************2nd Part************* */}
      <PartSecond/>

      <div className="flex flex-wrap w-[90%] mx-auto">
      <ProductBox/>
      <ProductBox/>
      <ProductBox/>
      <ProductBox/>
      
      </div>

      
      </motion.div>
    </>
  );
};

export default Home;
