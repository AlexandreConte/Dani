// components
import AppointmentButton from "./AppointmentButton"

// styles
import styles from "@/styles/Logo.module.css"
import { Slide } from "react-awesome-reveal"

interface BannerProps {
    className?: string
}

export default function AppointmentBanner({ className }: BannerProps) {
    return (
        <div className="flex-col-center py-24 mx-2">
            <span className="text-center flex-col-center text-2xl text-white mb-8 font-semibold">Contato</span>
            <Slide direction="right">
                <div className={`flex-col-center gap-4 ${className ?? ""}`}>
                    <h2 className={`${styles.logo} text-4xl text-center`}>Dra Daniela Conte</h2>
                    <h1 className="
                        text-white font-extralight text-xl
                        flex-center
                        text-center
                    ">
                        Dentista Especialista e Mestre em Prótese e Reabilitação Oral
                    </h1>
                    <AppointmentButton />
                </div>
            </Slide>
        </div>
    )
}