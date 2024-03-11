import React from "react";
import { FaWind } from "react-icons/fa";
import { IoWaterOutline } from "react-icons/io5";
import Hourly from "./Hourly";

const RightSide = () => {
  return (
    <div className="p-6 bg-[#F6F6F6] flex flex-col justify-between">
      <div className="mt-3 text-2xl font-semibold text-center text-[#0F0F0F]">
        <p className="mb-4">Good Morning</p>
        <p>12:27 PM</p>
      </div>
      <div>
        <div className="flex justify-center items-center gap-3 text-[#696969]">
          <div>
            <p className="text-4xl font-medium">20°</p>
          </div>
          <div className="text-sm font-medium">
            <div className="flex items-center gap-4">
              <FaWind />
              <p>6.1 mph</p>
            </div>
            <div className="flex items-center gap-4">
              <IoWaterOutline />
              <p>90%</p>
            </div>
          </div>
        </div>
        <p className="text-center mt-3 mb-3">Feels like 19°</p>
        <p className="text-xl font-medium text-center text-[#696969]">Cloudy</p>
      </div>

      <div>
        <p className="text-center text-xl font-semibold mb-8 text-[#0F0F0F]">
          Hourly Forcast
        </p>
        <div className="grid grid-cols-3 gap-3">
          <Hourly></Hourly>
          <Hourly></Hourly>
          <Hourly></Hourly>
          <Hourly></Hourly>
          <Hourly></Hourly>
          <Hourly></Hourly>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
