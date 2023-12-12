import React from "react"

interface NavItemProps {
    children: any
    link: string
    className?: string
    alwaysAvailable?: boolean
    icon?: any
}

export default function NavItem({ children, link, alwaysAvailable, icon, className }: NavItemProps) {
    return (
        <li>
            <a href={link}
                className={`
                    border-b-2 border-transparent
                    hover:border-white transition-colors
                    ${alwaysAvailable ? "" : "hidden"}
                    lg:flex lg:mx-1
                    ${className}
                `}
            >
                <div className="flex items-center justify-center">
                    {icon ? (
                        <div className="flex items-center justify-center gap-1 text-white">
                            <>
                                {React.cloneElement(icon,
                                    {
                                        size: 18,
                                        color: "white",
                                    }
                                )}
                            </>
                            {children}
                        </div>
                    )
                        : (<div>{children}</div>)
                    }
                </div>
            </a>
        </li>
    )
}