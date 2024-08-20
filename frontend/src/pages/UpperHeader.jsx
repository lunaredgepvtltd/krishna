import React ,{ useState }from "react";
import { CgMail } from "react-icons/cg";
import { FaPhoneVolume } from "react-icons/fa6";
import logo from "../assets/logo.png";
import { IoMenu } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import shop from "../assets/shop.png";
import { Link } from 'react-router-dom';
import logoSm from "../assets/logoSm.png"

export const UpperHeader = () => {
  return (
    <div className="bg-white w-full md:h-auto h-[92px] shadow-md ">
      <div className="flex justify-between items-center md:px-10 md:h-[120px] px-3  w-full ">
        {/******************************1st-element(logo)*****************************/}
      
          <img src={logo} className="hidden md:block h-[160px] w-[300px] ml-20 "/>

                    {/* logo for small device    */}
          <img src={logoSm} className="md:hidden block h-[105px] w-[170px] "/>
       

            
        <div className="md:hidden flex items-center gap-4">
               {/* ******add_to_cart****** */}
               <span>
              <img src={shop} className="h-6 w-6" />
            </span>

        {/* *********************menu_bar for small device****************/}
        <button className="opacity-[70%] ">
          <IoMenu className=" h-9 w-9 font-extralight" />
        </button>
        </div>
        {/****************************2nd-element*************************************/}

        <div className=" md:flex md:justify-between  items-center gap-8 hidden">

              
                    {/* *******contact_column********* */}
            <div className="flex gap-4 items-center">
              <span>
                <CgMail className="h-8 w-8 text-green-600" />
              </span>
              <ul className="flex flex-col items-start">
                <li className="text-gray-600">Email</li>
                <li className="hover:text-green-500 cursor-pointer transition-all duration-400">
                  <a href="mailto:info@krishna.com"> info@krishna.com</a>
  
                </li>
              </ul>
              {/********line_seprator*********/}
              <span className="text-5xl text-gray-200 mb-2">|</span>
            </div>

            {/*********contact_column************/}
            <div className="flex gap-4 items-center">
              <span>
                <FaPhoneVolume className="h-6 w-6 text-green-600" />
              </span>

              <ul className="flex flex-col items-start">
                <li className="text-gray-600">Phone</li>
                <li className="hover:text-green-500 cursor-pointer transition-all duration-400">
                  <a href="tel:+911234567891">1234567891</a>
                </li>
              </ul>
            </div>
            {/*****line_seprator******/}
            <span className="text-5xl text-gray-200 mb-2">|</span>

            {/* login and regitor column */}
            <div className="flex gap-2 items-center">
              <span className="text-2xl text-green-600 hover:text-gray-500 cursor-pointer">
                <FaUserCircle />
              </span>
              <span className="cursor-pointer">
                <Link to={'/login'} className="text-sm text-gray-500 hover:text-green-600 transition-all duration-300">
                  Login
                </Link>{" "}
                /{" "}
                <Link to={'/register'} className="text-sm text-gray-500 hover:text-green-600 transition-all duration-300">
                  Register
                </Link>
              </span>
            </div>
        </div>
      </div>
        {/*****lower-header********/}
        <div className=' hidden md:flex items-center md:h-20 bg-gray-100 md:py-3 shadow-inner'>
     
     {/* right-part  */}
     <ul className='w-[92%] flex gap-12 justify-center items-center md:ml-28 h-full'>
      <li className='lower-header'><Link to={"/"}>Home</Link></li>
      <li className='lower-header'><Link to={"/aboutus"}>About</Link></li>
      <li className='lower-header'><Link to={"/shop"}>Shop</Link></li>
      <li className='lower-header'><Link to={"/contact"}>Contact</Link></li>
     </ul>

         {/* ******add_to_cart****** */}
        <span className='w-[8%]'>
          <img src={shop} className="h-7 w-7" />
        </span>
  </div>
    </div>
  );
};
