import React from "react";
import Aboutherosection from "../_componenets/aboutherosection";

const page = () => {
  return (
    <div>
      <Aboutherosection />
      <div className=" bg-[#FEE4A3] p-5">
        <div className=" border-black border-2">
          <div className=" flex flex-row">
            <p className=" border-r-2 border-b-2 border-black w-full p-1">
              Qualification
            </p>
            <p className="border-b-2 border-black w-full p-1 text-xs sm:text-base">
              LLB,MBA
            </p>
          </div>
          <div className=" flex flex-row">
            <p className=" border-r-2 border-b-2 border-black w-full p-1">
              Profession
            </p>
            <p className="border-b-2 border-black w-full p-1 text-xs sm:text-base">
              Social Worker,Agriculturist,Business Man
            </p>
          </div>
          <div className=" flex flex-row">
            <p className=" border-r-2 border-b-2 border-black w-full p-1">
              Special Intrest
            </p>
            <p className="border-b-2 border-black w-full p-1 text-xs sm:text-base">
              Upliftment of underprviledged,health awarness,child
              education,working for disabled,cow conservation
            </p>
          </div>
          <div className=" flex flex-row">
            <p className=" border-r-2 border-b-2 border-black w-full p-1">
              Favourite Intrest
            </p>
            <p className="border-b-2 border-black w-full p-1 text-xs sm:text-base">
              Listening to classical and devational music
            </p>
          </div>
          <div className=" flex flex-row">
            <p className=" border-r-2 border-b-2 border-black w-full p-1">
              Sports Club
            </p>
            <p className="border-b-2 border-black w-full p-1  text-xs sm:text-base">
              Swimming,Badminton
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
