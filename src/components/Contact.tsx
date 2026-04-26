import styles from "@/styles/Logo.module.css"
import Slider from "@/components/Shared/Slider"
import TalkButton from "./TalkButton"

interface ContactProps {
  className?: string
}

export default function Contact({ className }: ContactProps) {
  return (
    <div className={`flex-col-center pt-[50px] pb-[50px] mx-2 ${className ?? ""}`}>
      <span className="text-center flex-col-center text-2xl text-white mb-8 font-semibold">Contato</span>
      <Slider direction="right">
        <div className={`flex-col-center ${className ?? ""}`}>
          <h2 className={`${styles.logo} text-4xl text-center md:text-5xl my-6`}>Dra Daniela Conte</h2>
          <h1 className="
            text-white font-normal text-xl md:text-2xl
            flex-center
            text-center my-4
          ">
            Especialista e Mestre em Prótese e Reabilitação Oral
          </h1>
          <TalkButton />
        </div>
      </Slider>
    </div>
  )
}
