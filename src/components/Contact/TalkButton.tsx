import { IconBrandWhatsapp } from "@tabler/icons-react"

interface TalkButtonProps {
  className?: string
}

export default function TalkButton({ className }: TalkButtonProps) {
  return (
    <a href="https://wa.me/5548999299977"
      target="_blank"
      id="contatos"
      className={`
        flex-center
        ${className ?? ""}
    `}>
      <div className="
        flex-center gap-2
        text-white
        w-full
        hover:-translate-y-1 transition-all duration-200
      ">
        <span className="flex-center text-center text-white">
          <IconBrandWhatsapp strokeWidth={1.5} color="#fff" size={30} />
        </span>
        <span className="flex-center text-center font-normal hover:underline text-lg md:text-xl">
          +55 (48) 9 9929-9977
        </span>
      </div>
    </a>
  )
}