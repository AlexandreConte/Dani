import Image from "next/image";
import { IconBrandInstagram } from "@tabler/icons-react";
import Area from "@/components/common/Area";

export interface ProfessionalCardProps {
  name: string
  image: any
  specialization: string
  instaUrl: string
  local: string
}

export default function ProfessionalCard({ name, image, specialization, instaUrl, local }: ProfessionalCardProps) {
  return (
    <Area className="flex-col-center">
      <span id="sobre" className="my-4 text-white text-center w-screen text-2xl font-semibold">Sobre</span>
      <div className={`
        lg:w-[500px] w-auto
        bg-neutral-200 mx-4 rounded-xl py-8
        hover:bg-neutral-100
        transition-all duration-300
        selection:bg-[#328185] selection:text-white
      `}>
        <Image src={image} alt={name} className="w-[200px] m-auto rounded-full border-2 border-[#C1A497] select-none" />
        <h2 className="text-center mt-4 text-lg font-medium text-white bg w-fit px-3 py-1 mx-auto mb-2 rounded-xl
          selection:text-black selection:bg-white
        ">
          {name}
        </h2>
        <h1 className="text-center text-zinc-600 mb-4">Dentista</h1>
        <h1 className="text-center mx-6 my-2 text-zinc-800">{specialization}</h1>
        <h1 className="text-center mx-6 my-2 text-zinc-800">Professora em Instituto de Odontologia das Américas</h1>
        <h1 className="text-center mx-6 my-2 text-zinc-800">{local}</h1>
        <div className="flex justify-center items-center">
          <a href={instaUrl} className="flex justify-center items-center hover:scale-110 transition-transform w-fit" target="_blank">
            <span className="bg-grandient-to-r from-red-500 to-blue-500 bg-">
              <IconBrandInstagram size={35} color="#D24E60" strokeWidth={1.5} />
            </span>
            <span className="
              bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent
              font-semibold select-none
            ">
              Instagram
            </span>
          </a>
        </div>
      </div>
    </Area>
  )
}