/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function BlogCard({ title, date, description }) {
  return (
    <div className="max-w-[19rem] cursor-pointer">
      <img
        className="object-center object-cover rounded-tl-md rounded-br-md w-full mb-[0.75rem] !aspect-[3/2]"
        src="/images/abouttemp.png"
        alt=""
      />
      <div className="max-w-full">
        <div className="mt-[0.75rem] mb-[0.25rem]"></div>
        <span className="text-[#062D92] font-light text-[0.85rem]">{date}</span>
        <h4 className="text-[#1B262C] font-bold text-[1.2rem] mb-[0.5rem]">
          {title}
        </h4>
        <p className="text-[#52575D] text-[0.85rem]">{description}</p>
      </div>
    </div>
  );
}
