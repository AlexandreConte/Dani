import backgroundImage from "@/../public/images/backgrounds/dani-bg2.webp"
import backgroundImage2 from "@/../public/images/backgrounds/consultorio-bg.webp"
import Image from "next/image"
import Slider from "@/components/Shared/Slider"
import Area from "@/components/Shared/Area"

interface ClinicProps {
  className?: string
}

export default function Clinic({ className }: ClinicProps) {
  return (
    <div className={`flex-col-center pt-[50px] pb-[25px] ${className ?? ""}`}>
      {/* <span className="text-white text-2xl mb-10 font-semibold">A clínica</span> */}
      <Area className="
        flex justify-center flex-col lg:flex-row gap-x-4
        w-full h-full
        gap-y-8 mx-8
    ">
        <Slider direction="left" className="flex items-center justify-center mx-4">
          <Image
            className="object-contain lg:max-w-max lg:max-h-[480px] max-[1024px]:w-[320px]"
            src={backgroundImage}
            alt="Dentista sorrindo sentada em seu consultório com uma agenda na mesa."
          />
        </Slider>
        <Slider direction="right" className="flex items-center justify-center mx-4">
          <Image
            className="object-contain lg:max-w-max lg:max-h-[480px] max-[1024px]:w-[320px] lg:w-full"
            src={backgroundImage2}
            alt="Consultório da Dentista em Santa Catarina, Florianópolis - Campeche"
          />
        </Slider>
      </Area>
    </div>
  )
}
