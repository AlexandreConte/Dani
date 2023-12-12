import React from "react"

interface ButtonProps {
    link: string
    children: any
    image: any
    className?: string
}

export default function AppointmentButton({ link, children, className, image }: ButtonProps) {
    return (
        <a className={`
            rounded-lg p-3
            font-extralight
            ${className ?? ""}
            `}
            href={link}
            id="contatos"
        >
            <div className="flex items-center justify-center gap-2 hover:-translate-y-1 transition-all duration-200">
                <span className="text-black">
                    {React.cloneElement(image, {
                        size: 25
                    })}
                </span>
                <p className="text-black font-normal underline">{children}</p>
            </div>
        </a>
    )
}