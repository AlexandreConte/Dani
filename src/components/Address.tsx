import { IconMap } from "@tabler/icons-react"

interface AdressProps {
  iframeSrc: string
  adressLine: string
  gMapsHref: string
}

export default function Adress({ iframeSrc, adressLine, gMapsHref }: AdressProps) {
  return (
    <div id="endereco" className="text-center w-full">
      <span className="flex gap-1 text-white pb-2">
      </span>
      <iframe src={iframeSrc} className="w-full min-h-[300px]" loading="lazy" title="Endereço" />
      <div className="py-4">
        <a href={gMapsHref} target="_blank"
          className="flex flex-col gap-4 text-zinc-300 active:text-zinc-200 text-center text-md shadow-2xl p-4 -translate-y-4 rounded-lg transition-transform">
          <address>{adressLine}</address>
          <div className="flex gap-1 text-center justify-center">
            <IconMap />
            <span className="pb-2">Abrir no Mapa</span>
          </div>
        </a>
      </div>
    </div >
  )
}
