// tabler icons
import { IconBrandWhatsapp } from "@tabler/icons-react"

// components
import Button from "./AppointmentButton"

// styles
import styles from "@/styles/Logo.module.css"
import { Slide } from "react-awesome-reveal"

interface BannerProps {
    h2: string
    button: string
    link: string
    className?: string
}

export default function AppointmentBanner({ h2, button, link, className }: BannerProps) {
    return (
        <Slide direction="right">
            <div className={`flex flex-col items-center justify-center gap-4 py-36 ${className ?? ""}`}>
                <h2 className={`${styles.logo} text-4xl text-center`}>Dra Daniela Conte</h2>
                <h2 className="text-white font-extralight hidden md:flex justify-center items-center">{h2}</h2>
                <Button
                    link={link}
                    image={<IconBrandWhatsapp stroke={1} />}
                >
                    {button}
                </Button>
            </div>
        </Slide>
    )
}