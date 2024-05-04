import PaddedContainer from "@/components/composite/PaddedContainer";
import React from "react";

export default function SixthSection() {
  const InfoBox = ({ number, title, description, noLine = false }) => {
    return (
      <div>
        <div className="flex items-center gap-[0.5rem]">
          <div className="border-[1px] border-white w-[4rem] h-[4rem] flex items-center justify-center rounded-full">
            <span className="text-[2rem] text-white font-bold">{number}</span>
          </div>
          {!noLine && (
            <div
              className="w-[15rem] h-[0.2rem]"
              style={{
                background:
                  "linear-gradient(90deg, #fff 0%, rgba(216,216,216,0.01) 100%)",
              }}
            ></div>
          )}
        </div>
        <div className="mt-[1rem] mb-[0.2rem]">
          <h3 className="text-white font-bold text-[1.2rem]">{title}</h3>
        </div>
        <div>
          <p
            className="text-white text-[0.85rem] font-bold"
            dangerouslySetInnerHTML={{ __html: description }}
          ></p>
        </div>
      </div>
    );
  };
  return (
    <section id="sixth-section " className="mt-[20rem] mb-[6rem]">
      <div className="w-full relative">
        <PaddedContainer className={"absolute top-[-38%]"}>
          <div className="w-full">
            <div
              className="py-[6rem] px-[5.25rem] rounded-bl-[5rem] rounded-tr-[5rem] w-full relative"
              style={{
                background: "linear-gradient(45deg, #2BBCFE 0%, #85D6FB 100%)",
              }}
            >
              <div className="mb-[2.2rem]">
                <h2 className="text-[3rem] text-white font-extrabold">
                  {"Prosedürler."}
                </h2>
              </div>
              <div className="flex justify-centr gap-[1rem]">
                <InfoBox
                  number={1}
                  title={"Randevu Alın"}
                  description={
                    "İster arayın, ister Online Chat ile <br/> randevu alın."
                  }
                />
                <InfoBox
                  number={2}
                  title={"Ağız Kontrolü"}
                  description={
                    "5D I-treo Cihazımızla Ağızınızı tarayıp <br/> ihtiyaçlarınıza yönelik tedavi planını <br/> oluşturuyoruz."
                  }
                />
                <InfoBox
                  number={3}
                  title={"Tedaviyi Gerçekleştirin"}
                  description={
                    "Tedavinizi planladıktan sonra her anınızda <br/> size destek olarak en iyi sonuçları almak için <br/> uğraşıyoruz."
                  }
                  noLine={true}
                />
              </div>
            </div>
          </div>
        </PaddedContainer>
        <a
          target="_blank"
          href="https://www.google.com/maps/place/Mehmet+Said+%C4%B0ZG%C4%B0+Di%C5%9F+Klini%C4%9Fi/@40.9926593,28.8451086,17z/data=!3m1!4b1!4m6!3m5!1s0x14cabb959e47b669:0xb4d1b2ae2db02431!8m2!3d40.9926593!4d28.8476835!16s%2Fg%2F11hz2jp71b?entry=ttu"
        >
          <img
            src="/images/mapImage.png"
            className="h-[40rem] w-full object-cover object-center"
            alt=""
          />
        </a>
      </div>
    </section>
  );
}
