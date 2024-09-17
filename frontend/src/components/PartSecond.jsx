import React from "react";
import Wheat from "../assets/Wheat.jpg";
import chemical from "../assets/chemical.png";
import planting from "../assets/planting.png";
import { Link } from "react-router-dom";

const PartSecond = () => {
  return (
    <>
      <div className="flex flex-col gap-2 md:flex-row md:gap-0 bg-[#60be74] text-white h-[900px] md:-[701px] w-[100%]">
        {/* right side  */}
        <img src={Wheat} alt="" className="md:h-[100%] md:w-[45%] md:mx-0 mx-auto w-[90%] h-[30%]" />
        {/* left side   */}
        <div className="flex items-center justify-center md:w-[65%] w-[100%]">
          {/* main content div   */}
          <div className="flex flex-col gap-10 text-left md:w-[65%] w-[87%]">
            <h1 className="abril-fatface-regular md:text-4xl text-2xl text-center md:text-left">
              Wheat Products Only
            </h1>
            <p className="md:leading-9 leading-6 text-justify ">
              At Krishna Flour Mill, we specialize in high-quality wheat products
              tailored for the B2B market. From flour to semolina, our offerings
              are crafted with precision and care to meet the needs of
              professional businesses.
            </p>
            <hr className="opacity-[60%]"></hr>
            <div className="flex justify-around abril-fatface-regular">
              <div className="flex justify-center gap-4 items-center w-[30%]">
                <img src={chemical} className="h-10 w-10" />
                <p>
                  Skilled <br /> Farmers
                </p>
              </div>
              <div className="flex justify-center gap-4 items-center w-[30%]">
                <img src={planting} className="h-10 w-10" />
                <span>
                  Agricultural <br /> Solutions
                </span>
              </div>
            </div>
            <hr className="opacity-[60%]"></hr>

            <Link
              to={"/shop"}
              className="bg-black m-auto px-4 py-3 md:py-4 md:px-8 hover:bg-gray-600"
            >
              Order Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartSecond;
