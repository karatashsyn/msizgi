import PaddedContainer from "@/components/composite/PaddedContainer";
import React from "react";

export default function SecondSection() {
  return (
    <PaddedContainer containerClassName={""}>
      <section id="hero-section">
        <div className="w-full flex space-between items-center gap-[4.65rem] pt-[7.5rem] pb-[5.65rem]">
          <div className="mt-[5rem] basis-[32%]">
            <h2
              className="font-bold"
              style={{
                fontSize: "2rem",
                lineHeight: "1",
                color: "#1B262C",
              }}
              dangerouslySetInnerHTML={{
                __html:
                  "Diş Sağlığı, hayatınızın temel taşıdır. Bu sadece bir öncelik değil, mutluluğun ve yaşam kalitenizin de anahtarıdır.",
              }}
            ></h2>
            <p
              className="mt-[2.55rem]"
              style={{
                fontSize: "1rem",
                //   width: "60%",
                color: "#52575D",
              }}
              dangerouslySetInnerHTML={{
                __html:
                  "Unutmayın, Diş sağlığı bir beden ve zihin, hayatınızın diğer tüm yönlerini zenginleştirir. Bu yüzden, bugün bir karar verin: Diş Sağlığınızı, her şeyden önce gelmek üzere, en üst sıraya koyun.",
              }}
            ></p>
          </div>
          <div className="flex items-center">
            <img
              style={{
                boxShadow: "0px 0px 20px 0px rgba(0, 40, 255, 0.15)",
              }}
              src="/images/home/second-teeth.png"
              className="w-[27rem] h-[41.9rem]"
              alt=""
            />
            <img
              src="/images/home/second-instrument.png"
              className="w-[13.5rem] max-h-[32rem]"
              alt=""
            />
          </div>
        </div>
      </section>
    </PaddedContainer>
  );
}
