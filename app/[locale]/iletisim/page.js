import AppointmentButton from "@/components/buttons/AppointmentButton";
import PaddedContainer from "@/components/composite/PaddedContainer";
import PageGradient from "@/components/PageGradient";

export default function Contact() {
  return (
    <div className="animate-fade-in-up relative">
      <div className="relative ">
        <PageGradient
          rectangleColor="#F08F8C"
          firstCircleColor="#F08F8C"
          secondCircleColor="#F08F8C"
        />
        <PaddedContainer>
          <div className="mt-[3rem] relative z-[10]">
            <h1
              style={{
                lineHeight: "1",
              }}
              className="font-semibold text-[6.4rem] text-[#1B262C]"
            >
              Bize Ulaşın.
            </h1>

            <p
              style={{
                lineHeight: "1",
              }}
              className="text-[1.2rem] mt-[2.4rem] text-[#52575D] font-semibold"
              dangerouslySetInnerHTML={{
                __html:
                  "Artık bir telefon uzağındayız, ister online randevu ister Canlı Chat <br/> ile bize ulaş, Gülümseyip Özgürleşenlerin arasına katıl.",
              }}
            ></p>
            <AppointmentButton
              className={"!bg-[#F08F8C] mt-[2.6rem] font-bold"}
            />
          </div>
        </PaddedContainer>
      </div>
    </div>
  );
}
