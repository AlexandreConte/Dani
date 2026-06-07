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
        w-full mb-4
        bg-[#2D4F40] px-8 py-2 rounded-lg shadow-lg
        hover:scale-105 active:scale-105 transition-transform 
        hover:shadow-xl active:shadow-xl
      ">
        <span className="flex-center text-center">
          <IconBrandWhatsapp strokeWidth={1.5} color="#d4d4d8" size={30} />
        </span>
        <span className="flex-center text-center font-normal text-zinc-300">
          Entrar em contato
        </span>
      </div>
    </a>
  )
}
