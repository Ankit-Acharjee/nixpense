"use client";

import { SignOutButton, SignedIn, UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import styles from "@/components/navbar/Navbar.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Avatar, AvatarImage } from "../ui/avatar";
import Link from "next/link";

const Navbar = () => {
  const router = useRouter();
  const [mobileMenu, setMobileMenu] = useState(false);
  const { user } = useUser();
  const profilePhoto = user?.imageUrl;

  const handleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <div>
      <nav className="sticky w-full z-20  border-gray-200 dark:bg-[#e2e2fe] shadow-lg bg-gradient-100">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <ul
            className={`absolute top-full inset-x-2 md:inset-x-4 lg:inset-x-8 mt-2 bg-white dark:bg-[#e2e2feb5] flex flex-col p-1 rounded border-t border-gray-200 shadow-md ${
              mobileMenu ? "animate-slideDown" : "hidden"
            }`}
          >
            <li
              className="py-2 px-4 text-gray-700 border-b-[3px] dark:text-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
              onClick={() => router.push("/profile")}
            >
              Your Profile
            </li>
            <li
              className="py-2 px-4 text-gray-700 border-b-[3px] dark:text-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
              onClick={() => router.push("/ticket")}
            >
              Your Tickets
            </li>
            <li
              className="py-2 px-4 text-gray-700 border-b-[3px] dark:text-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
              onClick={() => router.push("/payment-details")}
            >
              Payment Details
            </li>
            <li>
              <SignOutButton className='py-2 px-4 text-gray-700 dark:text-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer'>
                <button>Sign out</button>
              </SignOutButton>
            </li>
            
          </ul>
          <div className="flex gap-2 items-center">
            {/* {mobileMenu ? (
              <VscChromeClose
                onClick={() => {
                  setMobileMenu(false);
                }}
              />
            ) : (
              <SlMenu
                onClick={() => {
                  setMobileMenu(true);
                }}
              />
            )} */}
            <span onClick={()=>router.push('/')} className="self-center text-2xl font-semibold whitespace-nowrap dark:text-[#232323]">
              NiXpense
            </span>
          </div>
          <div className="flex flex-row items-center gap-3 ">
            <Avatar onClick={handleMenu}>
              {profilePhoto ? (
                <AvatarImage src={profilePhoto} />
              ) : (
                <AvatarImage src={"/assets/user.png"} />
              )}
            </Avatar>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
