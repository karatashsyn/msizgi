/* eslint-disable @next/next/no-img-element */
import AppointmentButton from "@/components/buttons/AppointmentButton";
import PaddedContainer from "@/components/composite/PaddedContainer";
import React from "react";

export default function HeroSection() {
  return (
    <PaddedContainer
      containerClassName={"bg-[rgba(248,248,248,0.21)] relative pb-[7.3rem]"}
    >
      <section id="hero-section">
        <img
          className="absolute top-[5rem] right-0 z-[2] h-[22rem]"
          src={"/svg/owl.svg"}
          alt="MSI Diş Kliniği Logo"
        />
        <svg
          className="absolute top-0 left-0 right-0 -translate-y-36 w-[100vw]"
          width="1920"
          height="853"
          viewBox="0 0 1920 853"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_0_218)">
            <ellipse
              cx="953.5"
              cy="111.5"
              rx="1331.5"
              ry="605.5"
              fill="#85D6FB"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_0_218"
              x="-513.914"
              y="-629.914"
              width="2934.83"
              height="1482.83"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="67.957"
                result="effect1_foregroundBlur_0_218"
              />
            </filter>
          </defs>
        </svg>

        <div className="mt-[5rem] relative">
          <h1
            style={{
              fontSize: "6.4rem",
              fontWeight: "bold",
              lineHeight: "1",
              color: "white",
            }}
            dangerouslySetInnerHTML={{
              __html: "Keşfet <br/> Özgürleş, Gülümse.",
            }}
          ></h1>
          <p
            className="mt-[2.7rem]"
            style={{
              fontSize: "1.2rem",
              width: "60%",
              color: "white",
            }}
            dangerouslySetInnerHTML={{
              __html:
                "Hayat keşfetmekle başlar. Sınırları aş, özgürlüğün keyfini çıkar.<br/>Her adımda, her başarıda gülümse.",
            }}
          ></p>
          <AppointmentButton
            className={"!mt-[4.3rem] bg-[#F08F8C]"}
            text={"Randevu Al"}
          />
          <div className="mt-[3.9rem] flex  items-center gap-[1rem]">
            <div className="px-[1.8rem] pt-[2rem] lg:rounded-tl-[30px] h-[8.3rem] w-[14rem] lg:rounded-br-[30px] bg-white">
              <h3 className="mb-[1.2rem] leading-[0] font-semibold text-[1.2rem]">
                {"Adresimiz"}
              </h3>
              <span className="text-[0.85rem] leading-[0] text-[#52575D]">
                {"Plus Plaza, Şirinevler"}
              </span>
            </div>
            <div className="px-[1.8rem] pt-[2rem] lg:rounded-tl-[30px] h-[8.3rem] w-[14rem] lg:rounded-br-[30px] bg-white">
              <div className="mb-[1.2rem] ">
                <h3 className="leading-[0] font-semibold text-[1.2rem]">
                  {"Çalışma Saatleri"}
                </h3>
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-[0.85rem]   text-[#52575D]">
                  {"Pzt-Cmt"}
                </span>

                <span className="text-[0.85rem] leading-[0] text-[#52575D]">
                  {"09:00-18:00"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PaddedContainer>
  );
}
