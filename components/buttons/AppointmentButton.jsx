import React from "react";

export default function AppointmentButton({ text = "", className }) {
  return (
    <button
      role="button"
      className={`${className} bg-primary text-[0.9rem] text-white h-[3.1rem] rounded-full w-[16.45rem] mt-[4.7rem]`}
    >
      Randevu Al
    </button>
  );
}
