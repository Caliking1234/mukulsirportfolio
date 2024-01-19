"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { HomeIcon, MenuIcon, Star, UserCircle } from "lucide-react";

const Footer = () => {
  const router = usePathname();

  return (
    <div className="w-full flex py-5 px-2 flex-row bg-gray-500 items-center justify-center gap-2">
      <div className=" w-full flex flex-col gap-2">
        <Link
          href={"/"}
          className={
            router === "/"
              ? "bg-black w-full text-white transition-all duration-300 ease flex items-center justify-center py-1 rounded-sm "
              : "bg-white w-full text-black transition-all duration-300 ease flex items-center justify-center py-1 rounded-sm "
          }
        >
          <span>HOME</span>
        </Link>
        <Link
          href={"/about"}
          className={
            router === "/about"
              ? "bg-black w-full text-white transition-all duration-300 ease flex items-center justify-center py-1 rounded-sm"
              : "bg-white w-full text-black transition-all duration-300 ease flex items-center justify-center py-1 rounded-sm"
          }
        >
          <span>About</span>
        </Link>
        <Link
          href={"/achivements"}
          className={
            router === "/achivements"
              ? "bg-black w-full text-white transition-all duration-300 ease flex items-center justify-center py-1 rounded-sm"
              : "bg-white w-full text-black transition-all duration-300 ease flex items-center justify-center py-1 rounded-sm"
          }
        >
          <span>Achivements</span>
        </Link>
      </div>
      <div className=" w-full flex flex-col gap-2">
        <Link
          href={
            "https://www.instagram.com/drmukulpandeyofficial_mp?igsh=MWwxaGJ5YTlmeDFyOA=="
          }
          className={
            router ===
            "https://www.instagram.com/drmukulpandeyofficial_mp?igsh=MWwxaGJ5YTlmeDFyOA=="
              ? "bg-black w-full text-white transition-all duration-300 ease flex items-center justify-center py-1 rounded-sm"
              : "bg-white w-full text-black transition-all duration-300 ease flex items-center justify-center py-1 rounded-sm"
          }
        >
          <span>Instagram</span>
        </Link>
        <Link
          href={"https://x.com/drmukulpandeymp?t=kJz4mycWnpYSv37BIyIgjw&s=08"}
          className={
            router ===
            "https://x.com/drmukulpandeymp?t=kJz4mycWnpYSv37BIyIgjw&s=08"
              ? "bg-black w-full text-white transition-all duration-300 ease flex items-center justify-center py-1 rounded-sm"
              : "bg-white w-full text-black transition-all duration-300 ease flex items-center justify-center py-1 rounded-sm "
          }
        >
          <span>Twitter</span>
        </Link>
        <div
          className={
            router ===
            "https://x.com/drmukulpandeymp?t=kJz4mycWnpYSv37BIyIgjw&s=08"
              ? "bg-black w-full text-white transition-all duration-300 ease flex items-center justify-center py-1 rounded-sm"
              : "bg-white w-full text-black transition-all duration-300 ease flex items-center justify-center py-1 rounded-sm "
          }
        >
          <span className=" text-sm sm:text-base">mpgkp81@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
