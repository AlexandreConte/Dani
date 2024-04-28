import Image from "next/image"
import backgroundImage from "public/backgrounds/dani-bg.jpg"

export default function BackgroundImage() {
  return (
    <div className={`
            hidden h-0
            flex-center
            bg-[#bebebe54] bg-cover 
            w-full md:h-[50vh] lg:h-screen
            shadow-2xl
        `}>
      <Image
        src={backgroundImage}
        alt="Dra. Daniela Aline Conte trabalhando na sua clínica odontológica em Florianópolis"
        className={`fixed -z-20 object-center w-full h-auto hidden md:h-[50vh] lg:h-screen`}
      />
    </div>
  )
}