import React from "react"

export default function SwiperNavigationButton({ className, visible }) {
  return (
    <div
      className={`${className} 
      ${
        visible ? "opacity-100" : "opacity-0 scale-75"
      } max-sm:opacity-0 max-sm:pointer-events-none transition-all duration-200 !w-6 active:bg-secondary-coral !text-white active:opacity-90 !h-10 bg-primary-coral rounded-sm  flex justify-center items-center shadow-md`}
    ></div>
  )
}
