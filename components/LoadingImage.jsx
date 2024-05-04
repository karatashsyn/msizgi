/* eslint-disable @next/next/no-img-element */
import Image from "next/image"
import React, { useEffect, useState } from "react"

export default function LoadingImage({
  width = 240,
  height = 240,
  src,
  className,
  imgClass,
  fallBackClass,
  loading = "lazy",
  optimized = false,
}) {
  const [imgLoading, setImgLoading] = useState(true)
  return optimized ? (
    <>
      <div className={`${className} relative`}>
        <Image
          width={width}
          height={height}
          onLoad={() => {
            setImgLoading(false)
          }}
          loading={loading}
          className={`${imgClass} ${
            imgLoading ? "opacity-0" : "opacity-100"
          } w-full transition-opacity duration-300 h-[240px] object-cover rounded-md`}
          alt="Blog"
          src={src}
        />
        <div
          className={`${fallBackClass} ${
            !imgLoading ? "opacity-0" : ""
          } w-full absolute inset-0 pointer-events-none  z-[5] bg-[#fae8e6] transition-all duration-300 h-[240px] object-cover rounded-md`}
        ></div>
      </div>
    </>
  ) : (
    <div className={`${className} relative`}>
      <img
        width={width}
        height={height}
        onLoad={() => {
          setImgLoading(false)
        }}
        loading={loading}
        className={`${imgClass} ${
          imgLoading ? "opacity-0" : "opacity-100"
        } w-full transition-opacity duration-300 h-[240px] object-cover rounded-md`}
        alt="Blog"
        src={src}
      />
      <div
        className={`${fallBackClass} ${
          !imgLoading ? "opacity-0" : ""
        } w-full absolute inset-0 pointer-events-none  z-[5] bg-[#fae8e6] transition-all duration-300 h-[240px] object-cover rounded-md`}
      ></div>
    </div>
  )
}
