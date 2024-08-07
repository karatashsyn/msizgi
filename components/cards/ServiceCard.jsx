/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function ServiceCard({
  title,
  description,
  image = "",
  color = "#EF8689",
  className = "",
  href,
  imageAlt = "",
}) {
  const [hovered, setHovered] = useState(false);
  const router = useRouter();
  return (
    <div
      onClick={() => {
        router.push("/hizmetler/" + href);
      }}
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
      style={{
        aspectRatio: 319 / 439,
      }}
      className={`${className} !aspect-[319/439] cursor-pointer relative w-[20rem] max-w-full overflow-hidden`}
    >
      <img
        src="/images/right.svg"
        className={`absolute top-6 transition-all duration-300  ${
          hovered ? "right-6 " : "right-8 opacity-0"
        }  z-[2]`}
        alt="Right Arrow"
      />
      <img
        src={image}
        className={`${
          hovered ? "scale-105" : ""
        } transition-all duration-300 absolute object-cover w-full h-full inset-0`}
        alt={imageAlt}
        width={320}
        height={440}
      />
      <div
        className={`${
          hovered ? " top-[18rem] opacity-0" : "top-[13rem] "
        } transition-all duration-300 absolute inset-0 max-sm:top-[3rem] max-md:top-[8rem] `}
        style={{
          // gradient from bottom to top
          background: `linear-gradient(rgba(0,0,0,0) -0%, rgba(9, 98, 234, 0.1) 20%, rgba(9, 98, 234, 0.2) 50%, ${color} 100%)`,
        }}
      ></div>
      <div className="absolute inset-0 flex p-[1.1rem] pb-[2.5rem] max-sm:pb-[2rem] max-sm:px-[0.6rem] flex-col justify-end gap-[0.4rem]">
        <span
          className="text-[1.5rem] font-bold text-white leading-[1.8rem]"
          dangerouslySetInnerHTML={{ __html: title }}
        ></span>
        <p
          dangerouslySetInnerHTML={{ __html: description }}
          className="text-[#F2F7FF] font-regular text-[0.85rem] leading-[1.2]"
        ></p>
      </div>
    </div>
  );
}
