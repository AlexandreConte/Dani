interface SpecialItemProps {
  children: string
}

export default function SpecialItem(props: SpecialItemProps) {
  return (
    <div className="bg-neutral-200  text-black p-4 rounded-lg hover:-translate-y-2 hover:bg-white transition-all duration-200 lg:flex hidden">
      <h2 className="font-normal text-lg lg:px-8">{props.children}</h2>
    </div>
  )
}
