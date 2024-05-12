"use client";
import { sidebarLinks } from "@/constants";
import { useClerk, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "../ui/button";
// import { Tooltip } from "@nextui-org/react";

const Bottombar = () => {
  const pathname = usePathname();
  const { signOut } = useClerk();
  const router = useRouter();
  const { user } = useUser();

  return (
    <>
      {user && (
        <section className="bottombar sticky bottom-0 z-10 w-full rounded-t-3xl bg-glassmorphism p-4 backdrop-blur-lg xs:px-7 md:hidden">
          <div className="bottombar_container flex items-center justify-between gap-3 xs:gap-5">
            <Link
              key={sidebarLinks[0].label}
              href={sidebarLinks[0].route}
              className={`relative flex flex-col items-center gap-2 rounded-lg p-2 sm:flex-1 sm:px-2 sm:py-2.5 ${
                pathname === sidebarLinks[0].route ? "bg-activeLink" : ""
              }`}
            >
              <Image
                src={sidebarLinks[0].imgUrl}
                alt={sidebarLinks[0].label}
                width={24}
                height={24}
              />
            </Link>
            <Link
              key={sidebarLinks[1].label}
              href={sidebarLinks[1].route}
              className={`relative flex flex-col items-center gap-2 rounded-lg p-2 sm:flex-1 sm:px-2 sm:py-2.5 ${
                pathname === sidebarLinks[1].route ? "bg-activeLink" : ""
              }`}
            >
              <Image
                src={sidebarLinks[1].imgUrl}
                alt={sidebarLinks[1].label}
                width={24}
                height={24}
              />
            </Link>
            <Link
              key={sidebarLinks[2].label}
              href={sidebarLinks[2].route}
              className={`relative flex flex-col items-center gap-2 rounded-lg p-2 sm:flex-1 sm:px-2 sm:py-2.5 ${
                pathname === sidebarLinks[2].route ? "bg-activeLink" : ""
              }`}
            >
              <Image
                src={sidebarLinks[2].imgUrl}
                alt={sidebarLinks[2].label}
                width={24}
                height={24}
              />
            </Link>
            <Link
              key={sidebarLinks[3].label}
              href={sidebarLinks[3].route}
              className={`relative flex flex-col items-center gap-2 rounded-lg p-2 sm:flex-1 sm:px-2 sm:py-2.5 ${
                pathname === sidebarLinks[3].route ? "bg-activeLink" : ""
              }`}
            >
              <Image
                src={sidebarLinks[3].imgUrl}
                alt={sidebarLinks[3].label}
                width={24}
                height={24}
              />
            </Link>
            {/* <Button
              size={"icon"}
              onClick={() => signOut(() => router.push("/sign-in"))}
              key={sidebarLinks[3].label}
              className={`relative bg-transparent flex flex-col items-center gap-2 rounded-lg p-2 sm:flex-1 sm:px-2 sm:py-2.5 hover:bg-activeLink`}
            >
              <Image
                src={sidebarLinks[3].imgUrl}
                alt={sidebarLinks[3].label}
                width={24}
                height={24}
              />
            </Button> */}
            <Link
              key={sidebarLinks[4].label}
              href={sidebarLinks[4].route}
              className={`relative flex flex-col items-center gap-2 rounded-lg p-2 sm:flex-1 sm:px-2 sm:py-2.5 ${
                pathname === sidebarLinks[4].route ? "bg-activeLink" : ""
              }`}
            >
              <Image
                src={sidebarLinks[4].imgUrl}
                alt={sidebarLinks[4].label}
                width={24}
                height={24}
              />
            </Link>
          </div>
        </section>
      )}
    </>
  );
};

export default Bottombar;
