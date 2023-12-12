import Image from "next/image"
import Button from "./AppointmentButton"

import { IconBrandWhatsapp } from "@tabler/icons-react"
import { StaticImport } from "next/dist/shared/lib/get-img-props"

interface BannerProps {
    h2: string
    button: string
    link: string
    className?: string
    altImage: string
    image: StaticImport
}

export default function AppointmentBanner({ h2, button, link, className, altImage, image }: BannerProps) {
    return (
        <div className={`flex flex-col items-center gap-4 ${className ?? ""}`}>
            <Image src={image} alt={altImage} className="w-[300px]" />
            <h2 className="text-white font-extralight hidden md:flex justify-center items-center">{h2}</h2>
            <Button
                link={link}
                image={<IconBrandWhatsapp stroke={1} />}
            >
                {button}
            </Button>
        </div>
    )
}