import { useEffect, useState } from "react"
import FullWidth from "../common/FullWidth"
import Logo from "../common/Logo"
import Navbar from "./Navbar"
import Area from "../common/Area"

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

      currentScroll < scrollY ?
        setIsHeaderVisible(true) : setIsHeaderVisible(false);

      setScrollY(currentScroll)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)

  }, [scrollY])

  return (
    <>
      <FullWidth className={`
        bg-wTransparency
        w-full
        flex-center
        fixed top-0 left-0 z-50
        h-[125px]
        transition-transform duration-500
        backdrop-blur-lg
        shadow-lg
      ${isHeaderVisibile ? "" : "-translate-y-[125px]"}
    `}>
        <Area>
          <header className="
            w-full 
            flex items-center justify-center flex-wrap
            min-[320px]:justify-between
            py-6 mx-auto
            sm:py-10
            min-[375px]:px-2
          ">
            <Logo />
            <Navbar className="hidden min-[320px]:flex" />
          </header>
        </Area>
      </FullWidth>
      <div className="w-full h-[125px]"></div>
    </>
  )
}