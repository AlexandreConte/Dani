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
        lg:w-[350px] w-auto
        bg-neutral-200 mx-4 rounded-xl py-4
        hover:bg-neutral-100
        transition-all duration-300`
      }>
        <Image src={image} alt={name} className="w-[200px] m-auto rounded-full border-2 border-[#C1A497]" />
        <h2 className="text-center mx-6 my-4 text-lg font-medium text-zinc-900">{name}</h2>
        <h1 className="text-center mx-6 my-2 text-zinc-800">{specialization}</h1>
        <h1 className="text-center mx-6 my-2 text-zinc-800">{local}</h1>
        <div className="flex justify-center items-center">
          <a href={instaUrl} className="flex justify-center items-center hover:scale-110 transition-transform w-fit" target="_blank">
            <span className="bg-grandient-to-r from-red-500 to-blue-500 bg-">
              <IconBrandInstagram size={35} color="#D24E60" strokeWidth={1.5} />
            </span>
            <span className="
              bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent
              font-semibold
            ">
              Instagram
            </span>
          </a>
        </div>
      </div>
    </Area>
  )
}