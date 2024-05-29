"use client";

import { useState } from "react";
import Link from "next/link";
import { RiCloseLine } from "react-icons/ri";
import { HiOutlineMenu } from "react-icons/hi";
import { useThemeContext } from "../context/themeContext";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { links } from "@/constants";

// Navlinks function for useablity
const NavLinks = ({
  handleClick,
  type,
}: {
  handleClick?: () => void;
  type: "desktop" | "mobile";
}) => {
  const pathname = usePathname();
  const genre = pathname.split("/")[1];

  //   looping through Linkes array

  return (
    <div className="mt-10">
      {links.map((item) => {
        const isActive =
          pathname === item.to || pathname.startsWith(`${item.to}/`);

        return (
          <Link
            aria-label={item.name}
            className={cn(
              `flex gap-2 p-1 sm:justify-center lg:justify-start items-center  my-8 text-sm font-medium  hover:text-teal-500 dark:hover:text-teal-400 text-black dark:text-white transition duration-200 ${
                item.name === "Discover" && genre === "movies"
                  ? "[&>*]:text-white bg-teal-600 rounded-[4px]"
                  : ""
              }
          `,
              {
                " [&>*]:text-white bg-teal-600 rounded-[4px]": isActive,
              }
            )}
            href={item.to}
            key={item.name}
            onClick={handleClick && handleClick}
          >
            <h2 className="text-2xl font-bold"> {item.icon}</h2>
            <p className={type === "desktop" ? "max-lg:hidden" : ""}>
              {item.name}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { darkMode, toggleDarkMode } = useThemeContext();

  return (
    <>
      {/* desktop header */}
      <section className="sticky top-0 left-0 h-screen w-fit flex flex-col justify-between max-sm:hidden lg:w-[150px] py-10 px-4 bg-white dark:bg-gradient-to-br  dark:from-[#222] dark:to-black rounded-tr-[50px] rounded-br-[50px] gap-20 text-black dark:text-white shadow-[0_5px_25px_0_rgba(0,0,0,0.9)]  shadow-black/60 dark:shadow-none z-50">
        <h1 className="text-2xl max-lg:text-xl mx-auto ">
          <span className={"text-teal-600 dark:text-teal-500 font-pacifico"}>
            Movie
          </span>
          fy
        </h1>
        <NavLinks type="desktop" />

        <div
          className="flex items-center gap-4 cursor-pointer"
          onClick={toggleDarkMode}
        >
          <button
            className="theme-toggle--button mx-auto "
            aria-label="Toggle Theme"
          >
            <span className={`shape ${darkMode ? "moon" : "sun"}`}></span>
            <span className="rays--container">
              <span className="ray"></span>
              <span className="ray"></span>
              <span className="ray"></span>
              <span className="ray"></span>
            </span>
          </button>
          <p className="flex-1 max-lg:hidden">Theme</p>
        </div>
      </section>
      {/* mobile header */}
      <div className="fixed container py-4 flex justify-between items-center sm:hidden top-0 left-0  z-[20] w-full bg-gradient-to-br dark:from-teal-900/50 dark:backdrop-blur-lg dark:to-[#222]  text-black shadow-xl shadow-black/40 dark:shadow-none dark:text-white bg-white dark:bg-white/0 ">
        <h1 className="text-2xl">
          <Link href="/" aria-label="Home">
            <span className="text-teal-600 dark:text-teal-500 font-pacifico cursor-pointer">
              Movie
            </span>
            fy
          </Link>
        </h1>
        {mobileMenuOpen ? (
          // close button
          <RiCloseLine
            onClick={() => setMobileMenuOpen(false)}
            className="w-6 h-6 mr-2 dark:text-white text-black"
          />
        ) : (
          // burger button
          <HiOutlineMenu
            onClick={() => setMobileMenuOpen(true)}
            className="w-6 h-6 mr-2 dark:text-white text-black"
          />
        )}
      </div>
      <div
        // toggled nav
        className={`fixed top-0 h-[100dvh] w-[calc(46%+28px)] bg-gradient-to-tl from-white/10 to-white dark:to-[#222]  backdrop-blur-lg z-[21]  py-6 px-3 md:hidden transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? "left-0" : "-left-full"
        } `}
      >
        <div className="flex flex-col  justify-between h-full">
          <NavLinks
            type="mobile"
            handleClick={() => setMobileMenuOpen(false)}
          />
          <div
            className="flex items-center gap-4 cursor-pointer  bottom-0 left-32 text-black dark:text-white"
            onClick={toggleDarkMode}
          >
            <button
              className="theme-toggle--button mx-auto"
              aria-label="Toggle Theme"
            >
              <span className={`shape ${darkMode ? "moon" : "sun"}`}></span>
              <span className="rays--container">
                <span className="ray"></span>
                <span className="ray"></span>
                <span className="ray"></span>
                <span className="ray"></span>
              </span>
            </button>
            <p className="flex-1">Theme</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
