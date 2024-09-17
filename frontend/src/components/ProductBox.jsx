import React from "react";
import productWheatFlour from "../assets/productWheatFlour.png";
function ProductBox() {
  
  return (
    <div className="border w-[300px] h-auto rounded-b-md mx-auto my-10 pb-4 hover:shadow-custom-top hover:shadow-green-800">
      <h2 className="text-2xl bg-[#2c4d27] font-bold text-center text-white ">
        WHEAT
      </h2>
      <div className="relative flex flex-col items-center justify-center bg-[#f5f9f1]">
        <img
          src={productWheatFlour}
          alt="Wheat Flour Package"
          className="w-48 h-auto "
        />
        <span className="absolute -bottom-3 text-md px-2  text-center text-white bg-[#2c4d27] rounded-md">
          From: ₹140 - ₹220
        </span>
      </div>

      <div className=" w-[55%] mt-10 h-auto flex flex-col mx-auto gap-4">
        <div>
          <select name="ProductQuantity" id="" className="border border-black w-full">
            <option value=""> 5 Kg - ₹400</option>
            <option value=""> 10 Kg - ₹400</option>
            <option value=""> 26 Kg - ₹400</option>
            <option value=""> 50 Kg - ₹400</option>
          </select>
        </div>
        <div className="flex justify-between  h-auto w-auto">
          <select name="" id="" className="border border-black px-1">
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
            <option value="">4</option>
          </select>
          <button className="bg-[#2c4d27] hover:bg-green-600  text-white px-2 text-nowrap rounded-md ">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductBox;
