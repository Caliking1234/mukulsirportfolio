import React from "react";
import Image from "next/image";

const Aboutherosection = () => {
  return (
    <div
      className=" w-full min-h-screen p-5 object-contain flex flex-col sm:flex-row items-center justify-center gap-5 sm:justify-between"
      style={{
        backgroundImage: 'url("/images/aboutpagebg.jpg")',
        objectFit: "cover",
      }}
    >
      <div className=" w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] overflow-hidden rounded-full flex items-center justify-center">
        <Image alt="a" src={"/images/mukulsir2.jpg"} width={600} height={600} />
      </div>
      <div className="">
        <h1 className=" text-6xl font-bold text-black">ABOUT ME</h1>
        <p className=" text-lg text-black py-2">
          I,Mukul Pandey, born on December 30, 1980, in Gorakhpur, is the son of
          Mr. Mithlesh Kumar Pandey. I hold degrees in LLB and MBA, showcasing a
          strong educational background. With a diverse skill set, I am
          well-equipped for professional endeavors in law and business.
        </p>
        <p className=" text-black text-xs">
          I am a dynamic force—social worker, agriculturist, and businessman
        </p>
      </div>
    </div>
  );
};

export default Aboutherosection;
