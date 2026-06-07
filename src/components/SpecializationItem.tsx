interface SpecialItemProps {
  children: string
  className?: string
}

export default function SpecializationItem(props: SpecialItemProps) {
  return (
    <h4 className={`
      ${props.className ?? ""}
      font-normal
      rounded-[4px]
      py-1.5 px-4
      text-center active:-translate-y-1 hover:-translate-y-1 transition-all duration-300
      border shadow-lg hover:border-[#2d4f40] active:border-[#2d4f40]
      hover:scale-105 active:scale-105
      min-w-[120px]
      flex justify-center items-center
    `}>
      {props.children}
    </h4>
  )
}
