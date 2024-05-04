/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Link from "next/link";

import PaddedContainer from "./PaddedContainer";
import useWidth from "@/hooks/useWidth";
// import FlagTR from "../icons/FlagTR";
// import FlagBg from "../icons/FlagBg";
// import FlagGb from "../icons/FlagGb";
// import FlagRu from "../icons/FlagRu";
// import FlagSa from "../icons/FlagSa";
// import {
//   Dropdown,
//   DropdownTrigger,
//   DropdownMenu,
//   DropdownSection,
//   DropdownItem,
//   Button,
// } from "@nextui-org/react";

export default function Navbar() {
  const activeRoute = usePathname();

  const [navHidden, setNavHidden] = useState(false);
  const { width } = useWidth();
  const navItems = [
    { name: "home", route: "/" },
    { name: "aboutUs", route: "/about-us" },
    { name: "treatments", route: "/tedaviler" },
    { name: "team", route: "/ekibimiz" },
    { name: "blog", route: "/blog" },
    { name: "contact", route: "/iletisim" },
  ];
  const handleNavVisibility = () => {
    let currentPos = window.scrollY;
    window.onscroll = () => {
      const freshPos = window.scrollY;
      if (freshPos > currentPos && freshPos > 200) {
        setNavHidden(true);
      } else {
        if (freshPos < 200) setNavHidden(false);
      }
      currentPos = freshPos;
    };
  };

  useEffect(() => {
    if (width > 768) {
      setMobileNavOpen(false);
    }
  }, [width]);

  useEffect(() => {
    handleNavVisibility();
  }, []);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  return (
    //Web Navbar
    <>
      <nav
        //   className={`
        //   ${   navHidden ? "  -translate-y-[90px]" : "-translate-y-[0]"}
        //   animate-fade-in transition-all duration-500 z-[10]
        // bg-primary-white  flex items-center w-full max-md:hidden`}
        className={`
      animate-fade-in transition-all duration-500 relative z-[15]
    bg-primary-white  flex items-center w-full max-md:hidden`}
      >
        <div className="w-full flex-col justify-between ">
          <div className="flex w-full gap-[30%] pt-[1rem] bg-white pb-[0.475rem] border-b-[1.2px] border-b-[#C8C8C8]">
            <PaddedContainer className={"flex gap-[18.7rem] items-center "}>
              <Link href="/">
                <Image
                  unoptimized={true}
                  className="w-[7.4rem]  cursor-pointer"
                  src="/images/owl-icon.png "
                  alt="/"
                  width={148}
                  height={66}
                />
              </Link>
              <div className="flex gap-[4.8rem]">
                <a href="#" className="flex  items-center gap-[0.5rem]">
                  <img src="/svg/clock.svg" alt="Clock Image" />
                  <span className="text-[0.9rem] font-bold whitespace-nowrap ">
                    cal saat
                    <span className="text-[1em] font-bold text-primary-bright">
                      {` 9:00-18:00`}
                    </span>
                  </span>
                </a>
                <a href="#" className="flex  items-center gap-[0.5rem]">
                  <img src="/svg/phone-alt.svg" alt="Clock Image" />
                  <span className="text-[0.9rem] font-bold whitespace-nowrap underline">
                    0541880 50 50
                  </span>
                </a>
                <a href="#" className="flex  items-center gap-[0.5rem]">
                  <img src="/svg/location.svg" alt="Clock Image" />
                  <span className="text-[0.9rem] font-bold whitespace-nowrap ">
                    asd
                  </span>
                </a>
              </div>
            </PaddedContainer>
          </div>
          <div className="bg-white  ">
            <PaddedContainer className={" pt-[2rem] pb-[1.6rem]"}>
              <ul className="flex items-center gap-[2rem] whitespace-nowrap">
                {navItems.map((item) => (
                  <li key={item.name}>
                    {item.route ? (
                      <Link
                        href={item.route}
                        className={`${
                          item.route === `/${activeRoute}`
                            ? "text-primary-bright "
                            : ""
                        } ${
                          item.inactive
                            ? "pointer-events-none cursor-default"
                            : ""
                        } font-bold text-[1.rem]`}
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <span className="font-bold" onClick={item.onClick}>
                        dsa
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </PaddedContainer>
          </div>
        </div>
      </nav>
      {/* Mobile Navbar */}
      {/* <nav
        className={`${
          navHidden && !mobileNavOpen
            ? "-translate-y-[100px]"
            : "-translate-y-[0]"
        }  transition-all  animation-fade-in duration-500 h-[80px]  z-[10] fixed top-0
      bg-primary-white flex items-center shadow-sm w-full md:hidden`}
      >
        <PaddedContainer></PaddedContainer>
      </nav> */}
    </>
  );
}
