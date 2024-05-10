/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function ServiceCardMobile({
  title,
  description,
  image = "",
  color = "#EF8689",
  className = "",
}) {
  return (
    <div
      className={`${className} rounded-[1.56rem] cursor-pointer relative min-w-[16.4rem] h-[27.5rem] overflow-hidden`}
    >
      <img
        src={image}
        className="absolute h-full object-cover left-0 right-0 top-0 bottom-0 "
        alt=""
      />
      <div
        className="absolute inset-0"
        style={{
          // gradient from bottom to top
          background: `linear-gradient(160deg, rgba(9, 98, 234, 0.25) 20%, ${color} 100%)`,
        }}
      ></div>
      <div className="absolute inset-0 flex px-[0.67rem] pt-[1.4rem] pb-[1.17rem] flex-col justify-between gap-[0.4rem]">
        <div className="flex flex-col gap-[1rem]">
          <h1
            className="text-[1.875rem] font-bold text-white leading-[1.9rem]"
            dangerouslySetInnerHTML={{ __html: title }}
          ></h1>
          <p
            dangerouslySetInnerHTML={{ __html: description }}
            className="text-[#F2F7FF] font-regular text-[1.25rem] leading-[1.2]"
          ></p>
        </div>
        <div className="w-full flex justify-end pr-[0.8rem]">
          <button
            className="w-[6.64rem] rounded-[0.78rem] h-[2.73rem] bg-[#FF8989] text-[1.25rem] font-bold text-white"
            role="button"
          >
            Detaylar
          </button>
        </div>
      </div>
    </div>
  );
}
