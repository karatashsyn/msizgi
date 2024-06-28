/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function BlogCardMobile({ title, date, description, imageAlt }) {
  return (
    <div className=" cursor-pointer">
      <img
        className="object-center  object-cover rounded-tl-md rounded-br-md w-full mb-[0.75rem] !aspect-[3/2]"
        src="/images/abouttemp.webp"
        alt={imageAlt}
      />
      <div className="max-w-full">
        <div className="mt-[0.75rem] mb-[0.25rem]"></div>
        <h4 className="text-[#1B262C] font-bold text-[1.875rem] mb-[0.625rem]">
          {title}
        </h4>
        <p className="text-[#52575D] text-[1.328rem]">{description}</p>
      </div>
    </div>
  );
}
