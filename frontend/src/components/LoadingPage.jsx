import React from "react";
import house from "../assets/Vector_logo.png";

const LoadingPage = () => {
  return (
    <div className="h-full overflow-hidden w-full fixed inset-0 bg-[#fff]">
      <div className="relative overflow-hidden  h-full flex justify-center items-center ">
        <img className="" src={house} alt="" />

        <div className="flex gap-5 flex-col  absolute bottom-48 ">
          <div className="flex gap-5">
            <div className="bg-[#5333ED] animate-fade-in1  opacity-0 w-8 rounded-lg h-8"rounded-lg ></div>
            <div className="bg-[#5333ED] animate-fade-in2 opacity-0  w-8 rounded-lg h-8"rounded-lg ></div>
          </div>
          <div className="flex gap-5">
            <div className="bg-[#5333ED] animate-fade-in3  opacity-0  w-8 rounded-lg h-8"rounded-lg ></div>
            <div className="bg-[#5333ED] animate-fade-in4  opacity-0   w-8 rounded-lg h-8"rounded-lg ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
