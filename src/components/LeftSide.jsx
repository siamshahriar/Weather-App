import React from "react";
import { FaWind } from "react-icons/fa";
import { IoWaterOutline } from "react-icons/io5";
import Day from "./Day";

const LeftSide = () => {
  return (
    <div className="col-span-3 p-8 flex flex-col justify-between">
      <div className="flex justify-between items-center font-bold text-xl text-gray-700">
        <span className="">Multan</span>
        <input
          type="text"
          className="font-normal text-center rounded-lg"
          placeholder="Search"
        />
        <div className="">
          <p>March26</p>

          <p className="text-end">2024</p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-3 text-[#696969]">
        <div>
          <p className="text-[200px] font-medium">20°</p>
          <p className="text-4xl font-medium text-center relative right-12 -mt-7">
            Cloudy
          </p>
        </div>
        <div className="text-xl font-medium relative top-8 right-8">
          <div className="flex items-center gap-4 mb-2">
            <FaWind />
            <p>6.1 mph</p>
          </div>
          <div className="flex items-center gap-4">
            <IoWaterOutline />
            <p>90%</p>
          </div>
        </div>
      </div>
      <div className="w-[70%] mx-auto flex justify-between items-center gap-5">
        <Day></Day>
        <Day></Day>
        <Day></Day>
        <Day></Day>
        <Day></Day>
        <Day></Day>
        <Day></Day>
      </div>
    </div>
  );
};

export default LeftSide;
