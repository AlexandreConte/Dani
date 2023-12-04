import Image from "next/image"
import Button from "./AppointmentButton"
import logoImage from 'public/logo.png'

import { IconBrandWhatsapp } from "@tabler/icons-react"

interface BannerProps {
    buttonTitle: string
    link: string
    className?: string
}

export default function Banner({ buttonTitle, link, className }: BannerProps) {
    return (
        <div className={`flex flex-col items-center gap-4 ${className ?? ""}`}>
            <Image src={logoImage} alt="Logo da Dra Daniela Aline Conte" width={200} className="w-auto" />
            <Button
                link={link}
                image={<IconBrandWhatsapp stroke={1} />}
                className=""
            >
                {buttonTitle}
            </Button>
        </div>
    )
}