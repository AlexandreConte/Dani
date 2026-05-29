import Logo from "./Shared/Logo"
import Navbar from "./Navbar"
import Area from "./Shared/Area"

export default function Header() {
  return (
    <div className="lg:max-w-7xl">
      <div className="h-[125px]"></div>
      <div className={`
        bg-wTransparency
        w-full
        flex-center
        fixed top-0 left-0 z-50
        h-[125px]
        transition-transform duration-500
        backdrop-blur-lg
        shadow-lg
        min-w-screen max-w-[100vw]
    `}>
        <Area>
          <header className="
            w-full
            flex-center
            min-[425px]:justify-between
            py-6 mx-auto px-2
            sm:py-10
            min-[375px]:px-2
          ">
            <Logo />
            <Navbar className="hidden min-[320px]:flex" />
          </header>
        </Area>
      </div>
    </div>
  )
}
