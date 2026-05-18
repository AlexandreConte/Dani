import Image from "next/image";
import { IconBrandInstagram } from "@tabler/icons-react";
import Area from "@/components/Shared/Area";
import styles from "../styles/Logo.module.css"

export interface ProfessionalCardProps {
  name: string
  image: any
  instaUrl: string
  local: string
}

export default function ProfessionalCard({ name, image, instaUrl, local }: ProfessionalCardProps) {
  return (
    <Area className="flex-col-center">
      <span id="sobre" className="my-4 text-white text-center w-screen text-2xl font-semibold">Sobre</span>
      <div className={`
        lg:w-[500px] w-auto
        bg-neutral-100 mx-4 rounded-xl py-8
        transition-all duration-300
      `}>
        <Image src={image} alt={name} className="w-[200px] m-auto rounded-full border-2 border-[#cb8157]" />
        <h2 className={`${styles.logo} text-4xl text-center mt-4 text-[#cb8157] w-fit px-3 sm:px-6 py-1 mx-auto mb-2 rounded-xl`}>
          {name}
        </h2>
        <h1 className="text-center text-zinc-600 mb-4 font-medium px-4">Dentista Especialista e Mestre em Prótese e Reabilitação oral</h1>
        <h3 className="text-center mx-6 my-2 text-zinc-800">{local}</h3>
        <div className="flex justify-center items-center">
          <a href={instaUrl} className="flex justify-center items-center hover:scale-110 transition-transform w-fit duration-500" target="_blank">
            <span className="bg-grandient-to-r from-red-500 to-blue-500 bg-">
              <IconBrandInstagram size={35} color="#D24E60" strokeWidth={1.5} />
            </span>
            <span className="
              bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent
              font-bold
            ">
              Instagram
            </span>
          </a>
        </div>
      </div>
    </Area>
  )
}