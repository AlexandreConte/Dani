import Image from "next/image"
import Button from "./AppointmentButton"
import logoImage from 'public/logo.png'

interface BannerProps {
    buttonTitle: string
    link: string
    className?: string
}

export default function Banner({ buttonTitle, link, className }: BannerProps) {
    return (
        <div className={`flex flex-col items-center gap-2 ${className ?? ""}`}>
            <Image src={logoImage} alt="Dani" width={200} className="w-auto" />
            <Button link={link} className="bg-gradient-to-r from-">
                {buttonTitle}
            </Button>
        </div>
    )
}