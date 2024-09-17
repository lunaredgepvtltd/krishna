import React from "react";
import krishna from "../assets/krishna.png";
import footerIcon from "../assets/footerIcon.png";
import "../App.css";
import footerLogo from "../assets/footerLogo.png";

export const Footer = () => {
  return (
    <div>
      <div class=" bg-[#0a2c0a] flex justify-around ">
        <span>
          <img
            src={footerIcon}
            className="hidden md:block shadow-bottom-yellow md:h-32 md:w-h-32 items-center mt-[50px] rounded-md"
          />
        </span>
        <div class=" w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div class="md:flex md:justify-between">
            <div class="mb-6 md:mb-0">
              <a href="#" class="flex items-center gap-7">
                <img src={footerLogo} className="" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">
                  <img
                    src={footerIcon}
                    className="md:hidden block shadow-bottom-yellow items-center rounded-md h-14 w-14"
                  />
                </span>
              </a>
            </div>
            <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 class="mb-6 text-sm font-semibold  uppercase  text-white">
                  Quick Links
                </h2>
                <ul class=" text-gray-400 font-medium ">
                  <li class="mb-4">
                    <a href="#" class="hover:underline">
                      Products
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:underline">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="mb-6 text-sm font-semibold  uppercase text-white">
                  Follow us
                </h2>
                <ul class=" text-gray-400 font-medium">
                  <li class="mb-4">
                    <a href="#" class="hover:underline ">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:underline">
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="mb-6 text-sm font-semibold uppercase text-white">
                  Legal
                </h2>
                <ul class=" text-gray-400 font-medium flex flex-col items-center">
                  <li class="mb-4">
                    <a href="#" class="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:underline">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto b lg:my-8" />
        </div>
      </div>
    </div>
  );
};
