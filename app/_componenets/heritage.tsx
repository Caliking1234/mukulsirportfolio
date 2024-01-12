import React from "react";
import Image from "next/image";
import styles from "./HoneycombPyramid.module.css";
import img1 from "../../public/images/heritage1.jpg";
import img2 from "../../public/images/heritage2.jpg";
import img3 from "../../public/images/heritage3.jpg";
import img4 from "../../public/images/heritage4.jpg";
import img5 from "../../public/images/heritage5.jpg";
import img6 from "../../public/images/heritage6.jpg";
import img7 from "../../public/images/heritage7.jpg";

const Heritage = () => {
  return (
    <div className="w-full py-5  px-5 sm:px-10">
      <h1 className=" px-2 py-1 border-b-black border-b-2 w-fit text-3xl uppercase ">
        Art & Heritage
      </h1>
      <div className="flex justify-center items-center">
        <div
          className={`${styles.pyramid} grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4`}
        >
          <div
            className={`${styles.hexagon} bg-blue-500 w-[280px] h-[280px] overflow-hidden flex items-center justify-center`}
          >
            <Image alt="a" src={img1} width={280} height={200} />
          </div>
          <div
            className={`${styles.hexagon} bg-green-500 w-[280px] h-[280px] overflow-hidden flex items-center justify-center`}
          >
            <Image alt="a" src={img2} width={280} height={200} />
          </div>
          <div
            className={`${styles.hexagon} bg-green-500 w-[280px] h-[280px] overflow-hidden flex items-center justify-center`}
          >
            <Image alt="a" src={img3} width={280} height={200} />
          </div>
          <div
            className={`${styles.hexagon} bg-green-500 w-[280px] h-[280px] overflow-hidden flex items-center justify-center`}
          >
            <Image alt="a" src={img4} width={280} height={200} />
          </div>
          <div
            className={`${styles.hexagon} bg-green-500 w-[280px] h-[280px] overflow-hidden flex items-center justify-center`}
          >
            <Image alt="a" src={img7} width={280} height={200} />
          </div>
          <div
            className={`${styles.hexagon} bg-green-500 w-[280px] h-[280px] overflow-hidden flex items-center justify-center`}
          >
            <Image alt="a" src={img6} width={280} height={200} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heritage;
