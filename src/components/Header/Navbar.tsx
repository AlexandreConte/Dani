import { IconDental, IconHome, IconMapPinFilled, IconPhone } from "@tabler/icons-react"
import { NavItem } from "./NavItem"

export interface NavProps {
  className?: string
}

export default function Navbar({ className }: NavProps) {
  const visiblityForNavItem = "hidden md:flex"

  return (
    <nav className={`
      ${className ?? ""}
    `}>
      <ul className="flex justify-between items-center list-none">
        <NavItem
          icon={<IconHome />}
          link="#"
          className={`${visiblityForNavItem}`}
        >
          Início
        </NavItem>
        <NavItem
          icon={<IconDental />}
          link="#sobre"
          className={`${visiblityForNavItem}`}
        >
          Sobre
        </NavItem>
        <NavItem
          icon={<IconMapPinFilled />}
          link="#endereco"
          ariaLabel="Localização no Google Maps."
          className={`${visiblityForNavItem}`}
        >
          Endereço
        </NavItem>
        <NavItem
          icon={<IconPhone />}
          link="https://wa.me/5548999299977"
          target="_blank"
          ariaLabel="Contato por WhatsApp."
          textHidden
        >
          Contato
        </NavItem>
      </ul>
    </nav>
  )
}