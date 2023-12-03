import Area from "./common/Area"
import FullWidth from "./common/FullWidth"
import Logo from "./common/Logo"
import Nav, { IconsAndDescriptionsNavbarItems } from "./Navbar"

interface HeaderProps {
    logoImage: any
    navbarItens: IconsAndDescriptionsNavbarItems[]
}

export default function Header({ logoImage, navbarItens }: HeaderProps) {
    return (
        <>
            <FullWidth className={`
                bg-[#67c3c6]
                flex justify-center items-center
                fixed top-0 z-10
                h-[125px]
                border-b border-white
        `}>
                <Area>
                    <header className="flex items-center justify-between flex-wrap py-6 sm:py-10 mr-4">
                        <Logo
                            logoImage={logoImage}
                            altLogo="Dra. Daniela Aline Conte especialista e mestre em prótese e reabilitação oral"
                        />
                        <Nav
                            navbarItens={navbarItens}
                        />
                    </header>
                </Area>
            </FullWidth>
        </>
    )
}