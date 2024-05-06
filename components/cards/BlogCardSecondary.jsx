import React from "react";

export default function BlogCardSecondary({
  date = "",
  title = "",
  className,
}) {
  return (
    <div
      className={`${className} hover:opacity-65 transition-opacity duration-75 cursor-pointer px-[1rem] max-w-[19rem] min-h-[7rem] py-[1.5rem] border-[1px] border-[#BECBFF]`}
    >
      <div className="flex flex-col gap-[0.25rem]">
        <span className="text-[#062D92] font-light text-[0.85rem]">{date}</span>
        <h4 className="text-[#1B262C] font-bold text-[0.9rem]">{title}</h4>
      </div>
    </div>
  );
}
