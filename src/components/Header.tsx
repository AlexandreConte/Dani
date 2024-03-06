// REACT HOOKS
import { useEffect, useState } from "react"

// COMPONENTS
import Area from "./common/Area"
import FullWidth from "./common/FullWidth"
import Logo from "./common/Logo"
import Nav, { IconsAndDescriptionsNavbarItems } from "./Navbar"

interface HeaderProps {
  navbarItens: IconsAndDescriptionsNavbarItems[]
}

export default function Header({ navbarItens }: HeaderProps) {

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
    <>
      <FullWidth className={`
      bg-[#67c3c6e6]
      flex justify-center items-center
      fixed top-0 z-10
      h-[125px]
      border-b border-white
      transition-transform duration-500
      ${isHeaderVisibile ? "" : "-translate-y-[125px]"}
    `}>
        <Area>
          <header className="flex items-center justify-between flex-wrap py-6 sm:py-10 mr-4">
            <Logo />
            <Nav
              navbarItens={navbarItens}
            />
          </header>
        </Area>
      </FullWidth>
      <div className="w-full bg-[#67C3C6] h-[125px]"></div>
    </>
  )
}