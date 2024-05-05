import React from "react";

export default function AppointmentButton({
  text = "Randevu Al",
  className,
  backgroundColor = "#F08F8C",
}) {
  return (
    <button
      style={{ backgroundColor }}
      role="button"
      className={`${className} text-[0.9rem] text-white h-[3.1rem] rounded-full w-[16.45rem]`}
    >
      Randevu Al
    </button>
  );
}
