interface SpecialItemProps {
  children: string
}

export default function SpecialItem(props: SpecialItemProps) {
  return (
    <h2 className="
      font-normal text-lg 
      bg-neutral-100 text-black 
      rounded-md 
      py-4 mx-8
      text-center hover:-translate-y-3 transition-transform duration-300
      min-w-[200px]
    ">
      {props.children}
    </h2>
  )
}