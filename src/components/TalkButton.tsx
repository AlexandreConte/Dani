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
      ">
        <span className="flex-center text-center text-white">
          <IconBrandWhatsapp strokeWidth={1.5} color="#2D4F40" size={30} />
        </span>
        <span className="flex-center text-center font-normal hover:underline text-lg md:text-xl text-[#2D4F40]">
          Entrar em contato
        </span>
      </div>
    </a>
  )
}