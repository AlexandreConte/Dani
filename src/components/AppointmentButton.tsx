import { IconBrandWhatsapp } from "@tabler/icons-react"

interface AppointmentButtonProps {
    className?: string
}

export default function AppointmentButton({ className }: AppointmentButtonProps) {
    return (
        <a className={`
            flex-center
            ${className ?? ""}
            `}
            href="https://wa.me/5548999299977"
            target="_blank"
            id="contatos"
        >
            <div className="
                flex-center gap-2
                text-white
                w-full
                hover:-translate-y-1 transition-all duration-200
            ">
                <span className="flex-center text-center text-white">
                    <IconBrandWhatsapp strokeWidth={1} color="#fff" size={30} />
                </span>
                <span className="flex-center text-center font-normal hover:underline">Conversar com a especialista</span>
            </div>
        </a>
    )
}