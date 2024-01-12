import React from "react";
import Image from "next/image";

const Herosection = () => {
  return (
    <div
      className=" w-full min-h-screen p-5 object-contain flex flex-col sm:flex-row-reverse items-center justify-center gap-5 sm:justify-between"
      style={{
        backgroundImage: 'url("/images/background.jpg")',
        objectFit: "cover",
      }}
    >
      <Image
        alt="img"
        src={"/images/herosectionimage.png"}
        width={500}
        height={500}
      />
      <div className=" text-wrap">
        <h1 className=" text-6xl font-bold text-white">
          HI I&apos;M Mukul Pandey
        </h1>
        <p className=" text-lg text-white py-2">
          I am a dynamic force—social worker, agriculturist, and businessman
        </p>
        <p className=" text-white text-xs">
          I am a soulful and art-inspired individual, embracing the beauty of
          spirituality. My heart beats with a profound belief in uplifting the
          underprivileged and dedicating myself to giving back to society,
          pouring my best into making a positive impact
        </p>
      </div>
    </div>
  );
};

export default Herosection;
