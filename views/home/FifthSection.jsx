import AppointmentButton from "@/components/buttons/AppointmentButton";
import EmployeeCard from "@/components/cards/EmployeeCard";
import PaddedContainer from "@/components/composite/PaddedContainer";
import React from "react";

export default function FifthSection() {
  return (
    <PaddedContainer>
      <section id="fifth-section">
        <div className="w-full">
          <div>
            <h3
              style={{
                lineHeight: "3.2rem",
              }}
              className="font-extrabold text-[3rem] text-[#1B262C]"
              dangerouslySetInnerHTML={{
                __html:
                  "Profesyonel <br style='line-height:0;'/> <span class='font-extrabold leading-0' style='color:#009944; font-size:inherit;font-weight: inherit; line-height:0;'>Ekibimiz</span>",
              }}
            ></h3>
          </div>
          <div className="overflow-x-scroll flex gap-[1.5rem] mt-[2rem]">
            <EmployeeCard
              image="/images/home/tmp1.png"
              name="John Doe"
              position="Ortodonti Uzmanı"
              experience={10}
            />
            <EmployeeCard
              image="/images/home/tm2.png"
              name="John Doe"
              position="Ortodonti Uzmanı"
              experience={10}
            />
            <EmployeeCard
              image="/images/home/tmp3.png"
              name="John Doe"
              position="Ortodonti Uzmanı"
              experience={10}
            />
            <EmployeeCard
              image="/images/home/tmp4.png"
              name="John Doe"
              position="Ortodonti Uzmanı"
              experience={10}
            />
            <EmployeeCard
              image="/images/home/tmp4.png"
              name="John Doe"
              position="Ortodonti Uzmanı"
              experience={10}
            />
          </div>
        </div>
      </section>
    </PaddedContainer>
  );
}
