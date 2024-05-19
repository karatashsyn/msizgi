import Link from "next/link";
import React from "react";

export default function AppointmentButton({
  text = "Randevu Al",
  className,
  backgroundColor = "#F08F8C",
  style,
}) {
  return (
    <Link href={"/iletisim#appointment"}>
      <button
        style={{ backgroundColor, ...style }}
        role="button"
        className={`${className} text-[0.9rem] text-white h-[3.1rem] rounded-full w-[16.45rem]`}
      >
        {text}
      </button>
    </Link>
  );
}
