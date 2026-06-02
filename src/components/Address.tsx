import { IconBrandGoogleMaps, IconMap, IconMap2, IconMapPin, IconMapPin2, IconPin, IconPinEnd, IconPinFilled } from "@tabler/icons-react"

interface AdressProps {
  iframeSrc: string
  adressLine: string
  gMapsHref: string
}

export default function Adress({ iframeSrc, adressLine, gMapsHref }: AdressProps) {
  return (
    <div id="endereco" className="flex flex-col max-w-[300px] flex-wrap gap-2 items-center">
      <span className="flex gap-1 text-white pb-2">
        <IconMapPin />
        Endereço 
      </span>
      <iframe src={iframeSrc} className="w-[280px] max-[280px]:w-[200px] h-[250px]" loading="lazy" title="Endereço"></iframe>
      <div className="py-2 px-4">
        <a href={gMapsHref} target="_blank" className="flex flex-col gap-4 text-zinc-300 active:text-zinc-200 text-center text-md">
          <address>{adressLine}</address>
          <div className="flex gap-1 text-center justify-center">
            <IconMap />
            <span>Abrir no Google Maps</span>
          </div>
        </a>
      </div>
    </div>
  )
}
