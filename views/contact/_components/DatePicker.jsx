export default function DatePicker({ placeHolder, onChange, name }) {
  return (
    <div>
      <span className="text-[0.9rem] mb-4 text-body-text font-medium">
        {placeHolder}
      </span>
      <input
        name={name}
        placeholder={placeHolder}
        onChange={(e) => {
          onChange(e.target)
        }}
        type="date"
        className="shadow-input px-4 w-full placeholder:text-[0.7rem] placeholder:text-[#9C9C9C] h-[50px] outline-none border-[#D0D5DD] border-[1.2px] rounded-md"
      />
    </div>
  )
}
