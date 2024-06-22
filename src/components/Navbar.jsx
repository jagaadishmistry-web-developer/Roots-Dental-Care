"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import Logo from "../../public/logo.png";

const NavBar = () => {
  const [dropDownOpen, setDropDownOpen] = useState(false);

  const mEnter = () => {
    setDropDownOpen(true);
  };
  const mLeave = () => {
    setDropDownOpen(false);
  };
  const [nav, setNav] = useState(false);
  const pathname = usePathname();
  const isActive = pathname.startsWith("/home");
  const isActive1 = pathname.startsWith("/team");
  const isActive2 = pathname.startsWith("/services");
  const isActive3 = pathname.startsWith("/contact");

  return (
    <div className="container mx-auto px-4 flex items-center h-[100px]">
      <Link className="grow" href="/home">
        <Image src={Logo} alt="image" className="" />
      </Link>
      <div className="grow lg:flex hidden xl:gap-12 gap-8 font-medium xl:text-[20px] text-[16px]">
        <Link
          href="/home"
          className={isActive ? "text-[#06692B]" : "text-black"}>
          Home
        </Link>
        <Link
          href="/team"
          className={isActive1 ? "text-[#06692B]" : "text-black"}>
          Our Team
        </Link>
        <Link
          href={"/services"}
          className={isActive2 ? "text-[#06692B]" : "text-black"}>
          Services
        </Link>
        <div
          className="hover-dropdown group block"
          onMouseEnter={mEnter}
          onMouseLeave={mLeave}>
          <div className="flex gap-1 items-center">
            <Link
              href={"/contact"}
              className={isActive3 ? "text-[#06692B]" : "text-black"}>
              Contact Us
            </Link>
            <span className={isActive3 ? "text-[#06692B]" : "text-black"}>
              <IoMdArrowDropdown className="text-xl group-hover:rotate-180" />
            </span>
          </div>
          {dropDownOpen && (
            <Link
              className="absolute bg-white border px-3 w-40 py-4"
              href={"/contact2"}>
              Contact Us 2
            </Link>
          )}
        </div>
      </div>
      <div className="pr-8">
        <button className="grow-0 text-white bg-[#06692B] h-[50px] w-[177px] lg:flex items-center justify-center rounded-lg hidden">
          Schedule A Visit
        </button>
      </div>
      {/* nomile navbar  */}
      <div onClick={() => setNav(!nav)} className="cursor-pointer lg:hidden">
        {nav ? <FaXmark className="w-8 h-7" /> : <FaBars className="w-8 h-7" />}
      </div>
      {nav && (
        <div className="absolute md:top-[175px] top-[100px] left-0 right-0 h-[100vh] bg-white">
          <div className="flex flex-col gap-3 px-6 text-xl font-medium pt-10 items-center">
            <Link
              onClick={() => setNav(false)}
              href="/"
              className={` ${
                router.pathname === `/` ? `text-[#06692B]` : `text-black`
              }`}>
              Home
            </Link>
            <Link
              onClick={() => setNav(false)}
              href="/team"
              className={` ${
                router.pathname === `/team` ? `text-[#06692B]` : `text-black`
              }`}>
              Our Team
            </Link>
            <Link
              onClick={() => setNav(false)}
              href={"/services"}
              className={` ${
                router.pathname == `/services`
                  ? `text-[#06692B] `
                  : `text-black`
              }`}>
              Services
            </Link>
            <div
              className="hover-dropdown group block"
              onMouseEnter={mEnter}
              onMouseLeave={mLeave}>
              <div className="flex gap-1 items-center">
                <Link
                  onClick={() => setNav(false)}
                  href={"/contact"}
                  className={` ${
                    router.pathname === `/contact`
                      ? `text-[#06692B] `
                      : `text-black`
                  }`}>
                  Contact Us
                </Link>
                <span
                  className={` ${
                    router.pathname === `/contact`
                      ? `text-[#06692B]`
                      : `text-black`
                  }`}>
                  <IoMdArrowDropdown className="text-xl group-hover:rotate-180" />
                </span>
              </div>
              {dropDownOpen && (
                <Link
                  onClick={() => setNav(false)}
                  className="absolute bg-white border px-3 w-40 py-4"
                  href={"/contact2"}>
                  Contact Us 2
                </Link>
              )}
            </div>
            <br />
            <button className="text-white bg-[#06692B] h-[50px] w-[177px] items-center justify-center rounded-lg">
              Schedule A Visit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default NavBar;
