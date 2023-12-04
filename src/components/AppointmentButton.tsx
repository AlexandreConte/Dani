import React from "react"

interface ButtonProps {
    link: string
    children: any
    image: any
    className?: string
}

export default function AppointmentButton({ link, children, className, image }: ButtonProps) {
    return (
        <a href={link} className={`
            rounded-lg p-3 hover:-translate-y-1 transition-all duration-200
            text-white font-extralight
            ${className ?? ""
            }`}>
            <div className="flex items-center justify-center gap-2">
                <span className="text-white">
                    {React.cloneElement(image, {
                        size: 25
                    })}
                </span>
                {children}
            </div>
        </a>
    )
}