import AppointmentButton from "@/components/buttons/AppointmentButton";
import ServiceCard from "@/components/cards/ServiceCard";
import PaddedContainer from "@/components/composite/PaddedContainer";
import React from "react";

export default function FourthSection() {
  return (
    <PaddedContainer containerClassName={"pt-[7.9rem] pb-12"}>
      <section id="fourth-section">
        <div className="flex gap-[2.8rem] items-center">
          <div className="max-w-min pb-[2rem]">
            <h2 className="text-[#1B262C] font-extrabold text-[3rem] mb-[1.05rem]">
              {"Hizmetler"}
            </h2>
            <p className="text-[0.85rem] text-[#52575D] mb-[2.15rem]">
              {
                "Profesyonel Ekibimizle ve hizmetlerimizle her zaman yanınızdayız!"
              }
            </p>
            <ServiceCard
              color="#EF8689"
              title={"Çocuk Diş Hekimliği"}
              image={"/images/home/s1-min.png"}
              description={
                "Çocuk ve ergenlerin tedavisine odaklanan diş hekimliği dalı."
              }
            />
          </div>
          <div className="flex gap-[2.5rem]">
            <div className="flex flex-col gap-[2.8rem]">
              <ServiceCard
                color="#FFEF89"
                title={"Çocuk Diş Hekimliği"}
                image={"/images/home/s1-min.png"}
                description={
                  "Çocuk ve ergenlerin tedavisine odaklanan diş hekimliği dalı."
                }
              />
              <ServiceCard
                color="#85D6FB"
                title={"Çocuk Diş Hekimliği"}
                image={"/images/home/s1-min.png"}
                description={
                  "Çocuk ve ergenlerin tedavisine odaklanan diş hekimliği dalı."
                }
              />
            </div>
            <div className="flex flex-col translate-y-4 gap-[2.8rem]">
              <ServiceCard
                color="#85D6FB"
                title={"Çocuk Diş Hekimliği"}
                image={"/images/home/s1-min.png"}
                description={
                  "Çocuk ve ergenlerin tedavisine odaklanan diş hekimliği dalı."
                }
              />
              <ServiceCard
                color="#FFEF89"
                title={"Çocuk Diş Hekimliği"}
                image={"/images/home/s1-min.png"}
                description={
                  "Çocuk ve ergenlerin tedavisine odaklanan diş hekimliği dalı."
                }
              />
            </div>
          </div>
        </div>
      </section>
    </PaddedContainer>
  );
}
