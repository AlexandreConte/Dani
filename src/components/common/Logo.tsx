import Link from "next/link"
import { DetailedHTMLProps, ImgHTMLAttributes } from "react"

interface LogoProps {
    image: DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>
    className?: string
}

export default function Logo({ image, className }: LogoProps) {
    return (
        <Link className={`flex flex-col items-center ${className}`}
            href="/"
            id="logo"
        >
            <h1>
                <>{image}</>
            </h1>
        </Link>
    )
}