// React Awesome Reveal
import { Slide } from "react-awesome-reveal"

// IMAGES
import backgroundImage from "public/backgrounds/dani-bg2.jpg"
import backgroundImage2 from "public/backgrounds/consultorio-bg.jpeg"

// Next Components
import Image from "next/image"

interface ClinicProps {
  className?: string
}

export default function Clinic({ }: ClinicProps) {
  return (
    <div className="
      flex justify-evenly items-center flex-col lg:flex-row
      pt-32 mx-auto 
      w-full max-w-[1440px]
    ">
      <Slide direction="left" className="flex items-center">
        <Image
          className="max-h-[80vh] w-full"
          src={backgroundImage}
          alt="Dentista Sorridente sentada em seu consultório com uma agenda na mesa"
        />
      </Slide>
      <Slide direction="left" className="flex items-center">
        <h1 className="
            flex justify-center items-center
            mx-4 py-10
            text-center
            text-white
            max-w-[320px]
            text-2xl font-extralight
            md:text-3xl
          ">
          Dentista Especialista e Mestre em Prótese e Reabilitação Oral em Campeche - Florianópolis, Santa Catarina
        </h1>
      </Slide>
      <Slide direction="left" className="flex items-center">
        <Image
          className="max-h-[80vh] w-fit"
          src={backgroundImage2}
          alt="Consultório da Dentista em Florianópolis"
        />
      </Slide>
    </div>
  )
}
