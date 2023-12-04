import React from "react"

interface NavItemProps {
    children: any
    link: string
    className?: string
    alwaysAvailable?: boolean
    icon?: any
}

export default function NavItem(props: NavItemProps) {
    return (
        <a href={props.link} className={`
            border-b-2 border-transparent 
            hover:border-white transition-colors
            ${props.alwaysAvailable ? "" : "hidden"}
            lg:flex`}
        >
            <div className="flex items-center">
                {props.icon ? (
                    <div className="flex items-center justify-center gap-1 text-white">
                        <>
                            {React.cloneElement(props.icon,
                                {
                                    size: 18,
                                    color: "white",
                                }
                            )}
                        </>
                        {props.children}
                    </div>
                )
                    : (<div>{props.children}</div>)
                }
            </div>
        </a>
    )
}