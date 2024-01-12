"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { HomeIcon, MenuIcon, Star, UserCircle } from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const router = usePathname();
  return (
    <>
      <div className=" absolute top-5 left-[50%] translate-x-[-50%] w-[400px] bg-white rounded-2xl shadow-md shadow-gray-500 p-2 hidden sm:flex flex-row items-center justify-around uppercase z-50">
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
      <div className=" block sm:hidden absolute top-5 left-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              <MenuIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <Link
              href={"/"}
              className={
                router === "/"
                  ? "bg-black w-full text-white transition-all duration-300 ease flex items-center justify-center py-1 rounded-sm"
                  : "bg-white w-full text-black transition-all duration-300 ease flex items-center justify-center py-1 rounded-sm"
              }
            >
              {router === "/" ? <HomeIcon /> : <span>HOME</span>}
            </Link>
            <DropdownMenuSeparator />
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
            <DropdownMenuSeparator />
            <Link
              href={"/achivements"}
              className={
                router === "/achivements"
                  ? "bg-black w-full text-white transition-all duration-300 ease flex items-center justify-center py-1 rounded-sm"
                  : "bg-white w-full text-black transition-all duration-300 ease flex items-center justify-center py-1 rounded-sm"
              }
            >
              {router === "/achivements" ? <Star /> : <span>Achivements</span>}
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
};

export default Navbar;
