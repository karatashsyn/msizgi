import initTranslations from "@/app/i18n";
import AppointmentButton from "@/components/buttons/AppointmentButton";
import ServiceCard from "@/components/cards/ServiceCard";
import PaddedContainer from "@/components/composite/PaddedContainer";
import PageGradient from "@/components/PageGradient";

export default async function Contact({ params: { locale } }) {
  const { t } = await initTranslations(locale, ["services", "common"]);
  return (
    <div className="animate-fade-in-up relative overflow-hidden">
      <div className="relative ">
        <PageGradient
          className={"max-sm:opacity-25"}
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
              className="font-semibold max-sm:text-[3rem]  text-[6.4rem] text-[#1B262C]"
            >
              {t("services:treatments")}
            </h1>

            <p
              style={{
                lineHeight: "1",
              }}
              className="text-[1.2rem] max-sm:mt-[1.2rem] mt-[2.4rem] text-[#52575D] font-semibold"
              dangerouslySetInnerHTML={{
                __html: t("services:mainParagraph"),
              }}
            ></p>
            <AppointmentButton
              text={t("common:button-takeAppointment")}
              className={"!bg-[#85D6FB] mt-[2.6rem] font-bold"}
            />
          </div>
          <div className="w-full flex justify-center mb-[8.8rem]">
            <div
              style={{
                rowGap: "1.1rem",
                columnGap: "1.1rem",
              }}
              className="grid grid-cols-3 max-md:grid-cols-2 gap-[1.1rem] mt-[6.4rem]"
            >
              <ServiceCard
                color="#EF8689"
                title={t("services:serviceTitle1")}
                image={"/images/s1-min.png"}
                description={t("services:serviceDescription2")}
              />

              <ServiceCard
                color="#FFEF89"
                title={t("services:serviceTitle2")}
                image={"/images/s2-min.png"}
                description={t("services:serviceDescription2")}
              />

              <ServiceCard
                color="#85D6FB"
                title={t("services:serviceTitle3")}
                image={"/images/s3-min.png"}
                description={t("services:serviceDescription3")}
              />
              <ServiceCard
                color="#85D6FB"
                title={t("services:serviceTitle4")}
                image={"/images/s4-min.png"}
                description={t("services:serviceDescription4")}
              />
              <ServiceCard
                color="#85D6FB"
                title={t("services:serviceTitle5")}
                image={"/images/s5-min.png"}
                description={t("services:serviceDescription5")}
              />
              <ServiceCard
                color="#FFEF89"
                title={t("services:serviceTitle6")}
                image={"/images/canaltreatment.png"}
                description={t("services:serviceDescription6")}
              />
            </div>
          </div>
        </PaddedContainer>
      </div>
    </div>
  );
}
