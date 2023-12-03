interface AboutProps {
    className?: string
}

export default function About({ className }: AboutProps) {
    return (
        <main id="sobre" className={`${className ?? ''}`}>
            Sobre
        </main>
    )
}
