// styles
import styles from "@/styles/Logo.module.css"

// Icons
import { IconBrandWhatsapp } from "@tabler/icons-react"
import Slider from "@/components/common/Slider"

interface ContactProps {
  className?: string
}

export default function Contact({ className }: ContactProps) {
  return (
    <div className={`flex-col-center py-12 mx-2 ${className ?? ""}`}>
      <span className="text-center flex-col-center text-2xl text-white mb-8 font-semibold">Contato</span>
      <Slider direction="right">
        <div className={`flex-col-center gap-4 ${className ?? ""}`}>
          <h2 className={`${styles.logo} text-4xl text-center`}>Dra Daniela Conte</h2>
          <h1 className="
            text-white font-extralight text-xl
            flex-center
            text-center
          ">
            Dentista Especialista e Mestre em Prótese e Reabilitação Oral
          </h1>
          <TalkButton />
        </div>
      </Slider>
    </div>
  )
}


interface TalkButtonProps {
  className?: string
}

export function TalkButton({ className }: TalkButtonProps) {
  return (
    <a className={`
            flex-center
            ${className ?? ""}
            `}
      href="https://wa.me/5548999299977"
      target="_blank"
      id="contatos"
    >
      <div className="
                flex-center gap-2
                text-white
                w-full
                hover:-translate-y-1 transition-all duration-200
            ">
        <span className="flex-center text-center text-white">
          <IconBrandWhatsapp strokeWidth={1} color="#fff" size={30} />
        </span>
        <span className="flex-center text-center font-normal hover:underline">Conversar com a especialista</span>
      </div>
    </a>
  )
}