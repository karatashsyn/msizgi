"use client";
import Image from "next/image";
import React from "react";
import PaddedContainer from "./PaddedContainer";
import { useTranslation } from "react-i18next";
import AppointmentButton from "../buttons/AppointmentButton";

export default function Footer() {
  const CartInfo = ({
    icon = "",
    title = "",
    contentRenderer = () => {},
    alt = "",
  }) => (
    <div className="flex items-center gap-[0.75rem]">
      <img className="w-[3rem] h-[3rem]" src={icon} alt={alt} />
      <div>
        <h4 className="text-[#1B262C] font-light text-[0.9rem]">{title}</h4>
        <p className="text-[#1B262C] text-[0.9rem]">{contentRenderer()}</p>
      </div>
    </div>
  );
  const { t } = useTranslation("common");
  return (
    <footer className="w-full mb-[4rem] sm:bg-[#F2F7FF] ">
      <PaddedContainer
        containerClassName="!overflow-visible"
        className={
          "flex max-sm:flex-col justify-center max-lg:gap-[3rem] gap-[6rem] "
        }
      >
        <div className="sm:pb-[5.65rem] max-sm:w-full max-sm:mx-auto">
          {/* Footer Cart */}
          <div
            style={{
              boxShadow: "0px 0px 25px 0px rgba(0, 40, 255, 0.15)",
            }}
            className="p-[3rem] bg-white sm:w-[24rem] max-sm:w-full h-[26rem] rounded-tr-[2.5rem] rounded-bl-[2.5rem]"
          >
            <Image
              unoptimized={true}
              className="w-[7.4rem]  cursor-pointer mb-[3.8rem]"
              src="/images/navsmall.webp"
              alt="/"
              width={148}
              height={66}
            />
            <div className="flex flex-col gap-[1.5rem]">
              <CartInfo
                icon="/svg/footer-location-icon.svg"
                title={t("footer-addressTitle")}
                contentRenderer={() => (
                  <span className="font-bold">
                    {t("footer-addressContent")}
                  </span>
                )}
                alt="Konum Sembolü"
              />
              <CartInfo
                icon="/svg/footer-phone-icon.svg"
                title={t("footer-phoneTitle")}
                contentRenderer={() => (
                  <>
                    <span className="font-bold underline">
                      {t("footer-phoneContent")}
                    </span>
                  </>
                )}
                alt="Telefon Sembolü"
              />
              <CartInfo
                icon="/svg/footer-clock-icon.svg"
                title={t("footer-workingHoursTitle")}
                contentRenderer={() => (
                  <>
                    <span className="">{t("footer-workingHoursContent")}</span>
                    <span className="font-bold"> 9:00-18:00</span>
                  </>
                )}
                alt="Saat Sembolü"
              />
            </div>
          </div>
        </div>

        <div className="sm:min-h-full flex items-center max-sm:hidden">
          <div>
            <p
              className="text-[#52575D] mb-[1.5rem] leading-[1.3]  max-w-[28rem]"
              dangerouslySetInnerHTML={{
                __html: t("footer-paragraph"),
              }}
            ></p>
            <AppointmentButton
              text={t("footer-createAppointment")}
              backgroundColor="#F08F8C"
            />

            <div className="mt-[5.9rem] flex flex-col gap-[0.5rem]">
              <a
                href={"/iletisim"}
                className="flex items-center gap-[0.2rem] text-primary-bright whitespace-nowrap  font-semibold  text-[0.85rem]"
              >
                <img src="/svg/caret-right.svg" alt="Caret Right Icon" />
                {t("footer-createAppointment")}
              </a>
              <a
                href={"/tedaviler"}
                className="font-semibold text-[#52575D] text-[0.85rem] whitespace-nowrap"
              >
                {t("footer-services")}
              </a>
              <a
                href={"/ekibimiz"}
                className="font-semibold text-[#52575D] text-[0.85rem] whitespace-nowrap"
              >
                {t("footer-team")}
              </a>
              <a
                href={"/hakkimizda"}
                className="font-semibold text-[#52575D] text-[0.85rem] whitespace-nowrap"
              >
                {t("footer-aboutMSI")}
              </a>
              <a
                href={"/iletisim"}
                className="font-semibold text-[#52575D] text-[0.85rem] whitespace-nowrap"
              >
                {t("footer-contactUs")}
              </a>
            </div>
          </div>
        </div>
      </PaddedContainer>
    </footer>
  );
}
