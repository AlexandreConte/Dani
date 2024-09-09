import Link from "next/link"

import styles from "@/styles/Logo.module.css"

interface LogoProps {
  className?: string
}

export default function Logo({ className }: LogoProps) {
  return (
    <Link className={`flex-col-center ${className}`}
      href="/"
      id="logo"
    >
      <h1 className={`${styles.logo} text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl select-none`}>
        Dra Daniela Conte
      </h1>
    </Link>
  )
}
