// tabler icons
import { IconBrandWhatsapp } from "@tabler/icons-react"

// components
import AppointmentButton from "./AppointmentButton"

// styles
import styles from "@/styles/Logo.module.css"
import { Slide } from "react-awesome-reveal"

interface BannerProps {
    h1: string
    button: string
    link: string
    className?: string
}

export default function AppointmentBanner({ h1, button, link, className }: BannerProps) {
    return (
        <div className="py-24">
            <span className="text-center flex items-center flex-col text-2xl text-white mb-8">Contato</span>
            <Slide direction="right">
                <div className={`flex flex-col items-center justify-center gap-4 ${className ?? ""}`}>
                    <h2 className={`${styles.logo} text-4xl text-center`}>Dra Daniela Conte</h2>
                    <h1 className="
                    text-white font-extralight text-xl
                    flex justify-center items-center 
                    text-center
                    ">{h1}</h1>
                    <AppointmentButton
                        link={link}
                        image={<IconBrandWhatsapp />}
                    >
                        {button}
                    </AppointmentButton>
                </div>
            </Slide>
        </div>
    )
}