export default function TextInput({
  placeHolder,
  onChange = () => {},
  className,
  name,
}) {
  return (
    <div className={`${className} w-full`}>
      <span className={` text-[0.9rem] mb-4 text-body-text font-medium`}>
        {placeHolder}
      </span>
      <input
        name={name}
        placeholder={placeHolder}
        onChange={(e) => {
          onChange(e.target)
        }}
        type="text"
        className=" shadow-input pl-4 text-[0.7rem] placeholder:text-[#9C9C9C] h-[50px] w-full outline-none border-[#D0D5DD] border-[1.2px] rounded-md"
      />
    </div>
  )
}
