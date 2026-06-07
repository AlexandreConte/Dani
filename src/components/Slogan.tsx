import Image from "next/image";
import icon from "@/../public/dental.svg";
import background from "@/../public/images/backgrounds/dani-bg.jpg";

export default function Slogan() {
  return (
    <div className={`
      w-full flex h-[400px] md:h-screen lg:h-screen
      justify-center items-center
      bg-[#adadad92] z-0
    `}>
      <Image
        src={background}
        alt=""
        priority
        className={`fixed top-0 left-0 max-w-full h-[400px] md:h-screen -z-10 object-cover translate-y-28`}
      />
      <div className="z-10 md:-translate-y-20 lg:-translate-y-20 xl:-translate-y-24">
        <h1 className="flex flex-col text-center text-white">
          <span className="text-2xl min-[425px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter">
            Conquiste o sorriso
          </span>
          <span className="flex justify-center items-center text-2xl min-[425px]:text-3xl translate-x-1 md:gap-4 xl:gap-3 xl:ml-2.5 sm:text-4xl md:text-[44px] lg:text-[55px] tracking-widest font-extralight">
            dos seus sonhos <Image src={icon} alt="" className="sm:w-10 md:w-14 xl:w-20" />
          </span>
        </h1>
      </div>
    </div>
  )
}
