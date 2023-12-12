import Link from "next/link"

import styles from "@/styles/Logo.module.css"

interface LogoProps {
    className?: string
}

export default function Logo({ className }: LogoProps) {
    return (
        <Link className={`flex flex-col items-center ${className}`}
            href="/"
            id="logo"
        >
            <h1 className={`${styles.logo} mx-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl selection:bg-transparent`}>
                Dra Daniela Conte
            </h1>
        </Link>
    )
}