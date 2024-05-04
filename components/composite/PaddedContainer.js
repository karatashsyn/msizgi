import React from "react";

export default function PaddedContainer({
  children,
  className,
  containerClassName = "",
}) {
  return (
    <div
      className={`${containerClassName} max-w-[100vw] w-full flex justify-center overflow-x-hidden`}
    >
      <div
        className={`${className} px-36 max-xl:px-16 max-md:px-12 max-sm:px-6 w-full max-w-[1440px]`}
      >
        {children}
      </div>
    </div>
  );
}
