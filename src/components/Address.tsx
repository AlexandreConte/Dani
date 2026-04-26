import Slider from "@/components/Shared/Slider"
import Area from "./Shared/Area"

interface AdressProps {
  iframeSrc: string
  adressLine: string
  gMapsHref: string
}

export default function Adress({ iframeSrc, adressLine, gMapsHref }: AdressProps) {
  return (
    <Area className="flex-col-center mx-auto px-4">
      <span className="text-center w-full text-white flex flex-col items-center justify-center text-2xl font-semibold">Endereço</span>
      <Slider>
        <div id="endereco" className="mt-8 flex-col-center">
          <iframe src={iframeSrc} className="w-full h-[300px]" loading="lazy" title="Endereço"></iframe>
          <div className="pt-8 py-16 flex flex-col justify-center items-center px-4 text-center">
            <address className="text-white text-lg">{adressLine}</address>
            <a href={gMapsHref} target="_blank" className="underline text-white mt-4">
              Google Maps
            </a>
          </div>
        </div>
      </Slider>
    </Area>
  )
}