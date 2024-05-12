import React from "react";

export default function PageGradient({
  rectangleColor = "#FF8989",
  firstCircleColor = "#FF8989",
  secondCircleColor = "#FF8989",
  className,
}) {
  return (
    <div className={`${className} relative w-full -translate-y-[6.5rem] `}>
      <div
        className="w-full absolute left-0 right-0 top-[6rem] h-[27rem]  opacity-[0.7] blur-[0.7rem]"
        style={{
          background: `linear-gradient(180deg, ${rectangleColor} 0%, rgba(190,203,255,0.1)  100%)`,
        }}
      ></div>
      <div
        className="absolute left-[8.5rem] top-[1rem] w-[22.9rem] h-[22.9rem] rounded-full opacity-[0.35] blur-[2.8rem]"
        style={{
          background: `linear-gradient(180deg, ${firstCircleColor} 0%, rgb(242,247,255) 100%)`,
        }}
      ></div>
      <div
        className="absolute right-[0] w-[22.9rem] h-[22.9rem] rounded-full blur-[2.8rem]"
        style={{
          background: secondCircleColor,
        }}
      ></div>
    </div>
  );
}
