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
      className={`${className} cursor-pointer relative w-[20rem] h-[27.5rem] overflow-hidden`}
    >
      <img
        src={image}
        className="absolute left-0 right-0 top-0 bottom-0 "
        alt=""
      />
      <div
        className="absolute inset-0"
        style={{
          // gradient from bottom to top
          background: `linear-gradient(0deg, ${color} 0%, rgba(9, 98, 234, 0.01) 54%)`,
        }}
      ></div>
      <div className="absolute inset-0 flex p-[1.1rem] pb-[2.5rem] flex-col justify-end gap-[0.4rem]">
        <h1 className="text-[1.5rem] font-bold text-white">{title}</h1>
        <p className="text-[#F2F7FF] font-regular text-[0.85rem]">
          {description}
        </p>
      </div>
    </div>
  );
}
