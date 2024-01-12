"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { HomeIcon, Star, UserCircle } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const router = usePathname();
  return (
    <div className=" absolute top-5 left-[50%] translate-x-[-50%] w-[400px] bg-white rounded-2xl shadow-md shadow-black p-2 hidden sm:flex flex-row items-center justify-around uppercase z-50">
      <Link
        href={"/"}
        className={
          router === "/"
            ? "bg-black w-full text-white transition-all duration-300 ease flex items-center justify-center py-1 rounded-sm rounded-l-2xl"
            : "bg-white w-full text-black transition-all duration-300 ease flex items-center justify-center py-1 rounded-sm rounded-l-2xl"
        }
      >
        {router === "/" ? <HomeIcon /> : <span>HOME</span>}
      </Link>
      <Link
        href={"/about"}
        className={
          router === "/about"
            ? "bg-black w-full text-white transition-all duration-300 ease flex items-center justify-center py-1 rounded-sm"
            : "bg-white w-full text-black transition-all duration-300 ease flex items-center justify-center py-1 rounded-sm"
        }
      >
        {router === "/about" ? <UserCircle /> : <span>About</span>}
      </Link>
      <Link
        href={"/achivements"}
        className={
          router === "/achivements"
            ? "bg-black w-full text-white transition-all duration-300 ease flex items-center justify-center py-1 rounded-sm rounded-r-2xl"
            : "bg-white w-full text-black transition-all duration-300 ease flex items-center justify-center py-1 rounded-sm rounded-r-2xl"
        }
      >
        {router === "/achivements" ? <Star /> : <span>Achivements</span>}
      </Link>
    </div>
  );
};

export default Navbar;
