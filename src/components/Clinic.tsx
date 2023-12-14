// React Awesome Reveal
import { Slide } from "react-awesome-reveal"

// IMAGES
import backgroundImage from "public/backgrounds/dani-bg2.jpg"
import backgroundImage2 from "public/backgrounds/consultorio-bg.jpg"

// Next Components
import Image from "next/image"
import Area from "./common/Area"


interface ClinicProps {
    className?: string
}

export default function Clinic({ }: ClinicProps) {
    return (
        <Area className="flex justify-between items-center pt-32 w-full mx-auto flex-col lg:flex-row">
            <Slide direction="left" className={`flex justify-between items-center`}>
                <Image
                    className="max-h-screen w-fit"
                    src={backgroundImage}
                    alt="Dentista Sorridente sentada em seu consultório com uma agenda na mesa"
                />
            </Slide>
            <Slide direction="left">
                <h1 className="flex justify-center items-center mx-4 text-center max-w-xs text-white text-2xl py-10 font-extralight">Dentista Especialista e Mestre em Prótese e Reabilitação Oral em Campeche - Florianópolis, Santa Catarina</h1>
            </Slide>
            <Slide direction="left">
                <Image
                    className="max-h-screen w-fit"
                    src={backgroundImage2}
                    alt="Consultório da Dentista em Florianópolis"
                />
            </Slide>
        </Area>
    )
}
