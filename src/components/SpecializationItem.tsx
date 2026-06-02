interface SpecialItemProps {
  children: string
}

export default function SpecialItem(props: SpecialItemProps) {
  return (
    <h4 className="
      font-normal text-lg 
      bg-neutral-100 text-black 
      rounded-md 
      py-2 px-6
      text-center hover:-translate-y-1 transition-transform duration-300
      min-w-[120px]
      flex justify-center items-center
    ">
      {props.children}
    </h4>
  )
}