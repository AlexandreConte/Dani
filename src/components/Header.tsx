// REACT HOOKS
import { useEffect, useState } from "react"

// COMPONENTS
import FullWidth from "./common/FullWidth"
import Logo from "./common/Logo"
import Nav from "./Navbar"
import AreaWithMarginX from "./common/AreaWithMarginX"

export default function Header() {

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
        bg-wTransparency
        flex-center
        fixed top-0 left-0 z-50
        h-[125px]
        border-b border-white
        transition-transform duration-500
        backdrop-blur-lg
        shadow-lg
      ${isHeaderVisibile ? "" : "-translate-y-[125px]"}
    `}>
        <AreaWithMarginX>
          <header className="flex items-center justify-between flex-wrap py-6 sm:py-10">
            <Logo />
            <Nav />
          </header>
        </AreaWithMarginX>
      </FullWidth>
      <div className="w-full bg h-[125px]"></div>
    </>
  )
}