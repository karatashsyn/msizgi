/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function EmployeeCard({
  image = "",
  name = "",
  position = "",
  experience = 10,
}) {
  return (
    <div className="!w-[12.9rem]">
      <img
        src={image}
        className="w-full object-center object-cover h-[14.3rem] rounded-tl-[1rem] rounded-br-[1rem]"
        alt="Employee"
      />
      <div className="mt-[1.15rem] text-center">
        <h1 className="font-bold leading-[1rem] text-[#1B262C] text-[1.2rem] mb-[0.32rem] ">
          {name}
        </h1>
        <h2 className="text-[#FF8989] text-[0.85rem] leading-[1rem] font-bold text-primary mb-[0.462rem]">
          {position}
        </h2>
        <p className="text-[#52575D] leading-[1rem] text-[0.85rem]">
          +{experience + " " + "Yıl"}
        </p>
      </div>
    </div>
  );
}
