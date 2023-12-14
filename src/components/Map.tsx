import { Slide } from "react-awesome-reveal"

interface MapsProps {
    iframeSrc: string
    adressLine: string
    gMapsHref: string
}

export default function Map({ iframeSrc, adressLine, gMapsHref }: MapsProps) {
    return (
        <Slide duration={1000}>
            <div id="endereco" className="mt-8 flex flex-col justify-center items-center">
                <iframe src={iframeSrc} width="300" height="350" loading="lazy"></iframe>
                <div className="pt-8 py-16 flex flex-col justify-center items-center px-4 text-center">
                    <address>{adressLine}</address>
                    <a href={gMapsHref} target="_blank" className="underline">
                        Google Maps
                    </a>
                </div>
            </div>
        </Slide>
    )
}