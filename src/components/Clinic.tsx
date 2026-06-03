import backgroundImage from "@/../public/images/backgrounds/dani-bg2.jpg"
import backgroundImage2 from "@/../public/images/backgrounds/consultorio-bg.jpeg"
import Image from "next/image"
import Area from "@/components/Shared/Area"

interface ClinicProps {
  className?: string
}

export default function Clinic({ className }: ClinicProps) {
  return (
    <div className={`flex-col-center pt-[50px] pb-[25px] ${className ?? ""}`}>
      <span className="text-white text-2xl mb-10 font-semibold">A clínica</span>
      <Area className="
        flex justify-center flex-col lg:flex-row gap-x-4
        w-full max-w-[1440px] h-full
        px-4 gap-y-8
    ">
        <div className="flex items-center">
          <Image
            className="max-h-[80vh] w-full object-cover"
            src={backgroundImage}
            alt="Dentista sorrindo sentada em seu consultório com uma agenda na mesa."
          />
        </div>
        <div className="flex justify-center items-center">
          <Image
            className="max-h-[80vh] w-full object-cover lg:h-full"
            src={backgroundImage2}
            alt="Consultório da Dentista em Santa Catarina, Florianópolis - Campeche"
          />
        </div>
      </Area>
    </div>
  )
}
