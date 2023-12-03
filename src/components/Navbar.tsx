import NavItem from "./NavItem"

export interface NavProps {
    navbarItens: IconsAndDescriptionsNavbarItems[]
}

export interface IconsAndDescriptionsNavbarItems {
    image: any
    description: string
    url: string
    alwaysAvailable?: boolean
}

export default function Navbar({ navbarItens }: NavProps) {
    return (
        <nav className="flex justify-between gap-5">
            {navbarItens.map((it, i) => (
                <NavItem
                    key={`${it.description}-${i}`}
                    link={it.url}
                    icon={it.image}
                    alwaysAvailable={it.alwaysAvailable}
                >
                    {it.description}
                </NavItem>)
            )}
        </nav>
    )
}
