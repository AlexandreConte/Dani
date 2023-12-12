//Components
import Image from "next/image"
import Area from "./common/Area"
import FullWidth from "./common/FullWidth"
import { StaticImport } from "next/dist/shared/lib/get-img-props"

export interface AppointmentProps {
    backgroundImage: StaticImport
    altImage: string
    children: any
    className?: string
}

export default function Appointment({ children, className, backgroundImage, altImage }: AppointmentProps) {
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
                src={backgroundImage}
                alt={altImage}
                className="fixed -z-20 xl:translate-y-[125px] w-screen h-fit"
            />
            <FullWidth className={`
                flex justify-center items-center
            `}>
                <Area className="
                    flex flex-col justify-center items-center md:flex-row md:justify-start md:ml-8
                    py-10 gap-y-8 sm:py-48 sm:gap-y-0
            ">
                    {children}
                </Area>
            </FullWidth>
        </div>
    )
}