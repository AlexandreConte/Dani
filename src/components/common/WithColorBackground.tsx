interface WithColorBackgroundProps {
    children: any
}

export default function WithColorBackground({ children }: WithColorBackgroundProps) {
    return (
        <div className="bg-[#67C3C6]">
            {children}
        </div>
    )
}