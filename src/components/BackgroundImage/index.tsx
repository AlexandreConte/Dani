import Image from "next/image"
import backgroundImage from "public/images/backgrounds/dani-bg.jpg"

export default function BackgroundImage() {
  return (
    <div className={`
      w-full flex h-[30vh] md:h-[50vh] lg:h-screen
      justify-center items-center
      bg-[#bebebe54] bg-cover
    `}>
      <Image
        src={backgroundImage}
        alt="Dra. Daniela Aline Conte trabalhando na sua clínica odontológica em Florianópolis"
        className={`flex fixed -z-20 w-full h-auto`}
      />
    </div>
  )
}