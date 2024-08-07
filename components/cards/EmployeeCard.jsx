/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function EmployeeCard({
  yearWord = "",
  image = "",
  name = "",
  position = "",
  experience = 10,
  className,
}) {
  return (
    <div className={`${className}  max-w-[12.9rem] overflow-hidden`}>
      <img
        src={image}
        className="max-w-full object-center object-cover  aspect-[9/10] rounded-tl-[1rem] rounded-br-[1rem]"
        alt={name ?? "Ekip Üyesi"}
        width={208}
        height={231}
      />
      <div className="mt-[1.15rem] text-center">
        <span className="font-bold leading-[1rem] text-[#1B262C] text-[1.2rem] mb-[0.32rem] ">
          {name}
        </span>
        <span className="block text-[#FF8989] text-[0.85rem] leading-[1rem] font-bold mb-[0.462rem]">
          {position}
        </span>
        <p className="text-[#52575D] leading-[1rem] text-[0.85rem]">
          +{experience + " " + yearWord}
        </p>
      </div>
    </div>
  );
}
