import { IconDental, IconHome, IconMapPinFilled, IconPhone } from "@tabler/icons-react"
import { cloneElement } from "react"

export interface NavProps {
  navbarItens: NavItemProps[]
}

export default function Navbar() {
  return (
    <nav>
      <ul className="flex justify-between list-none gap-x-2">
        <NavItem
          icon={<IconHome />}
          link="#"
        >
          Início
        </NavItem>
        <NavItem
          icon={<IconDental />}
          link="#sobre"
        >
          Sobre
        </NavItem>
        <NavItem
          icon={<IconMapPinFilled />}
          link="#endereco"
        >
          Endereço
        </NavItem>
        <NavItem
          icon={<IconPhone />}
          link="https://wa.me/5548999299977"
          alwaysAvailable
          target="_blank"
        >
          Contato
        </NavItem>
      </ul>
    </nav>
  )
}

interface NavItemProps {
  children: any
  link: string
  className?: string
  alwaysAvailable?: boolean
  icon: any
  target?: "_blank"
}

export function NavItem({ children, link, alwaysAvailable, icon, target, className }: NavItemProps) {
  return (
    <li>
      <a
        href={link}
        className={`
          border-b-2 border-transparent
          hover:border-white transition-colors
          ${alwaysAvailable ? "" : "hidden"}
          lg:flex lg:mx-1
          ${className ?? ""}
        `}
        target={target ?? "_self"}
      >
        <div className="flex items-center justify-center">
          <div className="flex items-center justify-center gap-1 text-white">
            {cloneElement(icon, { size: 18, color: "white", })}
            {children}
          </div>
        </div>
      </a>
    </li>
  )
}