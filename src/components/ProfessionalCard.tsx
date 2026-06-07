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
    <div className="flex-col-center max-w-[500px]
        bg-neutral-100 rounded-xl py-4">
      {/* <span id="sobre" className="my-4 text-white text-center w-screen text-2xl font-semibold">Sobre</span> */}
      <div>
        <div className="text-balance px-8">
          <Image src={image} alt={name} className="w-[200px] m-auto rounded-full border-2 border-[#cb8157]" />
          <h2 className={`${styles.logo} text-2xl sm:text-4xl text-center mt-2 text-[#cb8157] w-fit px-3 sm:px-6 py-1 mx-auto mb-4 rounded-xl`}>
            {name}
          </h2>
          <h1 className="text-center text-[#2D4F40] mb-4 px-6 font-[600]">Dentista Especialista e Mestre em Prótese e Reabilitação Oral</h1>
          <h3 className="text-center my-2 text-[#2D4F40] px-6 py-2 font-[500]">{local}</h3>
          <div className="flex justify-center items-center">
            <a href={instaUrl} className="flex justify-center items-center hover:scale-110 transition-transform w-fit duration-500 pt-2" target="_blank">
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
      </div>
    </div>
  )
}
