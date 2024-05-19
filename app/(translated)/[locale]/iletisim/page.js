/* eslint-disable @next/next/no-img-element */
import initTranslations from "@/app/i18n";
import AppointmentButton from "@/components/buttons/AppointmentButton";
import PaddedContainer from "@/components/composite/PaddedContainer";
import PageGradient from "@/components/PageGradient";

export default async function Contact({ params: { locale } }) {
  const { t } = await initTranslations(locale, ["contact", "common"]);
  return (
    <main className="animate-fade-in-up relative overflow-hidden">
      <div className="relative ">
        <PageGradient
          className={"max-sm:opacity-25"}
          rectangleColor="#F08F8C"
          firstCircleColor="#F08F8C"
          secondCircleColor="#F08F8C"
        />
        <PaddedContainer>
          <div className=" max-sm:mt-[4rem] mt-[3rem] relative z-[10]">
            <h1
              style={{
                lineHeight: "1",
              }}
              className="font-semibold max-sm:text-[3rem] text-[6.4rem] text-[#1B262C]"
            >
              {t("contact:contactUs") + "."}
            </h1>

            <p
              style={{
                lineHeight: "1",
              }}
              className="text-[1.2rem] max-sm:mt-[1.2rem] mt-[2.4rem] text-[#52575D] font-semibold"
              dangerouslySetInnerHTML={{
                __html: t("contact:mainParagraph"),
              }}
            ></p>
            <AppointmentButton
              text={t("common:button-takeAppointment")}
              className={"!bg-[#F08F8C] mt-[2.6rem] font-bold"}
            />
          </div>
          <div className="max-w-[59rem]">
            <a
              className=" relative z-[3] "
              href="https://www.google.com/maps/place/Mehmet+Said+%C4%B0ZG%C4%B0+Di%C5%9F+Klini%C4%9Fi/@40.9926593,28.8476835,17z/data=!3m1!4b1!4m6!3m5!1s0x14cabb959e47b669:0xb4d1b2ae2db02431!8m2!3d40.9926593!4d28.8476835!16s%2Fg%2F11hz2jp71b?entry=ttu"
              target="_blank"
            >
              <img
                src="/images/contactmap.png"
                alt="Contact Us"
                className="max-w-full max-h-[27.5rem] mt-[2.9rem]"
              />
            </a>

            <section id="appointment">
              <div className="flex justify-between  mt-[4.3rem] mb-12 max-lg:flex-col md:gap-[3rem]">
                <iframe
                  className="max-lg:w-full lg:max-w-[40.5rem] h-[48rem]"
                  title="Klinik Adı Randevu"
                  name="online-appointment-iframe"
                  allow="fullscreen"
                  data-src=""
                  src="https://klinik.medicasimple.com/online-randevu/eyJpZCI6MjE2LCJxIjoibWVkaWNhc2ltcGxlXzIyIiwiZGVmYXVsdExhbmd1YWdlIjoidHIifQ%253D%253D"
                  width="100%"
                  height="100%"
                ></iframe>

                <div className="text-[#1B262C] flex flex-col gap-[1rem] max-lg:mt-[6rem]">
                  <div className="flex flex-col">
                    <span className="">{t("contact:workingHours")}</span>
                    <span className="font-bold">
                      {t("contact:workingHoursData")}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="">{t("contact:phone")}</span>
                    <span className="font-bold underline">
                      {t("contact:phoneData")}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="">{t("contact:address")}</span>
                    <span className="font-bold">
                      {t("contact:addressData")}
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </PaddedContainer>
      </div>
    </main>
  );
}
