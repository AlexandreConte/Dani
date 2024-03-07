//Components
import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"
import { ReactNode, useEffect, useState } from "react"

export interface AppointmentProps {
    backgroundImage: StaticImport
    altImage: string
    children?: ReactNode
    className?: string
}

export default function Appointment({ className, backgroundImage, altImage }: AppointmentProps) {

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
            flex justify-center items-center
            bg-[#bebebe54] bg-cover w-full h-auto min-h-[30vh] lg:h-screen md:min-h-[50vh]
            z-20 
            shadow-2xl
            ${className}
        `}>
            <Image
                src={backgroundImage}
                alt={altImage}
                className={`fixed -z-20 object-center w-full h-auto`}
                style={{ transform: `translateY(${scrollOffset * .4}px)` }}
            />
        </div>
    )
}