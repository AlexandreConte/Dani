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
        <nav>
            <ul className="flex justify-between list-none">
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
            </ul>
        </nav>
    )
}