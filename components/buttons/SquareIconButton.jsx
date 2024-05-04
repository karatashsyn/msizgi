import React from "react"

export default function SquareIconButton({ icon = () => <></> }) {
  return (
    <div
      style={{ boxShadow: "0px 1px 4px 0 rgba(0, 0, 0, 0.25)" }}
      className="rounded-lg min-w-[55px] !min-h-[55px] bg-primary-white  flex items-center justify-center"
    >
      {icon()}
    </div>
  )
}
