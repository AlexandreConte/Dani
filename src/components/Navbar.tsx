import { IconDental, IconHome, IconMapPinFilled } from "@tabler/icons-react"
import { NavItem } from "./NavItem"

export interface NavProps {
  className?: string
}

export default function Navbar({ className }: NavProps) {
  return (
    <nav className={`
      ${className ?? ""}
    `}>
      <ul className="flex justify-between items-center list-none gap-x-2 md:gap-x-4">
        <NavItem
          icon={IconHome}
          link="#"
          className="hidden lg:flex"
        >
          Início
        </NavItem>
        <NavItem
          icon={IconDental}
          link="#sobre"
          className="hidden md:flex"
        >
          Sobre
        </NavItem>
        <NavItem
          icon={IconMapPinFilled}
          link="#endereco"
          ariaLabel="Localização no Google Maps."
          className="hidden min-[425px]:flex"
        >
          Endereço
        </NavItem>
      </ul>
    </nav>
  )
}