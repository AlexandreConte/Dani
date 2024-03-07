import { cloneElement } from "react"

interface AppointmentButtonProps {
    link: string
    children: any
    image: any
    className?: string
}

export default function AppointmentButton({ link, children, className, image }: AppointmentButtonProps) {
    return (
        <a className={`
            rounded-lg p-3
            ${className ?? ""}
            `}
            href={link}
            id="contatos"
        >
            <div className="
                flex items-center justify-center 
                gap-2 
                text-white
                hover:-translate-y-1 transition-all duration-200 hover:text-green-900
            ">
                <span className="text-white">
                    {cloneElement(image, { strokeWidth: 1, size: 30 })}
                </span>
                <span className="font-normal underline">{children}</span>
            </div>
        </a>
    )
}