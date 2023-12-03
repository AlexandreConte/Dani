interface WithBackgroundProps {
    children: any
}

export default function WithBackground({ children }: WithBackgroundProps) {
    return (
        <div className="bg-[#67C3C6]">
            {children}
        </div>
    )
}