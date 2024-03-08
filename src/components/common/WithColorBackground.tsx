interface WithColorBackgroundProps {
    children: any
}

export default function WithColorBackground({ children }: WithColorBackgroundProps) {
    return (
        <div className="bg">
            {children}
        </div>
    )
}