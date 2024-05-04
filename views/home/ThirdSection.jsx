/* eslint-disable @next/next/no-img-element */
import AppointmentButton from "@/components/buttons/AppointmentButton";
import PaddedContainer from "@/components/composite/PaddedContainer";
import React from "react";

export default function ThirdSection() {
  return (
    <section
      id="third-section"
      className="w-screen mb-[3.45rem]"
      style={{
        backgroundImage: "url('/images/home/third-bg.jpg')",
        backgroundPosition: "top",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <PaddedContainer containerClassName={"!overflow-visible"}>
        <div className="w-full flex space-between items-center gap-[4.65rem] pt-[6rem]">
          <div>
            <h2
              style={{
                letterSpacing: "-0.10rem",
              }}
              className="text-white text-[3rem] leading-[3.7rem] font-extrabold "
              dangerouslySetInnerHTML={{
                __html:
                  "Hemen <br/> <span class='font-extrabold' style='color:#ffef89; white-space:nowrap;' >Randevu Alın</span>",
              }}
            ></h2>
            <p
              className="mt-[1rem] text-[0.85rem] w-[24rem] font-bold text-white leading-[1.3rem]"
              dangerouslySetInnerHTML={{
                __html:
                  "Erken teşhis ve düzenli kontrol, sağlıklı bir yaşamın anahtarlarından biridir. Randevunuzu şimdi alın, sağlığınızı ihmal etmeyin.",
              }}
            ></p>

            <AppointmentButton className="mt-[1.75rem]" />
            <div className="mt-[1.55rem] flex items-end">
              <div
                style={{
                  boxShadow: "0px 0px 20px 0px rgba(0, 40, 255, 0.15)",
                }}
                className="h-[19rem] transition-shadow duration-300 w-[19rem] overflow-hidden cursor-pointer translate-y-[3.45rem] relative"
              >
                <img
                  className={`hover:scale-105 transition-all duration-300 w-full h-full`}
                  src="/images/home/dental-prosthesis.png"
                  alt=""
                />
                <div className="bg-primary rounded-full w-[2.5rem] h-[2.5rem] flex absolute left-[2rem] bottom-[5.45rem] items-center justify-center">
                  <img src="/forward.svg" alt="" className="max-w-[25%] ml-1" />
                </div>
              </div>
              <div className="h-[12.1rem] w-[15rem] px-[1.5rem] flex items-center justify-center bg-primary">
                <p
                  className="text-white font-semibold"
                  dangerouslySetInnerHTML={{
                    __html:
                      "Kliniğimizin programı ve çalışma saatleri hakkında daha fazla bilgi al",
                  }}
                ></p>
              </div>
            </div>
          </div>
        </div>
      </PaddedContainer>
    </section>
  );
}
