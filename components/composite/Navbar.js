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
  const [mobileNavOpen, setMobileNavOpen] = useState(true);

  const route = usePathname();

  const { width } = useWidth();
  const { t } = useTranslation("common");
  const navItems = [
    { name: "home", route: "/" },
    { name: "aboutUs", route: "hakkimizda" },
    { name: "treatments", route: "tedaviler" },
    { name: "team", route: "ekibimiz" },
    { name: "blog", route: "blog" },
    { name: "contact", route: "iletisim" },
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
                  className="w-[7.4rem] min-w-[4rem]  cursor-pointer"
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
                    {t("navbar-days") + ": "}
                    <span className="text-[1em] font-bold text-primary-bright">
                      {t("navbar-hours")}
                    </span>
                  </span>
                </a>
                <a href="#" className="flex  items-center gap-[0.5rem]">
                  <img src="/svg/phone-alt.svg" alt="Clock Image" />
                  <span className="text-[0.9rem] font-bold whitespace-nowrap underline">
                    {t("navbar-phone")}
                  </span>
                </a>
                <a href="#" className="flex  items-center gap-[0.5rem]">
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
                          item.route === activeRoute ||
                          (item.route === "/" && !activeRoute)
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
       flex items-center  w-full sm:hidden`}
      >
        <PaddedContainer>
          <div>
            <div className="flex">
              <div className="fixed w-min z-[15] h-[60px] flex items-ceter">
                <div className="mr-6 h-full flex items-center">
                  <Dropdown>
                    <DropdownTrigger>
                      <Button variant="bordered">
                        <div className="flex items-center">
                          {selectedLang?.toLocaleUpperCase()}
                        </div>
                      </Button>
                    </DropdownTrigger>
                    <DropdownMenu
                      style={{
                        zIndex: 1000,
                        padding: "6px 12px",
                        flexDirection: "column",
                        backgroundColor: "white",
                        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                        display: "flex",
                      }}
                      aria-label="Static Actions"
                      className="bg-white-primary px-6"
                    >
                      <DropdownItem>
                        <Link
                          className="flex items-center gap-1 my-2"
                          locale="tr"
                          href={router.asPath}
                          onClick={() => setMobileNavOpen(false)}
                        >
                          <FlagTR />
                          <span>TR</span>
                        </Link>
                      </DropdownItem>
                      <DropdownItem
                        style={{
                          width: "24px",
                        }}
                      >
                        <Link
                          className="flex items-center gap-1 my-2"
                          locale="bg"
                          href={router.asPath}
                          onClick={() => setMobileNavOpen(false)}
                        >
                          <FlagBg />
                          <span>BG</span>
                        </Link>
                      </DropdownItem>
                      <DropdownItem>
                        <Link
                          className="flex items-center gap-1 my-2"
                          onClick={() => setMobileNavOpen(false)}
                          locale="en"
                          href={router.asPath}
                        >
                          <FlagGb />
                          <span>EN</span>
                        </Link>
                      </DropdownItem>
                      <DropdownItem>
                        <Link
                          className="flex items-center gap-1 my-2"
                          onClick={() => setMobileNavOpen(false)}
                          locale="ru"
                          href={router.asPath}
                        >
                          <FlagRu />
                          <span>RU</span>
                        </Link>
                      </DropdownItem>
                      <DropdownItem>
                        <Link
                          className="flex items-center gap-1 my-2"
                          onClick={() => setMobileNavOpen(false)}
                          locale="ar"
                          href={router.asPath}
                        >
                          <FlagSa />
                          <span>SA</span>
                        </Link>
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                  <img
                    className="cursor-pointer"
                    onClick={() => {
                      router.push("/");
                      setMobileNavOpen(false);
                    }}
                    src="/images/owl-icon.png "
                    unoptimized={true}
                    alt=""
                    width={136}
                    height={43}
                  />
                </div>
                <div
                  onClick={toggleMobileNav}
                  className={`${
                    !mobileNavOpen && route !== "/" && route !== "/hakkimizda"
                      ? " invert"
                      : ""
                  } rounded-[10px] cursor-pointer fixed bg-blue-dark flex items-center justify-center`}
                >
                  <MenuIcon />
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
