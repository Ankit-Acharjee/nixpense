'use client'

import { SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import styles from "@/components/navbar/Navbar.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const [mobileMenu, setMobileMenu] = useState(false);
  const openMobileMenu = () => {
    setMobileMenu(true);
  };
  return (
    <div>
      <nav className="navbar bg-white border-gray-200 dark:bg-[#e2e2fe] shadow-lg">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        {mobileMenu && <ul className={`menuItems ${mobileMenu ? 'active' : ''}`}>
          <li className="menuItem" onClick={()=>router.push('/tickets')}>Your Tickets</li>
          <li className="menuItem" onClick={()=>router.push('/payment-details')}>Payment Details</li>
        </ul>}
          <div className="flex gap-2 items-center">
          {mobileMenu ? (
            <VscChromeClose
              onClick={() => {
                setMobileMenu(false);
              }}
            />
          ) : (
            <SlMenu onClick={openMobileMenu} />
          )}
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-[#232323]">
              NixSpense
            </span>
          </div>
          <div className="flex flex-row items-center gap-3">
            <SignedIn>
              <UserButton className={styles.customUserButton} />
            </SignedIn>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
