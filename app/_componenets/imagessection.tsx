import React from "react";
import Image from "next/image";

const Imagessection = () => {
  const data = [
    "With Shri Rameswar Teli Ji , Hon'ble Minister of State in the Ministery of Petroleum and Natural Gas of India",
    "Met and received his blessings with RSS senior campaigner and VHP leader Mr.Shiv Narayan Singh Ji",
    "Met and received his blessings with RSS senior campaigner and VHP leader Mr.Shiv Narayan Singh Ji",
    "Received INDIA EXCELLENCE AWARD 2023.Presented by Justice B. Chandra Kumar(High Court Andhra Pradesh Rt.)",
    "With Hon'ble Member of Parliament(LS-Sikar) Swami Sumedhanand Saraswati",
    "Blessed to have guidance of such great souls",
  ];
  return (
    <div className=" w-full flex flex-col text-left  px-5 sm:px-10">
      <h1 className=" text-3xl py-4 uppercase  text-left">
        Cherished memories close to my heart
      </h1>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 py-5 mx-auto items-center">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className=" w-[280px] sm:w-[400px] rounded-sm shadow-sm shadow-black overflow-hidden flex flex-col items-center"
          >
            <div className=" w-[280px] sm:w-[400px] h-[200px] ">
              <Image
                alt="img"
                src={`/images/img${index + 1}.jpg`}
                width={800}
                height={800}
                className=" h-[200px] aspect-auto"
              />
            </div>

            <div className=" p-2">
              <p className=" text-left text-sm">{data[index]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Imagessection;
