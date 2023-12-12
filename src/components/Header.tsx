import { useEffect, useState } from "react"
import Area from "./common/Area"
import FullWidth from "./common/FullWidth"
import Logo from "./common/Logo"
import Nav, { IconsAndDescriptionsNavbarItems } from "./Navbar"
import Image from "next/image"
import { StaticImport } from "next/dist/shared/lib/get-img-props"

interface HeaderProps {
    logoImage: StaticImport
    navbarItens: IconsAndDescriptionsNavbarItems[]
}

export default function Header({ logoImage, navbarItens }: HeaderProps) {

    const [scrollY, setScrollY] = useState(0)
    const [isHeaderVisibile, setIsHeaderVisible] = useState<boolean>(true)

    useEffect(() => {
        function handleScroll() {
            const currentScroll = window.scrollY

            if (window.scrollY <= 125) {
                setIsHeaderVisible(true)
                return
            }

            if (currentScroll < scrollY) {
                setIsHeaderVisible(true)
            } else {
                setIsHeaderVisible(false)
            }

            setScrollY(currentScroll)
        }

        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [scrollY])

    return (
        <FullWidth className={`
                bg-[#67c3c6]
                flex justify-center items-center
                fixed top-0 z-10
                h-[125px]
                border-b border-white
                transition-transform duration-200
                ${isHeaderVisibile ? "" : "-translate-y-[125px]"}
            `}>
            <Area>
                <header className="flex items-center justify-between flex-wrap py-6 sm:py-10 mr-4">
                    <Logo
                        image={<Image className="w-60 md:w-96 lg:w-[500px] xl:w-[700px]" width={9000} src={logoImage} alt="Dra. Daniela Aline Conte especialista e mestre em prótese e reabilitação oral" />}
                    />
                    <Nav
                        navbarItens={navbarItens}
                    />
                </header>
            </Area>
        </FullWidth>
    )
}