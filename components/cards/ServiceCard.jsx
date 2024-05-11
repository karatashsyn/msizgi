/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function ServiceCard({
  title,
  description,
  image = "",
  color = "#EF8689",
  className = "",
}) {
  return (
    <div
      style={{
        aspectRatio: 319 / 439,
      }}
      className={`${className} !aspect-[319/439] cursor-pointer relative w-[20rem] max-w-full overflow-hidden`}
    >
      <img
        src={image}
        className="absolute object-cover w-full h-full inset-0 "
        alt=""
      />
      <div
        className="absolute inset-0 max-sm:top-[3rem] max-md:top-[8rem] top-[13rem]"
        style={{
          // gradient from bottom to top
          background: `linear-gradient(rgba(0,0,0,0) -0%, rgba(9, 98, 234, 0.1) 20%, rgba(9, 98, 234, 0.2) 50%, ${color} 100%)`,
        }}
      ></div>
      <div className="absolute inset-0 flex p-[1.1rem] pb-[2.5rem] max-sm:pb-[2rem] max-sm:px-[0.6rem] flex-col justify-end gap-[0.4rem]">
        <h1
          className="text-[1.5rem] font-bold text-white leading-[1.8rem]"
          dangerouslySetInnerHTML={{ __html: title }}
        ></h1>
        <p
          dangerouslySetInnerHTML={{ __html: description }}
          className="text-[#F2F7FF] font-regular text-[0.85rem] leading-[1.2]"
        ></p>
      </div>
    </div>
  );
}
