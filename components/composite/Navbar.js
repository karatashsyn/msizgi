/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import { usePathname, useParams, useRouter } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import PaddedContainer from "./PaddedContainer";
import useWidth from "@/hooks/useWidth";
import { useTranslation } from "react-i18next";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";
import { Button } from "@nextui-org/button";
import FlagTR from "../icons/FlagTR";
import FlagBg from "../icons/FlagBg";
import FlagGb from "../icons/FlagGb";
import FlagRu from "../icons/FlagRu";
import FlagSa from "../icons/FlagSa";
import MenuIcon from "../icons/MenuIcon";

export default function Navbar() {
  const { locale } = useParams();
  const fullRoute = usePathname();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const route = usePathname();

  const { width } = useWidth();
  const { t } = useTranslation("common");
  const navItems = [
    { name: "home", route: "/" },
    { name: "aboutUs", route: "/hakkimizda" },
    { name: "treatments", route: "/tedaviler" },
    { name: "team", route: "/ekibimiz" },
    { name: "blog", route: "/blog" },
    { name: "contact", route: "/iletisim" },
  ];
  const router = useRouter();
  const selectedLang = router.locale;

  useEffect(() => {
    if (width > 768) {
      setMobileNavOpen(false);
    }
  }, [width]);

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  const activeRoute = useMemo(() => {
    return fullRoute === "/" + locale || !fullRoute
      ? "/"
      : fullRoute.split("/").pop();
  }, [fullRoute, locale]);

  return (
    //Web Navbar
    <>
      <nav
        className={`
      animate-fade-in transition-all duration-500 relative z-[15]
    bg-primary-white  flex items-center w-full max-sm:hidden`}
      >
        <div className="w-full flex-col justify-between ">
          <div className="flex w-full gap-[30%] pt-[1rem] bg-white pb-[0.475rem] border-b-[1.2px] border-b-[#C8C8C8]">
            <PaddedContainer className={"flex gap-[18.7rem] items-center "}>
              <Link href="/">
                <Image
                  unoptimized={true}
                  className="w-[7.4rem] min-w-[6rem]  cursor-pointer"
                  src="/images/navsmall.png "
                  alt="/"
                  width={148}
                  height={66}
                />
              </Link>
              <div className="flex gap-[4.8rem]">
                <a className="flex  pointer-events-none cursor-default items-center gap-[0.5rem]">
                  <img src="/svg/clock.svg" alt="Clock Image" />
                  <span className="text-[0.9rem] font-bold whitespace-nowrap ">
                    {t("navbar-days") + ": "}
                    <span className="text-[1em] font-bold text-primary-bright">
                      {t("navbar-hours")}
                    </span>
                  </span>
                </a>
                <a
                  href="tel:5418805050"
                  className="flex  items-center gap-[0.5rem]"
                >
                  <img src="/svg/phone-alt.svg" alt="Clock Image" />
                  <span className="text-[0.9rem] font-bold whitespace-nowrap underline">
                    {t("navbar-phone")}
                  </span>
                </a>
                <a
                  target="_blank"
                  href="https://www.google.com/maps/place/Mehmet+Said+%C4%B0ZG%C4%B0+Di%C5%9F+Klini%C4%9Fi/@40.9926593,28.8451086,17z/data=!3m1!4b1!4m6!3m5!1s0x14cabb959e47b669:0xb4d1b2ae2db02431!8m2!3d40.9926593!4d28.8476835!16s%2Fg%2F11hz2jp71b?entry=ttu"
                  className="flex  items-center gap-[0.5rem]"
                >
                  <img src="/svg/location.svg" alt="Clock Image" />
                  <span className="text-[0.9rem] font-bold whitespace-nowrap ">
                    {t("navbar-address")}
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
                          item.route.slice(1, item.route.length) === activeRoute
                            ? "text-primary-bright "
                            : ""
                        } ${
                          item.inactive
                            ? "pointer-events-none cursor-default"
                            : ""
                        } font-bold text-[1.rem]`}
                      >
                        {t(`navbar-${item.name}`)}
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
      <nav
        className={`transition-all pb-3  animation-fade-in duration-500 h-[60px] z-[100] fixed top-0
       flex  items-center  w-full sm:hidden`}
      >
        <PaddedContainer className={""}>
          <div className="flex w-full">
            <div className="flex justify-between ">
              <div className="fixed z-[100] max-w-0  w-full h-[60px] flex justify-between">
                <div
                  onClick={toggleMobileNav}
                  className={`${
                    !mobileNavOpen && route !== "/" && route !== "/hakkimizda"
                      ? " invert"
                      : ""
                  } ${
                    mobileNavOpen ? "" : ""
                  } transition-opacity duration-500 rounded-[10px] cursor-pointer !z-[200] fixed flex items-center justify-center`}
                >
                  <MenuIcon />
                </div>

                <div
                  className={`${
                    !mobileNavOpen ? "opacity-0" : ""
                  } transition-opacity duration-500 fixed flex justify-end left-0 w-[59vw]`}
                >
                  <img
                    className="-translate-y-2 max-w-[1.8rem]"
                    src="/images/owl_white.png"
                  />
                </div>
              </div>

              <div
                onClick={() => {
                  setMobileNavOpen(false);
                }}
                className={`${
                  !mobileNavOpen ? " opacity-0 pointer-events-none" : ""
                } fixed right-0 top-0 left-0 w-[100vw] transition-opacity duration-500  bg-black/25 h-[100vh]`}
              ></div>

              <ul
                className={`${
                  !mobileNavOpen ? " opacity-0 pointer-events-none" : ""
                } fixed bg-[#FF8989] pt-[5rem]  w-[62vw] transition-all duration-500 min-h-[100vh] top-0 left-0 bg-primary-white flex flex-col !text-start gap-[1.24rem] whitespace-nowrap`}
              >
                {navItems.map((item) => (
                  <li key={item.name} className="w-full  text-start">
                    <PaddedContainer>
                      <Link
                        onClick={() => {
                          setMobileNavOpen(false);
                        }}
                        href={item.route}
                        className={`
                         font-bold  text-white text-[1.31rem]
                    `}
                      >
                        {t(`navbar-${item.name}`)}
                      </Link>
                    </PaddedContainer>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </PaddedContainer>
      </nav>
    </>
  );
}
