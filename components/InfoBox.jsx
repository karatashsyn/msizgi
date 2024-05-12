import React from "react";

export default function InfoBox({
  number,
  title,
  description,
  noLine = false,
}) {
  return (
    <div>
      <div className="flex items-center gap-[0.5rem]">
        <div className="border-[1px] border-white w-[4rem] h-[4rem] flex items-center justify-center rounded-full">
          <span className="text-[2rem] text-white font-bold">{number}</span>
        </div>

        <div
          className={`${noLine ? "lg:hidden" : ""}  w-[15rem] h-[0.2rem]`}
          style={{
            background:
              "linear-gradient(90deg, #fff 0%, rgba(216,216,216,0.01) 100%)",
          }}
        ></div>
      </div>
      <div className="mt-[1rem] mb-[0.2rem]">
        <h3 className="text-white font-bold text-[1.2rem]">{title}</h3>
      </div>
      <div>
        <p
          className="text-white text-[0.85rem] font-bold"
          dangerouslySetInnerHTML={{ __html: description }}
        ></p>
      </div>
    </div>
  );
}
