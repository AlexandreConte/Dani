import Link from "next/link"
import Image from "next/image"

interface LogoProps {
    logoImage: any
    width?: number
    className?: string
    altLogo?: string
}

export default function Logo({ logoImage, width, className }: LogoProps) {
    return (
        <Link className={`flex flex-col items-center`} href="/" id="logo">
            <h1>
                <Image
                    src={logoImage}
                    alt={`Logo ${logoImage}`}
                    className={className ?? 'w-[200px] sm:w-[200px] md:w-[300px] lg:w-[400px] xl:w-[600px]'}
                />
            </h1>
        </Link>
    )
}