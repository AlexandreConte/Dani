import { Slide } from "react-awesome-reveal"
import Area from "./common/Area"

interface MapsProps {
    iframeSrc: string
    adressLine: string
    gMapsHref: string
}

export default function Map({ iframeSrc, adressLine, gMapsHref }: MapsProps) {
    return (
        <Area className="flex-col-center mx-auto">
            <span className="text-center w-full text-white flex flex-col items-center justify-center text-2xl font-semibold">Endereço</span>
            <Slide duration={1000}>
                <div id="endereco" className="mt-8 flex-col-center">
                    <iframe src={iframeSrc} className="w-full h-[300px]" loading="lazy" title="Endereço"></iframe>
                    <div className="pt-8 py-16 flex flex-col justify-center items-center px-4 text-center">
                        <address className="text-white">{adressLine}</address>
                        <a href={gMapsHref} target="_blank" className="underline text-white">
                            Google Maps
                        </a>
                    </div>
                </div>
            </Slide>
        </Area>
    )
}