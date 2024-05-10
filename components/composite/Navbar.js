/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import { usePathname, useParams } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";

import PaddedContainer from "./PaddedContainer";
import useWidth from "@/hooks/useWidth";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { locale } = useParams();
  const fullRoute = usePathname();
  const activeRoute = useMemo(() => {
    return fullRoute === "/" + locale || !fullRoute
      ? "/"
      : fullRoute.split("/").pop();
  }, [fullRoute, locale]);
  const [navHidden, setNavHidden] = useState(false);
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

  useEffect(() => {
    if (width > 768) {
      setMobileNavOpen(false);
    }
  }, [width]);

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
