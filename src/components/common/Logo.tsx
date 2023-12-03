import Link from "next/link"
import Image from "next/image"

interface LogoProps {
    image: any
    width?: number
    className?: string
}

export default function Logo({ image, width, className }: LogoProps) {
    return (
        <Link className={`flex flex-col items-center`} href="/" id="logo">
            <h1>
                <Image
                    src={image}
                    width={width ?? 80}
                    alt="Dra. Daniela Aline Conte especialista e mestre em prótese e reabilitação oral"
                    className={className ?? ''}
                />
            </h1>
        </Link>
    )
}