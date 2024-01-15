import { ArrowRightFromLine } from "lucide-react";
import React from "react";

const page = () => {
  const data = [
    "Received Honorary Doctorate in Financial Managmnet and consulting",
    "Won India Excellence Award 2023",
    "Member of RSS since 1996",
    "Assisted senior RSS Pracharaks during many of their Prayas across country and organising route plan and ensuring its execution",
    "Member Hindu yuva Vahini since 1998",
    "Member UP Apradh Nirodhak Samiti since 1999",
    "National General Secretary-Mission New India",
    "National General Secretary-Narendra Modi Vichar Manch",
  ];
  return (
    <div
      className=" p-5 min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: 'url("/images/achivementspages.png")',
        objectFit: "cover",
      }}
    >
      <div className=" border-black border-2 w-full glassmorphism-container bg-opacity-20 backdrop-filter backdrop-blur-md min-h-[50vh]">
        <h1 className=" p-2 text-3xl">Position Held/Achivements</h1>
        <div className=" px-5 gap-y-5 flex flex-col">
          {data.map((str: string, index: number) => (
            <div key={index} className=" px-2 text-xl flex flex-row gap-x-1">
              <ArrowRightFromLine />
              {str}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
