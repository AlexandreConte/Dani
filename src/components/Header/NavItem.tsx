import { cloneElement } from "react"

interface NavItemProps {
  children: any
  link: string
  className?: string
  icon: any
  target?: "_blank"
  textHidden?: boolean
  ariaLabel?: string
}

export function NavItem({ children, link, icon, target, textHidden, className, ariaLabel }: NavItemProps) {
  const hidden = textHidden ? "hidden" : "flex"

  return (
    <li>
      <a href={link}
        target={target ?? "_self"}
        aria-label={ariaLabel ?? ""}
        className={`
          border-b-2 border-transparent
          hover:border-white transition-colors
          flex
          lg:mx-1
          mx-3
          ${className ?? ""}
        `}
      >
        <div className="flex-center">
          <div className="flex-center gap-1.5 text-white">
            <span>{cloneElement(icon, { size: 18, color: "white" })}</span>
            <span className={`
              min-[425px]:flex
              ${hidden}
            `}>
              {children}
            </span>
          </div>
        </div>
      </a>
    </li>
  )
}