//Components
import Image from "next/image"
import Area from "./common/Area"
import FullWidth from "./common/FullWidth"
import { StaticImport } from "next/dist/shared/lib/get-img-props"
import { ReactNode, useEffect, useState } from "react"

export interface AppointmentProps {
    backgroundImage: StaticImport
    altImage: string
    children?: ReactNode
    className?: string
}

export default function Appointment({ children, className, backgroundImage, altImage }: AppointmentProps) {

    const [scrollOffset, setScrollOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollOffset(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    return (
        <div className={`
            hidden lg:flex justify-center items-center
            bg-[#bebebe54] bg-cover w-full lg:h-screen
            z-20
            ${className}
        `}>
            <Image
                src={backgroundImage}
                alt={altImage}
                className={`fixed -z-20 object-center w-full h-auto -translate-y-`}
                style={{ transform: `translateY(${scrollOffset * .8}px)` }}
            />
            <FullWidth className={`
                flex justify-center items-center
            `}>
                <Area className="
                    flex flex-col justify-center items-center md:flex-row md:justify-start 
                    md:ml-8 py-10 gap-y-8 sm:py-48 sm:gap-y-0
            ">
                    {children ?? null}
                </Area>
            </FullWidth>
        </div>
    )
}