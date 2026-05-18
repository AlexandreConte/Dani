import { ElementType } from "react"

interface NavItemProps {
  children: any
  link: string
  className?: string
  icon: ElementType
  target?: "_blank"
  textHidden?: boolean
  ariaLabel?: string
}

export function NavItem(props: NavItemProps) {
  const hidden = props.textHidden ? "hidden" : "flex"

  return (
    <li className="sm:text-lg lg:text-xl">
      <a href={props.link}
        target={props.target ?? "_self"}
        aria-label={props.ariaLabel ?? ""}
        className={`
          hover:border-[#2D4F40]
          flex
          lg:mx-1
          sm:mx-3
          ${props.className ?? ""}
        `}
      >
        <div className="flex-center">
          <div className="flex-center gap-1.5 text-[#2D4F40]">
            <span>
              <props.icon className="
                w-[18px]
                sm:w-[20px]
              " />
            </span>
            <span className={`
              min-[425px]:flex
              ${hidden}
            `}>
              {props.children}
            </span>
          </div>
        </div>
      </a>
    </li>
  )
}