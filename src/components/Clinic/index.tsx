// IMAGES
import backgroundImage from "public/images/backgrounds/dani-bg2.jpg"
import backgroundImage2 from "public/images/backgrounds/consultorio-bg.jpeg"

// Next Components
import Image from "next/image"

// Library
import Slider from "@/components/common/Slider"
import Area from "@/components/common/Area"

interface ClinicProps {
  className?: string
}

export default function Clinic({ className }: ClinicProps) {
  return (
    <div className={`flex flex-col items-center pt-[50px] pb-[25px] ${className ?? ""}`}>
      <span className="text-white text-2xl mb-10 font-semibold">A clínica</span>
      <Area className="
        flex justify-evenly flex-col lg:flex-row
        w-full max-w-[1440px] h-full
        px-4 gap-y-8
    ">
        <Slider direction="left" className="flex items-center">
          <Image
            className="max-h-[80vh] w-full object-cover"
            src={backgroundImage}
            alt="Dentista sorrindo sentada em seu consultório com uma agenda na mesa."
          />
        </Slider>
        <Slider direction="right" className="flex justify-center items-center">
          <Image
            className="max-h-[80vh] w-full object-cover"
            src={backgroundImage2}
            alt="Consultório da Dentista em Santa Catarina, Florianópolis - Campeche"
          />
        </Slider>
      </Area>
    </div>
  )
}