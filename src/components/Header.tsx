import Logo from "./Shared/Logo"
import Navbar from "./Navbar"
import Area from "./Shared/Area"
import { useEffect, useState } from "react"

export default function Header() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY < lastScrollY) {
        setShow(true);
      }
      else if (window.scrollY > window.outerHeight + 125) {
        setShow(false);
      }
      else {
        setShow(true);
      }

      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <div className="lg:max-w-7xl">
      <div className={`h-[125px] bg ${show ? "" : "-translate-y-[125px]"} transition-transform duration-500`}></div>
      <div className={`
        bg
        w-full
        flex-col
        justify-center
        items-center
        fixed top-0 left-0 z-50
        h-[125px]
        backdrop-blur-lg
        shadow-lg
        transition-transform duration-500
        min-w-screen max-w-[100vw]
        ${show ? "translate-y-0" : "-translate-y-[125px]"}
    `}>
        <Area>
          <header className={`
            w-full
            flex-center
            min-[425px]:justify-between
            py-6 mx-auto px-2
            sm:py-10
            min-[375px]:px-2
            h-[125px]
          `}>
            <Logo />
            <Navbar className="hidden min-[320px]:flex" />
          </header>
        </Area>
      </div>
    </div>
  )
}
