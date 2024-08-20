import React from 'react'
import Wheat from "../assets/Wheat.jpg";
import chemical from "../assets/chemical.png"
import planting from "../assets/planting.png"
import { Link } from "react-router-dom";
const PartSecond = () => {
  return (
    <div className="flex bg-[#60be74] text-white">
        {/* right side  */}
        <img src={Wheat} alt="" className="h-[750px] w-[800px]"/>
        {/* left side   */}
        <div className="p-32 px-40">
           {/* main content div   */}
          <div className="flex flex-col gap-10 justify-start text-left ">            
            <h1 className=" abril-fatface-regular text-4xl text-left">
            Wheat Products Only
            </h1>
            <p className=" w-[600px] leading-9">
              At Krishna Flour Mill, we specialize in high-quality wheat products
              tailored for the B2B market. From flour to semolina, our offerings
              are crafted with precision and care to meet the needs of
              professional businesses.
            </p>
            <hr className="opacity-[60%]"></hr>
            <div className="flex justify-around abril-fatface-regular">
              <div className="flex gap-4 items-center">
                <img src={chemical} className="h-10 w-10"/>
                <p>Skilled <br></br>Farmers</p>
              </div>
              <div className="flex gap-4 items-center">
                <img src={planting} className="h-10 w-10" />
                <span>Agricultural <br></br>Solutions</span>
              </div>
            </div>
            <hr className="opacity-[60%]"></hr>
            <div>
             
            </div>
            <Link to={"/shop"} className="bg-black  m-auto  py-4 px-8 hover:bg-gray-600 ">Order Now</Link>
          </div>

        </div>
      </div>
  )
}

export default PartSecond