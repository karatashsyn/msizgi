import React from "react";

const BlinkingOwl = () => {
  return (
    <div className="relative">
      <div className="absolute flex left-[10.6px] top-[14.4px] right-[11.3px] justify-between">
        <div className=" w-[13.4px] h-[13.4px] rounded-full overflow-hidden">
          <div className=" w-[13.4px] h-[13.4px] bg-primary animate-blink"></div>
        </div>
        <div className=" w-[13.4px] h-[13.4px] rounded-full overflow-hidden">
          <div className=" w-[13.4px] h-[13.4px] bg-primary animate-blink"></div>
        </div>
      </div>
      <img width={60} src="/images/loader.png" alt="" />
    </div>
  );
};

export default function Loading() {
  return (
    <div className="fixed animate-fade-in z-[250] top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-[rgba(0,0,0,0.32)]">
      <div className="flex justify-center items-center bg-[#fefefe] w-36 h-36 rounded-full">
        <BlinkingOwl />
      </div>
    </div>
  );
}
