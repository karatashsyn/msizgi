import AppointmentButton from "@/components/buttons/AppointmentButton";
import ServiceCard from "@/components/cards/ServiceCard";
import PaddedContainer from "@/components/composite/PaddedContainer";
import PageGradient from "@/components/PageGradient";

export default function Contact() {
  return (
    <div className="animate-fade-in-up relative">
      <div className="relative ">
        <PageGradient
          rectangleColor="#F2F7FF"
          firstCircleColor="#85D6FB"
          secondCircleColor="#85D6FB"
        />
        <PaddedContainer>
          <div className="mt-[3rem] relative z-[10]">
            <h1
              style={{
                lineHeight: "1",
              }}
              className="font-semibold text-[6.4rem] text-[#1B262C]"
            >
              Tedaviler
            </h1>

            <p
              style={{
                lineHeight: "1",
              }}
              className="text-[1.2rem] mt-[2.4rem] text-[#52575D] font-semibold"
              dangerouslySetInnerHTML={{
                __html:
                  "Profesyonel Ekibimizle Gülüşünüzü Keşfetmenizde yardımcı <br/> olmakla kalmıyor, bütün tedavi sürecinde yanınızda oluyoruz. İşte <br/> Gülüşünüzün kahramanları.",
              }}
            ></p>
            <AppointmentButton
              className={"!bg-[#85D6FB] mt-[2.6rem] font-bold"}
            />
          </div>
          <div className="w-full flex justify-center mb-[8.8rem]">
            <div className="grid grid-cols-3 gap-[1.1rem] mt-[6.4rem]">
              <ServiceCard
                color="#EF8689"
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

              <ServiceCard
                color="#85D6FB"
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
        </PaddedContainer>
      </div>
    </div>
  );
}
