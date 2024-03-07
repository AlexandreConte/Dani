interface FullWidthProps {
    className: string
    children?: any
}

export default function FullWidth({ className, children }: FullWidthProps) {
    return (
        <div className={`min-w-full ${className ?? ''}`}>
            {children ?? null}
        </div>
    )
}