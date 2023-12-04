//Components
import Image from "next/image"
import Banner from "./AppointmentBanner"
import Area from "./common/Area"
import FullWidth from "./common/FullWidth"
// images
import backgroudImage from "public/backgrounds/dani-bg.jpg"

export interface AppointmentProps {
    children: any
    className?: string
}

export default function Appointment({ children, className }: AppointmentProps) {
    return (
        <div className={`
            flex justify-center items-center
            bg-fixed
            bg-cover
            w-full
            -z-10
            bg-[#bebebe54]
            h-screen
            max-[410px]:h-[550px]
            ${className}
    `}>
            <Image
                src={backgroudImage}
                alt="Dra. Daniela Aline Conte trabalhando na sua clínica odontológica em Florianópolis"
                className="fixed -z-20 xl:translate-y-[125px] w-screen h-fit"
            />
            <FullWidth className={`
                flex justify-center items-center
            `}>
                <Area className="
                    flex flex-col justify-between items-center md:flex-row
                    py-10 gap-y-8 sm:py-48 sm:gap-y-0
            ">
                    {children}
                </Area>
            </FullWidth>
        </div>
    )
}