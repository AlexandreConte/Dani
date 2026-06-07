import styles from "@/styles/Logo.module.css"
import Slider from "@/components/Shared/Slider"
import TalkButton from "./TalkButton"

interface ContactProps {
  className?: string
}

export default function Contact({ className }: ContactProps) {
  return (
    <div className={`flex-col-center pt-[10px] pb-[20px] mx-2 ${className ?? ""}`}>
      {/* <span className="text-center flex-col-center text-2xl text-white mb-8 font-semibold">Contato</span> */}
      <Slider direction="right">
        <div className={`flex-col-center ${className ?? ""} px-2`}>
          <h2 className={`${styles.logo} text-center md:text-5xl mt-6 mb-2 text-3xl sm:text-4xl`}>Dra Daniela Conte</h2>
          <h1 className="
            text-[#2D4F40] font-normal text-base lg:text-lg
            flex-center
            text-center my-4 px-3
          ">
            Dentista Especialista e Mestre <br />em Prótese e Reabilitação Oral
          </h1>
          <TalkButton />
        </div>
      </Slider>
    </div>
  )
}
