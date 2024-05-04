import Image from "next/image";
import React from "react";
import PaddedContainer from "./PaddedContainer";

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
  const href = "#";
  return (
    <footer className="w-full mb-[4rem] bg-[#F2F7FF] ">
      <PaddedContainer
        containerClassName="!overflow-visible"
        className={
          "!flex max-sm:flex-col justify-center max-lg:gap-[3rem] gap-[6rem] "
        }
      >
        <div className="sm:pb-[5.65rem]">
          {/* Footer Cart */}
          <div
            style={{
              boxShadow: "0px 0px 25px 0px rgba(0, 40, 255, 0.15)",
            }}
            className="p-[3rem] bg-white w-[24rem] h-[26rem] rounded-tr-[2.5rem] rounded-bl-[2.5rem]"
          >
            <Image
              unoptimized={true}
              className="w-[7.4rem]  cursor-pointer mb-[3.8rem]"
              src="/images/owl-icon.png "
              alt="/"
              width={148}
              height={66}
            />
            <div className="flex flex-col gap-[1.5rem]">
              <CartInfo
                icon="/svg/footer-location-icon.svg"
                title={"asd"}
                contentRenderer={() => (
                  <span className="font-bold">{"asd"}</span>
                )}
              />
              <CartInfo
                icon="/svg/footer-phone-icon.svg"
                title={"asd"}
                contentRenderer={() => (
                  <>
                    <span className="font-bold underline">{"asd"}</span>
                  </>
                )}
              />
              <CartInfo
                icon="/svg/footer-clock-icon.svg"
                title={"asd"}
                contentRenderer={() => (
                  <>
                    <span className="">{"asd"}</span>
                    <span className="font-bold"> 9:00-18:00</span>
                  </>
                )}
              />
            </div>
          </div>
        </div>

        <div className="sm:min-h-full flex items-center">
          <div>
            <p
              className="text-[#52575D] mb-[1.5rem] leading-[1.3]  max-w-[28rem]"
              dangerouslySetInnerHTML={{
                __html: "lskdjflskdjflskdjflskdjflskdfsldkfjsldkfjsldjfk",
              }}
            ></p>
            <button
              role="button"
              className="bg-primary text-[0.9rem] text-white h-[3.1rem] rounded-full w-[16.45rem]"
            >
              aasdasd
            </button>
            <div className="mt-[5.9rem] flex flex-col gap-[0.5rem]">
              <a
                href={href}
                className="flex items-center gap-[0.2rem] text-primary-bright whitespace-nowrap  font-semibold  text-[0.85rem]"
              >
                <img src="/svg/caret-right.svg" alt="#" />
                {"asd"}
              </a>
              <a
                href={href}
                className="font-semibold text-[#52575D] text-[0.85rem] whitespace-nowrap"
              >
                asd
              </a>
              <a
                href={href}
                className="font-semibold text-[#52575D] text-[0.85rem] whitespace-nowrap"
              >
                asd
              </a>
              <a
                href={href}
                className="font-semibold text-[#52575D] text-[0.85rem] whitespace-nowrap"
              >
                asd
              </a>
              <a
                href={href}
                className="font-semibold text-[#52575D] text-[0.85rem] whitespace-nowrap"
              >
                asd
              </a>
            </div>
          </div>
        </div>
      </PaddedContainer>
    </footer>
  );
}
