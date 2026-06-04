import Image from "next/image";
import icon from "@/../public/dental.svg";
import background from "@/../public/images/backgrounds/dani-bg.jpg";

export default function BackgroundImage() {
  return (
    <div className={`
      w-full flex h-[400px] md:h-screen lg:h-screen
      justify-center items-center
      bg-[#adadad92] z-10
    `}>
      <Image
        src={background}
        alt=""
        priority
        className={`fixed top-0 left-0 max-w-full h-[400px] md:h-screen -z-20 object-cover translate-y-28`}
      />
      <div>
        <h1 className="flex flex-col text-center text-white -translate-y-[120px] md:-translate-y-36 lg:-translate-y-10 xl:-translate-y-24">
          <span className="text-lg sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tighter">
            Conquiste o sorriso
          </span>
          <span className="flex justify-center items-center text-base md:gap-4 xl:gap-3 xl:ml-2.5 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-widest font-extralight">
            dos seus sonhos <Image src={icon} alt="" className="sm:w-10 md:w-14 xl:w-20" />
          </span>
        </h1>
      </div>
    </div>
  )
}
